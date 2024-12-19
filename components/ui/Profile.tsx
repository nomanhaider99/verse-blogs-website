import { currentUser } from '@/app/actions/currentUser'
import { profiletabs } from '@/data/profiletabs';
import Image from 'next/image';
import React from 'react'
import Avatar from '@/public/images/Avatar.png'
import Logout from './Logout';

const Profile = async () => {
    const user = await currentUser();
    return (
        <div className='w-full flex flex-col md:flex-row justify-between gap-4'>
            {/* Tabs */}
            <div className='md:w-[30%] w-full flex flex-col justify-between gap-6 border-[0.5px] border-zinc-200 p-2 rounded-lg py-4'>
                <div className='flex flex-col gap-1'>
                    <div className='text-2xl font-semibold text-darkblue'>Account</div>
                    <div className='flex flex-col gap-2'>
                        {
                            profiletabs.map((item) => (
                                <div
                                    key={item.id}
                                    className='px-4 cursor-pointer rounded-lg w-full py-2 hover:bg-muted text-black'
                                >
                                    {item.tab}
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='pl-5'>
                    <Logout />
                </div>
            </div>
            {/* Info */}
            <div className='md:w-[70%] w-full flex flex-col gap-4 px-4'>
                <div className='text-xl font-medium'>Profile Detials</div>
                <div className='flex flex-col gap-2'>
                    <div className='border-t-[0.5px] border-zinc-400 w-full flex justify-between items-center py-10'>
                        <div className='font-medium'>Profile</div>
                        <div className='flex items-center gap-2'>
                            <div>
                                {
                                    user?.image ? (
                                        <Image
                                            alt=''
                                            src={user?.image as any}
                                            width={50}
                                            height={50}
                                            className='rounded-full'
                                        />
                                    ) : (
                                        <Image
                                            alt=''
                                            src={Avatar}
                                            width={50}
                                            height={50}
                                            className='rounded-full'
                                        />
                                    )
                                }
                            </div>
                            <div className='text-zinc-600 font-medium'>{user?.name}</div>
                        </div>
                        <div className='text-sm font-medium cursor-pointer hidden md:block'>Edit picture</div>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='border-t-[0.5px] border-zinc-400 w-full flex items-center md:gap-32 py-4'>
                        <div className='font-medium'>Email address</div>
                        <div className='text-sm font-medium cursor-pointer'>{user?.email}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile