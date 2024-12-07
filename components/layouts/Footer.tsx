import React from 'react'
import Logo from '../ui/Logo'

const Footer = () => {
  return (
    <div className='w-full flex flex-col md:flex-row justify-between md:items-center items-start md:px-10 px-4 py-10 bg-darkblue md:gap-32 gap-10'>
        <div className='flex flex-col gap-6 md:w-[20%]'>
            <div>
                <Logo
                    isWhite
                 />
            </div>
            <div className='flex flex-col gap-1 text-zinc-200'>
                <div>Employee Database</div>
                <div>Payroll</div>
                <div>Absences</div>
                <div>Time Tracking</div>
                <div>Shift Planner</div>
                <div>Recrutting</div>
            </div>
        </div>
        <div className='flex flex-col md:flex-row md:gap-24 gap-8 md:w-[70%] w-full'>
            <div className='flex flex-col gap-2'>
                <div className='text-white'>Information</div>
                <div className='flex flex-col text-zinc-300'>
                    <div>FAQs</div>
                    <div>Blogs</div>
                    <div>Support</div>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='text-white'>Company</div>
                <div className='flex flex-col text-zinc-300'>
                    <div>About Us</div>
                    <div>Careers</div>
                    <div>Contact Us</div>
                    <div>Lift Media</div>
                    <div>Cutomer Information</div>
                    <div>Tredning Blogs</div>
                    <div>Future News</div>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='text-white'>Pages</div>
                <div className='flex flex-col text-zinc-300'>
                    <div>Home</div>
                    <div>Blogs</div>
                    <div>About Us</div>
                    <div>Contact</div>
                    <div>Trends</div>
                    <div>Education</div>
                </div>
            </div>
        </div>
        <div className='bg-zinc-100/20 p-4 flex flex-col gap-3 md:w-[30%] w-full'>
            <div className='text-white'>Subscribe</div>
            <div className='text-zinc-200 text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod quisquam nihil, voluptatibus minima beatae recusandae similique laudantium rem! Vero, excepturi. Ullam dolore voluptate, aliquid doloribus veniam labore nemo voluptatum in.</div>
        </div>
    </div>
  )
}

export default Footer