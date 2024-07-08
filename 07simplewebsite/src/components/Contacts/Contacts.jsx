import React from 'react'

function Contacts() {
  return (
    <div className='min-w-max flex justify-center'>
      <div className='bg-white flex justify-center items-end py-20'>
        <div className='flex flex-col  justify-center items-center rounded-md bg-gray-100 p-5'>
          <h1 className='text-3xl font-serif font-bold py-2'>Get in touch:</h1>
          <p className=' text-gray-500 text-md font-medium'>Fill in the form to start a Conversation</p>
          <br/><br/>
            <div className=' flex flex-col '>
              <div className='inline-flex items-center text-center px-4 pb-2'>
                <svg className="block" xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 384 584"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                <div className='inset-0  text-gray-700 text-md font-medium'>
                  <p className="text-md font-medium">&nbsp;Acmc Inc, Street,</p>
                  <p className="text-md font-medium ">&nbsp;City, State, Zip</p>
                </div>
              </div>
              <div className='inline-flex items-center px-4 pb-2'>
                <svg  xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
                <p className='inset-0  text-gray-700 text-md font-medium'> &nbsp;+91 7338077324</p>
              </div>
              <div className='inline-flex justify-center items-center px-4 pb-2'>
                <svg className='block' xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                <p className='inset-0  text-gray-700 text-md font-medium'>&nbsp;nithinsr04@gmail.com</p>
              </div>
            </div>
          </div>
          <div className=' p-5'>
          <form action="" >
            <div className='flex flex-col justify-center items-center'>
            <div className=' border-2  border-gray-300 rounded-lg p-1 mb-3'>
              <input className='outline-none mr-36 pl-3 py-3 rounded-lg placeholder:text-xl'   type="text" placeholder='Full Name' />
            </div>
            <div className=' border-2  border-gray-300 rounded-lg mb-3 p-1'>
              <input className='outline-none mr-36 pl-3 py-3 rounded-lg placeholder:text-xl' type="email" placeholder='Email'/>
            </div>
            <div className=' border-2  border-gray-300 rounded-lg p-1 mb-3'>
              <input className='outline-none mr-36 pl-3 py-3 rounded-lg placeholder:text-xl' type="text"  placeholder='Telephone Number' />
            </div>
            <div className=''>
              <button className='bg-red-600 h-12 w-40 rounded-lg text-white hover:bg-red-700 text-center text-xl font-medium' type="submit">Submit</button>
            </div>
            </div>
          </form>
        </div>
        </div> 
    </div>
    
  )
}

export default Contacts