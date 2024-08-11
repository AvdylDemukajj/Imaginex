import Image from 'next/image'
import React from 'react'

const Ad = ({ size }:{ size: "sm" | "md" | "lg" }) => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
        {/* TOP */}
        <div className='flex items-center font-medium text-gray-500 justify-between'>
            <span>Sponsored Ad</span>
            <Image src="/more.png" alt='More' width={16} height={16} />
        </div>
        {/* BOTTOM */}
        <div className={`flex flex-col mt-4 ${size === 'sm' ? "gap-2" : "gap-4"}`}>
            <div className={`relative w-full ${size === 'sm' ? "h-24" : size === "md" ? "h-36" : "h-48"}`}>
                <Image src="/" alt='AddPost' fill className='rounded-lg object-cover' />
            </div>
            <div className='flex items-center gap-4'>
                <Image src="/" alt='ProfilePic' width={24} height={24} className='rounded-full w-6 h-6 object-cover' />
                <span className='text-blue-500 font-medium'>Title</span>
            </div>
            <p className={size === 'sm' ? 'text-xs' : 'text-sm'}>
                {
                    size === 'sm' ? 'short description' : size === 'md' ? "longer description" : "longest description"
                }
            </p>
            <button className='bg-gray-200 text-gray-500 p-2 text-sm rounded-lg'>Learn More</button>
        </div>
    </div>
  )
}

export default Ad