import { useState, useCallback, useEffect, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length,setLength]               = useState(8);
  const [numberAllowed,setnumberAllowed] = useState(false);
  const [charAllowed,setcharAllowed]     = useState(false);
  const [password,setPassword]           = useState('');
  const passwordref                      = useRef(null);

  const generatePassword = useCallback (() => {
    let pass=""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklnmopqrstuvwxyz"
    if(numberAllowed) str += "123456789"
    if(charAllowed) str += "!@#$%^&*()_+"
    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass +=str.charAt(char)
    }
    setPassword(pass);
  },[length,numberAllowed,charAllowed]) 
  useEffect(() => {

      generatePassword()

  }, [length,numberAllowed,charAllowed])
  const copypasswordtoClipboard= () =>{
    window.navigator.clipboard.writeText(password);
    passwordref.current?.select()
    
  }

  
  
  return (
    <>
    <div className='bg-white w-full max-w-lg mx-auto justify-center shadow-md rounded-lg px-4 py-3 my-8 bg-slate-500 text-orange-500'>
      <h1 className='text-white text-center my-3'>
      Password Generator
      </h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" className='outline-none w-full py-1 px-3' value={password} name="password" id="password" placeholder='Password' ref={passwordref} readOnly />
        <button  className='outline-none bg-blue-500 px-3 py-1 text-black' onClick={copypasswordtoClipboard}>Copy</button>
      </div>
      <div className=' flex items-center gap-x-2 px-5'>
        <input type="range"  className="cursor-pointer" min={1} max={100}  value={length} name="length" id="length" onChange={(e) => setLength(e.target.value)}/>
        <label htmlFor="Length">length : {length}</label>
        <input type="checkbox" defaultChecked={charAllowed} name="character" id="character" onChange={() => setcharAllowed((prev) => (!prev))} />
        <label htmlFor="Number">Number</label>
        <input type="checkbox" defaultChecked={numberAllowed} name="Number" id="Number" onChange={() => setnumberAllowed((prev) => (!prev))} />
        <label htmlFor="Number">Number</label>
      </div>
      
    </div>
    </>
  )
}

export default App
