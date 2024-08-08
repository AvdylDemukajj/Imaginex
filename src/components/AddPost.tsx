import Image from 'next/image'
import React from 'react'

const AddPost = () => {
  return (
    <div className='p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm'>
        {/* AVATAR */}
        <Image src='' alt='Avatar' width={40} height={40} className='w-12 h-12 object-cover rounded-full'/>
        {/* POST */}
        <div className='flex-1'>
            {/* TEXT INPUT */}
            <div className='flex gap-4'>
                <textarea placeholder="What's on your mind?" className='bg-slate-100 rounded-lg flex-1 p-2'></textarea>
                <Image src='/emoji.png' alt='Avatar' width={20} height={20} className='w-5 h-5 cursor-pointer self-end'/>
            </div>
            {/* POST OPSIONS */}
            <div className='flex items-center gap-4 mt-4 text-gray-400 flex-wrap'>
                <div className='flex items-center gap-2 cursor-pointer'>
                    <Image src='/addimage.png' alt='AddImage' width={20} height={20} />
                    Photo
                </div>
                <div className='flex items-center gap-2 cursor-pointer'>
                    <Image src='/addVideo.png' alt='AddVideo' width={20} height={20} />
                    Video
                </div>
                <div className='flex items-center gap-2 cursor-pointer'>
                    <Image src='/poll.png' alt='Poll' width={20} height={20} />
                    Poll
                </div>
                <div className='flex items-center gap-2 cursor-pointer'>
                    <Image src='/addevent.png' alt='AddEvent' width={20} height={20} />
                    Event
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddPost