import Image from 'next/image'
import React from 'react'
import Comments from './Comments'

const Post = () => {
  return (
    <div className='fle flex-col gap-4'>
        {/* USER */}
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
                <Image src="" alt='UserImage' width={40} height={40} className='w-10 h-10 rounded-full'/>
                <span className='font-medium'>Lumi</span>
            </div>
            <Image src="/more.png" alt='More' width={16} height={16} />
        </div>
        {/* DESCRIPTION */}
        <div className='flex flex-col gap-4'>
            <div className='w-full min-h-96 relative'>
                <Image src="" alt='Post' fill className='object-cover rounded-md' />
            </div>
            <p>1212121212</p>
        </div>
        {/* INTERACTION */}
        <div className='flex items-center justify-between text-sm my-4'>
            <div className='flex gap-8'>
                <div className='flex items-center gap-4 bg-slate-50 p-2 rounded-xl'>
                    <Image src="/like.png" alt='Like' width={16} height={16} className='cursor-pointer' />
                    <span className='text-gray-300'>|</span>
                    <span className='text-gray-500'>123 <span className='hidden md:inline'> Likes</span></span>
                </div>
                <div className='flex items-center gap-4 bg-slate-50 p-2 rounded-xl'>
                    <Image src="/comment.png" alt='Coment' width={16} height={16} className='cursor-pointer' />
                    <span className='text-gray-300'>|</span>
                    <span className='text-gray-500'>123 <span className='hidden md:inline'> Comments</span></span>
                </div>
            </div>
            <div className=''>
                <div className='flex items-center gap-4 bg-slate-50 p-2 rounded-xl'>
                        <Image src="/share.png" alt='Share' width={16} height={16} className='cursor-pointer' />
                        <span className='text-gray-300'>|</span>
                        <span className='text-gray-500'>123 <span className='hidden md:inline'> Shares</span></span>
                </div>
            </div>
        </div>
        <Comments />
    </div>
  )
}

export default Post