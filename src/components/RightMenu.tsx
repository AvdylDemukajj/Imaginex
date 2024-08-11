import React from 'react'
import FriendRequests from './FriendRequests'
import Birthday from './Birthday'
import Ad from './Ad'

const RightMenu = ({ userId }:{ userId?:string }) => {
  return (
    <div className='flex flex-col gap-6'>
      <FriendRequests />
      <Birthday />
      <Ad />
    </div>
  )
}

export default RightMenu