import React from 'react'
import {Link, NavLink} from 'react-router-dom'

function Header() {
  return (
    <header className='bg-white shadow sticky z-50 top-0 px-9'>
        <nav className=' flex justify-between items-center w- py-4 px-9'>
            <div className=''>
                <img src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png" 
                alt="logo"
                className='h-12 mr-3' />
            </div>
            
            <div className=''>
                <ul className='flex justify-between items-center py-4'>
                    <li>
                        <NavLink to="/" className={({isActive}) => `block font-medium ${isActive ? "text-red-600 ":"text-black"} hover:text-red-600 text-xl pr-4 pl-3  py-3 `}>Home</NavLink>
                    </li>
                        
                    <li>
                        <NavLink to="About" className={({isActive}) => `block font-medium ${isActive ? "text-red-600":"text-black"} hover:text-red-600 text-xl pr-4 pl-3  py-3 `}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="contacts" className={({isActive}) => `block font-medium ${isActive ? "text-red-600":"text-black"} hover:text-red-600 text-xl pr-4 pl-3  py-3 `}>Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to="github" className={({isActive}) => `block font-medium ${isActive ? "text-red-600":"text-black"} hover:text-red-600 text-xl pr-4 pl-3  py-3 `}>Github</NavLink>
                    </li>
                    <li>
                        <NavLink to="blog" className={({isActive}) => `block font-medium ${isActive ? "text-red-600":"text-black"} hover:text-red-600 text-xl pr-4 pl-3  py-3 `}>blog</NavLink>
                    </li>
                    </ul>
                    
            </div>
            <div className='flex justify-between items-center py-4 '>
                <Link to="/#"
                className=" text-black hover:bg-gray-50 hover:shadow-sm focus:shadow-sm font-medium text-xl rounded-lg  px-6  py-4  focus:outline-none">Log in
                </Link>
                <Link to="register" className='text-white hover:bg-red-700 hover:shadow-lg font-medium bg-red-600 rounded-lg px-6 py-4 text-xl '> Get Started</Link>
                
            </div>

        </nav>

    </header>
  )
}

export default Header