import Image from 'next/image'
import React from 'react'
import {
    Card,
    CardHeader,
    CardContent,
} from './card'
import Avatar from '@/public/images/Avatar.png'

interface RBlogProps {
    id: number | string;
    title: string;
    subtitle: string;
    postImage: string;
    author: {
        fullName: string;
        profileImage: string;
    };
    comments: {
        id: number;
        commenter: string;
        comment: string;
        postedOn: string;
    }[];
}

const RBlog: React.FC<RBlogProps> = ({
    author,
    id,
    comments,
    postImage,
    subtitle,
    title
}) => {
    
    return (
            <Card className='md:w-[30vw] flex flex-col justify-between md:h-[30vw] w-full'>
                <CardHeader>
                    {postImage && (
                        <Image
                            alt=''
                            src={postImage}
                            width={400}
                            height={400}
                        />
                    )}
                </CardHeader>
                <CardContent className='w-full flex flex-col justify-between gap-2'>
                    <div className='flex items-center gap-1'>
                        <div>Posted on</div>
                        <div>24-10-2024</div>
                    </div>
                    <div className='text-2xl font-bold'>{title}</div>
                    <div className=''>{subtitle}</div>
                </CardContent>
            </Card>
    )
}

export default RBlog