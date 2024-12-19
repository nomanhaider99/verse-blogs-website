import React from 'react'
import Logo from '../ui/Logo'
import NavLinks from '../ui/NavLink'
import Button from '../ui/Button'
import Modal from '../models/Modal'
import Sign from '../ui/Sign'
import { currentUser } from '@/app/actions/currentUser'
import Profile from '../ui/Profile'
import ProfileTrigger from '../ui/ProfileTrigger'

const Header = async () => {
  const user = await currentUser();
  return (
    <div className='w-full bg-white shadow-[4px] sticky top-0 z-50 flex items-center justify-between md:py-4 py-2 md:px-10 px-4'>
      <div>
        <Logo />
      </div>
      <div className='md:flex hidden items-center gap-5'>
        <NavLinks />
      </div>
      <div>
        {
          user ? <Modal
            body={<Profile />}
            trigger={<ProfileTrigger />}
            customWidth='w-[80vw]'

          /> : <Modal
            body={<Sign />}
            trigger={<Button
              text='Sign Up/Sign In'
              outline
            />}
            customWidth='w-[40vw]'
          />
        }
      </div>
    </div>
  )
}

export default Header