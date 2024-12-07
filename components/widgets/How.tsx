import { specialitiesData } from '@/data/services'
import React from 'react'
import GuideCard from '../ui/Guide'

const How = () => {
  return (
    <div className='w-full md:px-10 px-4 py-10 flex flex-col gap-4'>
      <div className='flex flex-col gap-2'>
        <div className='text-darkblue font-extrabold'>HOW WE WORK</div>
        <div className='w-full flex flex-col md:flex-row justify-between items-center'>
          <div className='text-6xl leading-none font-medium tracking-tight'>I will show you how <br />our team works</div>
          <div className='flex items-end text-lightblue'>Bring to the table win-win market strategies to ensure perfect articles. </div>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 md:gap-4'>
        {
          specialitiesData.map((item) => (
            <GuideCard
              description={item.description}
              id={item.id}
              title={item.title}
              key={item.id}
              serial={item.serial}
              content={item.content}
            />
          ))
        }
      </div>
    </div>
  )
}

export default How