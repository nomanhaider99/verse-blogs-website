import React from 'react'
import Categories from '../ui/Categories'
import blogPosts from '@/data/blogs'
import Blog from '../ui/Blog'

const Blogs = () => {
  return (
    <div className='w-full flex justify-center md:px-10 px-4 py-5'>
      {/* Blogs */}
      <div className='w-full flex flex-col gap-4'>
        {/* Categories */}
        <div className=''>
          <Categories />
        </div>
        {/* Blogs */}
        <div className='flex flex-col gap-4'>
          <div className='text-4xl font-extrabold text-darkblue'>Recommend Blogs</div>
          <div className='grid grid-cols-3 gap-2'>
            {
              blogPosts.map((item) => (
                <Blog
                  author={item.author}
                  comments={item.comments}
                  id={item.id}
                  postImage={item.postImage}
                  subtitle={item.subtitle}
                  title={item.title}
                  key={item.id}
                />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogs