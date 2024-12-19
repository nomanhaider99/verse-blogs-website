import React from 'react'
import Button from '../ui/Button'
import Image from 'next/image'
import RecentImage from '@/public/images/Recent.png'
import landingBlogPosts from '@/data/landingBlogs'
import Blog from '../ui/Blog'

const Recent = () => {
    return (
        <div className='w-full flex flex-col gap-4 md:px-10 px-4 py-10'>
            <div className='flex justify-between items-center w-full'>
                <div className='text-2xl text-darkblue font-medium'>Our Recent Post</div>
                <div>
                    <Button
                        text='Browse All'
                        outline
                    />
                </div>
            </div>
            <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
                <div className='md:w-[60%] w-full'>
                    <Image
                        alt=''
                        src={RecentImage}
                        width={712}
                        height={456}
                        className='w-[712px] h-[456px]'
                    />
                </div>
                <div className='flex flex-col gap-10 md:w-[40%] w-full'>
                    <div className='flex gap-4 w-full'>
                        <div>Development</div>
                        <div>11 March 2020</div>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <div className='text-3xl font-bold tracking-tight'>How to make a Game look more attractive with New VR & AI Technology</div>
                        <div className='text-zinc-600'>Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we’re committed to making AI accessible to everyone.
                        </div>
                    </div>
                    <div>
                        <Button
                            text='Read More'
                            outline
                        />
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    landingBlogPosts.map((item) => (
                        <Blog
                            author={item.author}
                            comments={item.comments}
                            id={item.id as any}
                            postImage={item.postImage}
                            subtitle={item.subtitle}
                            title={item.title}
                            key={item.id}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Recent