import { linksData } from '@/data/links'
import Link from 'next/link'
import React from 'react'


const NavLinks = () => {
  return (
    <div className='flex items-center gap-5'>
        {
            linksData.map((item, index) => (
                <Link
                    className='text-zinc-800 hover:text-darkblue'
                    href={item.route}
                    key={index}
                >
                    {item.link}
                </Link>
            ))
        }
    </div>
  )
}

export default NavLinks