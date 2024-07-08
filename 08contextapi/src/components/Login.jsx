import React from 'react'

function Login() {
  return (
    <div>
        <div className='flex flex-col py-10 px-5 justify-center outline-none bg-green-400' >
        <div className='p-5 flex flex-col bg-black'>
        <label htmlFor="username"> Login</label>
        <input type="text" id="username" name="username" placeholder="Username" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Password" />
        <button> Submit</button>
        </div>
        </div>
    </div>
  )
}

export default Login