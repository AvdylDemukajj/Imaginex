import Link from 'next/link'
import React from 'react'
import MobileMenu from './MobileMenu'
import Image from 'next/image'

const Navbar =() =>{
  return (
    <div className='flex items-center justify-between h-24'>
        {/* LEFT */}
        <div className='md:hidden ld:block w-[20%]'>
            <Link href="/" className='font-bold text-xl text-blue-800'>IMAGINEX</Link>
        </div>
        {/* CENTER */}
        <div className='hidden md:flex w-[50%] text-sm'>
            <div className='flex gap-6 text-gray-600'>
                <Link href="/" className='flex gap-2 items-center'>
                    <Image src="/home.png" alt="Homepage" width={16} height={16} className='w-4 h-4'/>
                    <span>Homepage</span>
                </Link>
                <Link href="/" className='flex gap-2 items-center'>
                    <Image src="/friends.png" alt="Friends" width={16} height={16} className='w-4 h-4'/>
                    <span>Friends</span>
                </Link>
                <Link href="/" className='flex gap-2 items-center'>
                    <Image src="/stories.png" alt="Stories" width={16} height={16} className='w-4 h-4'/>
                    <span>Stories</span>
                </Link>
            </div>
        </div>
        {/* RIGHT */}
        <div className='w-[30%] flex items-center gap-4 xl:gap-8 justify-end'>
            
            <MobileMenu />
        </div>
    </div>
  )
}

export default Navbar