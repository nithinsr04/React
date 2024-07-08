import { useEffect, useId } from "react"
import React from 'react'



function Inputbox ({
  label,
  amount=0,
  currencyDisabled=false,
  currencyOptions=[],
  selectedCurrency = 'usd',
  onCurrencyChange,
  onAmountchange,
  }) {
  const id = useId()
  return (
    <div className='bg-white flex  p-3 rounded-lg text-sm'>
      <div className="flex flex-wrap rounded-lg p-2">
        <label className=' text-gray-500 mb-2 w-full' htmlFor={id}>{label}</label>
        <input className='outline-none shadow-lg rounded-md' 
        type="number"
        min={0} 
        id={id}
        placeholder="Amount" 
        disabled={currencyDisabled}
        value={amount}
        onChange={(e) => onAmountchange && onAmountchange(Number(e.target.value))}
        /> 
      </div>
      <div className="flex flex-wrap p-2 justify-end text-right">
        <label className="text-gray-500 mb-2 w-full">Currency Type</label>
        <select className="w-full outline-none shadow-lg cursor-pointer rounded-md" id="currency" 
        value={selectedCurrency}
        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency) => (<option key={currency} value={currency}>{currency}</option>))}
        </select>
      </div>
    </div>
  )
}

export default Inputbox