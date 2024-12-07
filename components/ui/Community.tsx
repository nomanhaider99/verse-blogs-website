import Image from 'next/image'
import React from 'react'
import CommunityImage from '@/public/images/Community.png'
import Button from './Button'

const Community = () => {
  return (
    <div className='w-full flex flex-col items-center gap-4 md:px-10 px-4 pt-5 pb-10'>
        <div className='flex flex-col items-center gap-2'>
            <div className='md:text-[4rem] text-[3rem] leading-none text-darkblue font-bold'>We Are Here To Build Community</div>
            <div className='text-lightblue md:w-3/4 w-full text-center'>A place where connections are nurtured, ideas are shared, and collaboration inspires growth. Together, we create a foundation of support and unity to build a brighter future.</div>
            <div>
                <Button
                    text='Start Building Community'
                    outline
                 />
            </div>
        </div>
        <div>
            <Image
                alt=''
                src={CommunityImage}
                width={900}
                height={450}
             />
        </div>
    </div>
  )
}

export default Community