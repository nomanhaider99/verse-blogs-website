import categories from '@/data/categories'
import React from 'react'

const Categories = () => {
  return (
    <div className='grid grid-cols-8 items-center gap-2 py-2 border-b-[0.5px] border-zinc-200'>
        {
            categories.map((item) => (
                <div
                    key={item.id}
                    className='cursor-pointer hover:bg-zinc-100 hover:text-lightblue px-2 py-1 rounded-lg flex justify-center'
                >
                    {item.name}
                </div>
            ))
        }
    </div>
  )
}

export default Categories