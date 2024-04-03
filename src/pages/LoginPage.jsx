import React from 'react'

export default function LoginPage() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className=' w-1/3 border-2 border-black rounded-[1.5rem] overflow-hidden'>
        <div className='bg-[#c5a100] w-1/4 text-center text-white p-2 rounded-br-lg'>
          <h3 className='text-xl font-bold'>LOGIN</h3>
        </div>
        <div className='flex justify-center p-5'>
          <div className='flex flex-col gap-y-5'>
            <div className=' w-2/4'>
              <label>Username</label>
              <div>
                <input type="text" name='username' className='min-w-[25rem] rounded-full' />
              </div>
            </div>
            <div className=' w-full'>
              <label>Password</label>
              <div>
                <input type="password" name="password" className='min-w-[25rem] rounded-full' />
              </div>
            </div>
            <h3 className=' text-end'>Forgot username / password ?</h3>
            <div>
              <button className='bg-[#c5a100] w-full text-white py-2 font-bold rounded-full'>LOGIN</button>
            </div>
            <div className='text-center mt-5'>
              <h3>Don't have account yet ?</h3>
              <a href="/register" className='font-bold'>Register</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
