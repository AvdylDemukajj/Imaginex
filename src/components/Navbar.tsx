import Link from 'next/link'
import React from 'react'
import MobileMenu from './MobileMenu'

const Navbar =() =>{
  return (
    <div className='flex items-center justify-between h-24'>
        {/* LEFT */}
        <div className=''>LEFT
            <Link href="/" className='font-bold text-xl text-blue-800'>IMAGINEX</Link>
        </div>
        {/* CENTER */}
        <div className='hidden'>CENTER</div>
        {/* RIGHT */}
        <div className=''>RIGHT
            <MobileMenu />
        </div>
    </div>
  )
}

export default Navbar