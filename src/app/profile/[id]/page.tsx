import Feed from '@/components/Feed'
import LeftMenu from '@/components/LeftMenu'
import RightMenu from '@/components/RightMenu'
import Image from 'next/image'
import React from 'react'

const ProfilePage = () => {
  return (
    <div className='flex gap-6 pt-6'>
    {/* LEFT */}
    <div className="hidden xl:block w-[20%]">
      <LeftMenu type='profile'/>
    </div>
    {/* CENTER */}
    <div className="w-full lg:w-[70%] xl:w-[50%]">
      <div className="flex gap-6 flex-col">
        <div className='lex flex-col items-center justify-cente'>
          <div className='w-full h-full relative'>
            <Image src="/" alt="CoverPicture" fill className=' rounded-md object-cover' />
            <Image src="/" alt="ProfilePicture" width={128} height={128} className='w-32 h-32 rounded-full absolute left-0 right0 m-auto -bottom-16 ring-4 ring-white  object-cover' />
          </div>
          <h1 className='mt-20 mb-4 text-2xl font-medium'>User Name</h1>
          <div className='flex items-center justify-center gap-12 mb-4'>
            <div className='flex flex-col items-center'>
              <span className='font-medium'>123</span>
              <span className='text-sm'>Posts</span>
            </div>
            <div className='flex flex-col items-center'>
              <span className='font-medium'>123</span>
              <span className='text-sm'>Followers</span>
            </div>
            <div className='flex flex-col items-center'>
              <span className='font-medium'>123</span>
              <span className='text-sm'>Following</span>
            </div>
          </div>
        </div>
        <Feed />
      </div>
    </div>
    {/* RIGHT */}
    <div className="hidden lg:block w-[30%]">
      <RightMenu userId='test' />
    </div>
  </div>
  )
}

export default ProfilePage