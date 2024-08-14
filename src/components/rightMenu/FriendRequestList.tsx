"use client";

import { FollowRequest, User } from '@prisma/client';
import Image from 'next/image';
import React from 'react'

type RequestWithUser = FollowRequest & {sender: User}

const FriendRequestList =({requests}:{requests: RequestWithUser[]}) => {
  return (
    <div className=''>
        {requests.map(request => (
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
                <Image src="/" alt='' width={40} height={40} className='w-10 h-10 rounded-full object-cover'/>
                <span className='font-semibold'>User 1</span>
            </div>
            <div className='flex gap-3 justify-end'>
            <Image src="/accept.png" alt='' width={20} height={20} className='cursor-pointer'/>
            <Image src="/reject.png" alt='' width={20} height={20} className='cursor-pointer'/>
            </div>
        </div>))}
    </div>
  )
}

export default FriendRequestList