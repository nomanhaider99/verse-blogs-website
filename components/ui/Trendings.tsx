import React from 'react'

const Trendings = () => {
    return (
        <div className='w-full flex flex-col gap-4'>
            <div className='text-4xl font-extrabold text-darkblue'>Trending Blogs</div>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-2'>
                    <div className='flex items-center gap-2'>
                        <div></div>
                        <div>Dr Jesser Stier</div>
                    </div>
                    <div className='text-lg font-extrabold'>I’m a Public Health Scientist. Here’s What Research Really Shows About Raw Milk.</div>
                    <div className='text-zinc-600'>2h ago</div>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='flex items-center gap-2'>
                        <div></div>
                        <div>Marco Edellic</div>
                    </div>
                    <div className='text-lg font-extrabold'>Everyone wins when product managers work in the open.</div>
                    <div className='text-zinc-600'>2h ago</div>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='flex items-center gap-2'>
                        <div></div>
                        <div>John Doe</div>
                    </div>
                    <div className='text-lg font-extrabold'>Why a banana sold for $6.2 million</div>
                    <div className='text-zinc-600'>2h ago</div>
                </div>
            </div>
        </div>
    )
}

export default Trendings