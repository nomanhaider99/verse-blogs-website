'use client'
import React, { ReactNode, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa';
import Button from './Button';
import CardDrawer from './CardDrawer';

interface ServiceCardProps {
    title: string,
    description: string,
    id: number,
    content?: React.JSX.Element,
    serial: string
}

const GuideCard: React.FC<ServiceCardProps> = ({
    description,
    title,
    id,
    content,
    serial
}) => {
    const [hover, setHover] = useState(false);
  return (
    <div 
        className={`p-4 md:w-[32vw] w-full border-[0.5px] border-white rounded-sm cursor-pointer ${hover ? 'bg-white' : 'bg-transparent'}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
    >
        {
            hover ? (
                <div className='md:h-[32vw] h-[80vw] flex flex-col justify-between bg-darkblue p-4 rounded-xl'>
                    <div className='flex flex-col gap-4'>
                        <div className='text-4xl font-medium text-white'>{title}</div>
                        <div className='text-zinc-50'>{description}</div>
                    </div>
                    <div>
                        <CardDrawer
                            trigger={<Button
                                text='View More'
                                outline
                                isStatic
                             />}
                            content={content}
                            title={title}
                            subTitle={description}
                         />
                    </div>
                </div>
            ) : (
                <div className='md:h-[32vw] flex flex-col justify-between gap-6 border-[0.5px] border-darkblue p-4 rounded-xl'>
                    <div className='flex justify-end'><FaArrowRight size={45} color='#fff' /></div>
                    <div className='flex flex-col '>
                        <div className='text-[8rem] font-extrabold text-lightblue'>{serial}</div>
                        <div className='text-darkblue text-[2rem]'>{title}</div>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default GuideCard