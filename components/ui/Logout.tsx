'use client'
import { logOutuser } from '@/app/actions/logout'
import React from 'react'
import { CiLogout } from 'react-icons/ci'

const Logout = () => {
    return (
        <CiLogout
            size={25}
            color='#000'
            className='cursor-pointer'
            onClick={async () => await logOutuser()}
        />
    )
}

export default Logout