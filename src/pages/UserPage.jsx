import React from 'react'
import bannerImage from '../assets/bannerImage.png'
import profileImage from '../assets/profile.png'

export default function UserPage() {
  return (
    <div className='grid grid-cols-5'>

      {/* Left Content */}
      <div className='col-span-4 py-5 px-10 '>

        {/* Profile Image Content */}
        <div className='relative'>
          <div>
            <img src={bannerImage} alt="" className=' w-full h-[300px]' />
          </div>
          <div className='absolute top-[50%] transform -translate-y-[50%]'>
            <img src={profileImage} alt="" />
          </div>
        </div>

        {/* Etc Content */}

        <div className='pr-6 mt-10'>
          <div className='flex justify-between'>
            <div>
              <h1 className='text-5xl font-bold'>Alan Pratama Rusfi</h1>
              <p className='text-2xl'>Kepala Sekolah</p>
            </div>

            <div className='grid grid-cols-1 gap-y-3'>
              <div>
                <button className='bg-[#00903a] py-1 px-10 text-3xl rounded-lg text-white w-full'>Ikuti</button>
              </div>
              <div>
                <button className='bg-[#ff1111] py-1 px-10 text-3xl rounded-lg text-white'>Laporkan</button>
              </div>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className='mt-10'>
          <p className='text-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        {/* Portofolio */}
        <div className='mt-10 border-2 rounded-xl'>
          <div className='p-5 border-b-2'>
            <h1 className='text-xl'>Portofolio</h1>
          </div>
          <div className='h-52'>

          </div>
        </div>

        {/* Skill */}
        <div className='mt-10 border-2 rounded-xl'>
          <div className='p-5'>
            <h1 className='text-xl'>Keahlian</h1>
          </div>
          <div className='h-52'>

          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className='col-span-1 p-5'>
        <div className='bg-[#000C25] h-full w-full rounded-xl'>
          <div></div>
        </div>
      </div>
    </div>
  )
}
