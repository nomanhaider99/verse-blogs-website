'use client'

import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from './input'
import { Label } from './label'
import { Textarea } from './textarea'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { File } from 'lucide-react'
import Button from '../Button'
import { FieldValues, useForm } from 'react-hook-form'


interface CreateProps {
    trigger?: React.ReactElement
}


const Create: React.FC<CreateProps> = ({ trigger }) => {
    const { handleSubmit, register } = useForm();

    const submitForm = (data: FieldValues) => {
        console.log(data);
    }

    return (
        <Dialog>
            <DialogTrigger>{trigger}</DialogTrigger>
            <form
                onSubmit={handleSubmit(submitForm)}
            >
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Create Blog</DialogTitle>
                        <DialogDescription>
                            Enter blog detials like title, description, content and image and share a collaborate with people.
                        </DialogDescription>
                        <div className='flex flex-col gap-3'>
                            <div className='flex flex-col gap-1'>
                                <Label>Title</Label>
                                <Input
                                    placeholder='The Rise of Cloud Computing'
                                    {...register("title")}
                                />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <Label>Description</Label>
                                <Textarea
                                    placeholder='How Cloud Computing overcome security and ease of access.'
                                    className='h-[5vw]'
                                    {...register("description")}
                                />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <Label>Content</Label>
                                <Textarea
                                    placeholder='Write detailed content here...'
                                    className='h-[8vw]'
                                    {...register("content")}
                                />
                            </div>
                            <div className='w-full flex flex-col gap-1'>
                                <Label>Image</Label>
                                <Card className='w-full h-[8vw]'>
                                    <CardContent className='w-full h-full flex justify-center items-center'>
                                        <File />
                                    </CardContent>
                                </Card>
                            </div>
                            <div>
                                <Button
                                    content="Create"
                                    type='submit'
                                />
                            </div>
                        </div>
                    </DialogHeader>
                </DialogContent>
            </form>
        </Dialog>

    )
}

export default Create