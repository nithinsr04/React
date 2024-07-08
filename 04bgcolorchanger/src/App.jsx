import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('white')

  return (
    <>
    <div className='flex flex-wrap fixed top-5 justify-center rounded-md inset-x-0 px-12'>
      <div className= 'justify-center px-3 py-1 rounded-md'>
        <div className='flex flex-wrap justify-center bg-green-500 px-2 py-1 shadow-lg gap-3 rounded-3xl'>
        <h1 className= 'justify-center px-16 py-3'>Bg Color Changer with Vite</h1>
        </div>
      </div>
    </div>
    <div className='md:flex w-full h-screen' style={{backgroundColor : color}}>
      <div className='fixed flex flex-wrap justify-center bottom-11 inset-x-0 px-12'>
        <div className='flex flex-wrap justify-center bg-white px-3 py-2 shadow-lg gap-3 rounded-3xl'>
          <button className=' outline-none px-4 py-1 rounded-full shadow-lg bg-violet-700' onClick={() => setColor('violet')}> Violet</button>
          <button className=' outline-none px-4 py-1 rounded-full shadow-lg bg-indigo-700' onClick={() => setColor('indigo')}> Indigo</button>
          <button className=' outline-none px-4 py-1 rounded-full shadow-lg bg-blue-700'   onClick={() => setColor('blue')}> Blue</button>
          <button className=' outline-none px-4 py-1 rounded-full shadow-lg bg-green-700'  onClick={() => setColor('green')}> Green</button>
          <button className=' outline-none px-4 py-1 rounded-full shadow-lg bg-yellow-600' onClick={() => setColor('yellow')}> Yellow</button>
          <button className=' outline-none px-4 py-1 rounded-full shadow-lg bg-orange-600' onClick={() => setColor('orange')}> Orange</button>
          <button className=' outline-none px-4 py-1 rounded-full shadow-lg bg-red-700'    onClick={() => setColor('red')}> Red</button>
        </div>
      </div>

    </div>
    </>
  )
}

export default App

