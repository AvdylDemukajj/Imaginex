import React, { Suspense } from 'react'
import FriendRequests from './FriendRequests'
import Birthday from './Birthday'
import Ad from '../Ad'
import UserInfoCard from './UserInfoCard'
import UserMediaCard from './UserMediaCard'
import { User } from '@prisma/client'

const RightMenu = ({ user }:{ user?:User }) => {
  return (
    <div className='flex flex-col gap-6'>
      {user ? (
        <>
          <Suspense fallback="loading...">
            <UserInfoCard user={user}/>
          </Suspense>
          <Suspense fallback="loading...">
            <UserMediaCard user={user}/>
          </Suspense>
        </>
      ) : null}
      <FriendRequests />
      <Birthday />
      <Ad size="md"/>
    </div>
  )
}

export default RightMenu