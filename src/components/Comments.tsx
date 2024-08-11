import Image from 'next/image'
import React from 'react'

const Comments = () => {
  return (
    <div className=''>
        {/* WRITE */}
        <div className='flex items-center gap-4'>
            <Image src="" alt='ProfilePic' width={32} height={32} className='w-8 h-8 rounded-full' />
            <div className='flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full'>
                <input type="text" placeholder='Write a comment...' className='bg-transparent outline-none flex-1' />
                <Image src="/emoji.png" alt='Emoji' width={16} height={16} className='cursor-pointer' />
            </div>
        </div>
        {/* COMMENTS */}
        <div className='flex gap-4 justify-between mt-6'>
            {/* AVATAR */}
            <Image src="" alt='ProfilePic' width={40} height={40} className='w-18 h-18 rounded-full' />
            {/* DESCRIPTION */}
            <div className='flex flex-col gap-2 flex-1'>
                <span className='font-medium'>Lumi</span>
                <p>23121321212121321</p>
                <div className='flex items-center gap-8 text-xs text-gray-500 mt-2'>
                    <div className='flex items-center gap-4 bg-slate-50 p-2 rounded-xl'>
                        <Image src="/like.png" alt='Like' width={12} height={12} className='cursor-pointer' />
                        <span className='text-gray-300'>|</span>
                        <span className='text-gray-500'>123 <span className='hidden md:inline'> Likes</span></span>
                    </div>
                    <div className=''>
                        Reply
                    </div>
                </div>
            </div>
            {/* ICON */}
            <div className=''>
                <Image src="/more.png" alt='More' width={16} height={16} className='cursor-pointer w-4 h-4' />
            </div>
        </div>
    </div>
  )
}

export default Comments