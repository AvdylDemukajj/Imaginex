import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import ProfileCard from './ProfileCard'
import Ad from '../Ad'

const LeftMenu = ({type}: {type: "home" | "profile"}) => {
  return (
    <div className='flex flex-col gap-6'>
        {
          type === "home" && <ProfileCard />
        }
        <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col text-gray-500 gap-2'>
            <Link href="/" className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100'>
              <Image src="/posts.png" alt="PostIcon" width={20} height={20} />
              <span>My Posts</span>
            </Link>
            <hr className='border-t-1 border-gray-50 w-36 self-center'/>
            <Link href="/" className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100'>
              <Image src="/activity.png" alt="ActivityIcon" width={20} height={20} />
              <span>Activity</span>
            </Link>
            <hr className='border-t-1 border-gray-50 w-36 self-center'/>
            <Link href="/" className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100'>
              <Image src="/market.png" alt="MarketPlaceIcon" width={20} height={20} />
              <span>Marketplace</span>
            </Link>
            <hr className='border-t-1 border-gray-50 w-36 self-center'/>
            <Link href="/" className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100'>
              <Image src="/events.png" alt="EventsIcon" width={20} height={20} />
              <span>Events</span>
            </Link>
            <hr className='border-t-1 border-gray-50 w-36 self-center'/>
            <Link href="/" className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100'>
              <Image src="/albums.png" alt="AlbumsIcon" width={20} height={20} />
              <span>Albums</span>
            </Link>
            <hr className='border-t-1 border-gray-50 w-36 self-center'/>
            <Link href="/" className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100'>
              <Image src="/videos.png" alt="VideosIcon" width={20} height={20} />
              <span>Videos</span>
            </Link>
            <hr className='border-t-1 border-gray-50 w-36 self-center'/>
            <Link href="/" className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100'>
              <Image src="/news.png" alt="NewsIcon" width={20} height={20} />
              <span>News</span>
            </Link>
            <hr className='border-t-1 border-gray-50 w-36 self-center'/>
            <Link href="/" className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100'>
              <Image src="/courses.png" alt="CoursesIcon" width={20} height={20} />
              <span>Courses</span>
            </Link>
            <hr className='border-t-1 border-gray-50 w-36 self-center'/>
            <Link href="/" className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100'>
              <Image src="/lists.png" alt="ListsIcon" width={20} height={20} />
              <span>Lists</span>
            </Link>
            <hr className='border-t-1 border-gray-50 w-36 self-center'/>
            <Link href="/" className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100'>
              <Image src="/settings.png" alt="SettingsIcon" width={20} height={20} />
              <span>Settings</span>
            </Link>
        </div>
        <Ad size='sm'/>
    </div>
  )
}

export default LeftMenu