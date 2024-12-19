import Image from 'next/image'
import React from 'react'
import { FaBars } from 'react-icons/fa6'
import Avatar from '@/public/images/Avatar.png'

const ProfileTrigger = () => {
  return (
    <div className='w-full rounded-full px-2 cursor-pointer flex items-center gap-2 border-[0.5px] border-zinc-500'>
        <div><FaBars size={20} color='#000' /></div>
        <div>
            <Image
                alt=''
                src={Avatar}
                width={40}
                height={40}
                className=''
             />
        </div>
    </div>
  )
}

export default ProfileTrigger