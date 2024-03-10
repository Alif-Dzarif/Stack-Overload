import React from 'react'
import { useNavigate } from 'react-router-dom'
import router from '../router';

export default function Navbar() {
  const navigate = useNavigate();

  const navigateTo = (route) => {
    navigate(route)
  }

  return (
    <div className='bg-[#000C25] text-white flex py-5 px-5  justify-between drop-shadow-xl'>
      <div>Stack Overload</div>
      <div className='flex gap-x-6'>
        <button className='bg-[#182251] py-2 px-4 rounded-md font-semibold'>Menu</button>
        <button className='bg-[#182251] py-2 px-4 rounded-md font-semibold'>Menu</button>
        <button className='bg-[#182251] py-2 px-4 rounded-md font-semibold'>Menu</button>
        <input className='bg-[#182251] py-2 px-4 rounded-md placeholder:text-white focus:outline-none border-none' type="text" placeholder='search' />
      </div>
      <div className='flex gap-x-2'>
        <button onClick={() => navigateTo("/login")} className='bg-[#b19204] text-white font-semibold py-2 px-4 rounded-md'>SignIn</button>
        <div className=' border-l-2 border-white'></div>
        <button onClick={() => navigateTo("/register")} className='bg-[#b19204] text-white font-semibold py-2 px-4 rounded-md'>SignUp</button>
      </div>
    </div>
  )
}
