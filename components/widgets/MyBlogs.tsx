import { blogs } from '@/data/blogs'
import React from 'react'
import MyBlog from '../ui/MyBlog'

const MyBlogs = () => {
  return (
    <div className='w-full grid md:grid-cols-3 grid-cols-1 gap-3'>
        {
            blogs.map((item, index) => (
                <MyBlog
                    desc={item.desc}
                    title={item.title}
                    key={index}
                 />
            ))
        }
    </div>
  )
}

export default MyBlogs