import Image from 'next/image'
import React from 'react'
import { 
    Card,
    CardHeader,
    CardFooter, 
    CardContent,
} from './card'
import Button from './Button'

interface BlogProps {
    id: number,
    title: string,
    subtitle: string,
    postImage: string,
    author: {
        fullName: string,
        profileImage: string
    },
    comments: {
            id: number,
            commenter: string,
            comment: string,
            postedOn: string,
        }[]
}

const Blog: React.FC<BlogProps> = ({
    postImage,
    subtitle,
    title,
}) => {
  return (
    <Card className='md:w-[30vw] flex flex-col justify-between md:h-[42vw] w-full'>
        <CardHeader>
            <Image
                alt=''
                src={postImage}
                width={400}
                height={400}
             />
        </CardHeader>
        <CardContent className='w-full flex flex-col justify-between gap-5'>
            <div className='flex items-center gap-4'>
                <div>Travel</div>
                <div>12 March 2024</div>
            </div>
            <div className='text-2xl font-medium'>{title}</div>
            <div className='text-zinc-600'>{subtitle}</div>
        </CardContent>
        <CardFooter>
            <Button
                text='Read More...'
             />
        </CardFooter>
    </Card>
  )
}

export default Blog