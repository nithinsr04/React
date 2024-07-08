import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Inputbox from './components/Inputbox'
import useCurrencyInfo from './hooks/useCurrency'
function App() {
  const [amount,setAmount] = useState(0)
  const [from,setFrom] = useState('usd')
  const [to,setTo] = useState('inr')
  const [convertedAmount,setconvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)
  const swap = () => {
    setFrom(to);
    setTo(from);
    setconvertedAmount(amount)
    setAmount(convertedAmount)
  }
  function convert(){
    setconvertedAmount(amount * currencyInfo[to]);
  }
  return (
    <>
      <div className='w-full h-screen flex flex-wrap justify-center rounded-lg items-center bg-cover bg-no-repeat' style={{backgroundImage: 'url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgMzcyRPKaiwLocZqCFFMdJ0OW38ivPSJHYA0RjK-NDrKdGGEZYUmyC50uDSk5Wx9MzMTTu29jQ2H33rWd0-E08B29s1WaWPhQ4LML7yQQKqQMyFjE_K8zJ4-xfrHowl3vwXLTPxIuR9pNxCtixKJKUZDWuef7t0HHCslW2iSUAsJ5MCPhjf65uugt0kwgg/s1536/cc.jpeg)' }}>
        <div className='w-full'>
        <div className='w-full  max-w-md mx-auto border border-gray-60 p-5 rounded-lg backdrop-blur-sm bg-white/30'>
        <form onSubmit={(e) => {e.preventDefault(),convert()}}>
          <div className='w-full py-0.5'>
            <Inputbox  label="From"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setFrom(currency)}
            onAmountchange={(amount) => setAmount(amount)}
            selectedCurrency={from}
            />
          </div>
          <div className='relative w-full h-0.5 p-0.5'>
            <button className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white text-white rounded-lg px-2 py-0.5 bg-blue-600' onClick={swap}>Swap</button>
          </div>
          <div className='w-full py-1'>
            <Inputbox 
            label="To"
            currencyOptions={options}
            amount={convertedAmount}
            onCurrencyChange={(currency) => setTo(currency)}
            selectedCurrency={to}
            currencyDisabled/>
          </div>
          <div className='w-full py-2'>
            <button className='w-full py-3 px-4 bg-blue-600 text-white rounded-lg ' type='submit'>Convert {from.toUpperCase()} to {to.toUpperCase()} </button>
          </div>
          </form>
        </div>
        </div>
      </div>
    </>
  )
}

export default App
