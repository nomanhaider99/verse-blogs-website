'use client'
import React from 'react'
import HeroImage from '@/public/images/Hero2.jpg'
import Image from 'next/image'
import Button from '../ui/Button'
import { FaArrowRight } from 'react-icons/fa'
import Modal from '../models/Modal'
import Sign from '../ui/Sign'
import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {
    return (
        <div className='md:px-10 px-4 flex md:flex-row flex-col justify-between w-full pt-10'>
            <div className='w-full flex flex-col items-center'>
                {/* Texts */}
                <div className='md:w-3/4 w-full flex flex-col items-center gap-4'>
                    <div className='md:text-[3.8rem] text-[2.5rem] text-center md:leading-[4.5vw] leading-[2.5rem] text-darkblue tracking-tight font-bold'>
                        <Typewriter
                            words={['Share your stories and inspire the world effortlessly', 'Your Stories, Your Voice: Share, Inspire, and Connect']}
                            loop
                          />
                    </div>
                    <div className='text-lightblue text-center'>A platform designed for creators, thinkers, and storytellers to share their ideas with the world. Write impactful blogs, discover inspiring content, and connect with a community that values your voice.</div>
                    <div className='w-full flex justify-center items-center gap-4'>
                        <Modal
                            body={<Sign />}
                            trigger={<Button
                                text='Get Started'
                                icon={FaArrowRight}
                                className='md:w-[15vw] w-1/2'
                             />}
                         />
                        <Button
                            text='Explore Now'
                            outline
                            className='md:w-[15vw] w-1/2'
                         />
                    </div>
                </div>
                {/* Images */}
                <div className='w-full flex justify-center'>
                    <Image
                        alt=''
                        src={HeroImage}
                        width={830}
                        height={530}
                        className=''
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero