import Image from 'next/image'
import React from 'react'
import WhyImage from '@/public/images/Why.jpg'
import Button from '../ui/Button'

const Why = () => {
  return (
    <div className='w-full flex md:flex-row flex-col justify-between items-center md:px-10 px-4 pt-5 pb-10'>
        <div className='md:w-1/2 w-full flex flex-col items-center md:items-start gap-4'>
            <div className='text-6xl font-bold text-darkblue'>Elevate Your Blogging Experience with Pulse</div>
            <div className='text-lightblue'>Pulse is the ultimate platform for bloggers who want to share their voice with the world effortlessly. Designed with simplicity and creativity in mind, it offers powerful tools to write, edit, and publish content seamlessly. Whether you're a beginner or an experienced writer, Pulse provides a user-friendly interface, customizable themes, and advanced analytics to help you grow your audience. With secure hosting, responsive design, and SEO optimization, Pulse ensures your blog stands out and reaches the right people. Join a community of passionate bloggers and take your storytelling to the next level with Pulse.</div>
            <div>
                <Button
                    text="Let's Start Your Career"
                 />
            </div>
        </div>
        <div>
            <Image
                alt=''
                src={WhyImage}
                width={550}
                height={550}
             />
        </div>
    </div>
  )
}

export default Why