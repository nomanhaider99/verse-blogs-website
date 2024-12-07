import { featuresData } from '@/data/features'
import React from 'react'
import Feature from '../ui/Feature'

const Features = () => {
  return (
    <div className='w-full md:px-10 px-4 py-10 flex flex-col items-center gap-4'>
      {/* Texts */}
      <div className='flex flex-col gap-1'>
        <div className='md:text-[3rem] text-[2rem] md:leading-[3rem] leading-[2rem] text-darkblue text-center font-bold'>Meet our most popular features to <br /> establish smooth transitiion</div>
        <div className='text-lightblue text-center'>Pulse is a platform to share your thoughts, learning & knowledege with people over the world.</div>
      </div>
      {/* Cards */}
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
        {
          featuresData.map((item, index) => (
            <Feature
              description={item.description}
              icon={item.icon}
              title={item.title}
              key={index}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Features