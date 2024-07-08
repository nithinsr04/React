import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import { useState } from 'react'
import './app.css'

export function App() {
  const [counter, setCounter] = useState(15)
  const addValue = () =>{
    setCounter(counter+1)
    console.log(counter);
  }
  const removeValue = () => {
    setCounter(counter-1);
    setCounter((prevCounter) => prevCounter -1)
    setCounter((prevCounter) => prevCounter -1)
    setCounter((prevCounter) => prevCounter -1)
    setCounter((prevCounter) => prevCounter -1)

    console.log(counter);
  }

  return (
    <>
      <h1> React course with hithesh {counter}</h1>
      <h2>Counter while : {counter}</h2>
      <button onclick ={addValue} > Add value</button>
      <button onclick ={removeValue}> Remove Value</button>
      <p> footer : {counter}</p>
    </>
  )
}
