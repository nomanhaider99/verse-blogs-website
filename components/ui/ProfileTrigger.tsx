import Image from 'next/image'
import React from 'react'
import { FaBars } from 'react-icons/fa6'
import Avatar from '@/public/images/Avatar.png'
import { currentUser } from '@/app/actions/currentUser'

const ProfileTrigger = async () => {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  return (
    <div className='w-full rounded-full px-2 cursor-pointer flex items-center gap-2 border-[0.5px] border-zinc-500'>
      <div><FaBars size={20} color='#000' /></div>
      <div>
        <Image
          alt='User Avatar'
          src={user.image || Avatar}
          width={40}
          height={40}
          className='rounded-full'
        />
      </div>
    </div>
  )
}

export default ProfileTrigger
