import Image from 'next/image'
import React from 'react'

const Stories = () => {
  return (
    <div className='p4 bg-white rounded lg: shadow-md overflow-scroll text-xs scrollbar-hidde'>
        <div className='flex gap-8 w-max'>
            {/* STORY */}
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
                <Image src="" alt='Stories' width={80} height={80} className='w-20 h-20 rounded-full ring-2' />
                <span className='font-medium'>Baba</span>
            </div>
            {/* STORY */}
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
                <Image src="" alt='Stories' width={80} height={80} className='w-20 h-20 rounded-full ring-2' />
                <span className='font-medium'>Baba</span>
            </div>
            {/* STORY */}
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
                <Image src="" alt='Stories' width={80} height={80} className='w-20 h-20 rounded-full ring-2' />
                <span className='font-medium'>Baba</span>
            </div>
            {/* STORY */}
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
                <Image src="" alt='Stories' width={80} height={80} className='w-20 h-20 rounded-full ring-2' />
                <span className='font-medium'>Baba</span>
            </div>
            {/* STORY */}
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
                <Image src="" alt='Stories' width={80} height={80} className='w-20 h-20 rounded-full ring-2' />
                <span className='font-medium'>Baba</span>
            </div>
            {/* STORY */}
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
                <Image src="" alt='Stories' width={80} height={80} className='w-20 h-20 rounded-full ring-2' />
                <span className='font-medium'>Baba</span>
            </div>
        </div>
    </div>
  )
}

export default Stories