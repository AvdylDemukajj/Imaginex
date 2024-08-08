import Link from 'next/link'
import React from 'react'
import MobileMenu from './MobileMenu'
import Image from 'next/image'
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, SignIn, UserButton } from '@clerk/nextjs'

const Navbar =() =>{
  return (
    <div className='flex items-center justify-between h-24'>
        {/* LEFT */}
        <div className='md:hidden ld:block w-[20%]'>
            <Link href="/" className='font-bold text-xl text-blue-800'>IMAGINEX</Link>
        </div>
        {/* CENTER */}
        <div className='hidden md:flex w-[50%] text-sm items-center justify-between'>
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
            <div className='hidden xl:flex p-2 bg-slate-100 items-center rounded-xl'>
                <input type="text" placeholder='Search...' className='bg-transparent outline-none' />
                <Image src="/search.png" alt="earch" width={14} height={14} />
            </div>
        </div>
        {/* RIGHT */}
        <div className='w-[30%] flex items-center gap-4 xl:gap-8 justify-end'>
            <ClerkLoading>
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" role="status"/>
            </ClerkLoading>
            <ClerkLoaded>
                <SignedIn> 
                    <div className='curser-pointer'>
                        <Image src="/people.png" alt='People' width={24} height={24} />
                    </div>
                    <div className='curser-pointer'>
                        <Image src="/messages.png" alt='Messages' width={20} height={20} />
                    </div>
                    <div className='curser-pointer'>
                        <Image src="/notifications.png" alt='Notifications' width={20} height={20} />
                    </div>
                    <UserButton />
                </SignedIn>
                <SignedOut>
                    <div className='flex ic gap-2 text-sm'>
                        <Image src='/login.png' alt='Login' width={20} height={20} />
                        <Link href='/sign-in'>Login/Register</Link>
                    </div>    
                </SignedOut>
            </ClerkLoaded>
            <MobileMenu />
        </div>
    </div>
  )
}

export default Navbar