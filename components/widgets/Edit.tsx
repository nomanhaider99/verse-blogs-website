'use client';

import React, { useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { FaFileImage } from 'react-icons/fa6';
import Button from '../ui/Button';
import { Textarea } from '../ui/textarea';
import { getEditBlog } from '@/app/actions/getBlog';
import { updateBlog } from '@/app/actions/updateBlog';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import BeatLoader from 'react-spinners/BeatLoader';

interface EditProps {
    id: string;
}

const Edit: React.FC<EditProps> = ({ id }) => {
    const { register, handleSubmit, setValue, watch, resetField } = useForm({
        defaultValues: {
            title: '',
            description: '',
            content: '',
            id: id
        },
    });

    const [content, setContent] = useState('');
    const { toast } = useToast();
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleQuillChange = (value: string) => {
        setContent(value);
        setValue('content', value, { shouldValidate: true });
    };

    const submitForm = async (data: FieldValues) => {
        await updateBlog(data)
            .then(() => {
                toast({
                    title: "Success: Blog Updated Successfully",
                    description: "You can now view your updated blog.",
                });
                resetField("title");
                resetField("description");
                resetField("content");
                router.push(`/blogs/${id}`);
            })
            .catch((err) => {
                toast({
                    title: "Error: Blog Updated Failed",
                    description: JSON.stringify(err),
                    variant: 'destructive',
                });
                console.log(err);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    useEffect(() => {
        const fetchEditBlog = async () => {
            const foundBlog = await getEditBlog(id);

            if (foundBlog?.data[0]) {
                const blog = foundBlog.data[0];

                setValue('title', blog.title || '');
                setValue('description', blog.description || '');
                setValue('content', blog.content || '');
                setContent(blog.content || '');
            }
        };

        fetchEditBlog();
    }, [id, setValue]);

    return (
        <>
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 z-10">
                    <BeatLoader
                        color="#000"
                        loading={isLoading}
                        size={15}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </div>
            )}
            <form onSubmit={handleSubmit(submitForm)}>
                <div className="w-full px-10 flex flex-col items-center gap-5">
                    <div className="w-full flex flex-col gap-1">
                        <Label className="text-xl">Blog Title</Label>
                        <Input
                            type="text"
                            placeholder="The Ultimate Guide to Frontend Development"
                            {...register('title')}
                            defaultValue={watch('title')}
                        />
                    </div>
                    <div className="w-full flex flex-col gap-1">
                        <Label className="text-xl">Blog Description</Label>
                        <Textarea
                            placeholder="Explore the essential skills every frontend developer needs to master in 2025."
                            className="h-[7vw]"
                            {...register('description')}
                            defaultValue={watch('description')}
                            maxLength={150}
                        />
                    </div>
                    <div className="w-full flex flex-col gap-1">
                        <Label className="text-xl">Blog Content</Label>
                        <ReactQuill
                            theme="snow"
                            value={content} // Manage ReactQuill state separately
                            onChange={handleQuillChange}
                            className="h-[30vw] w-full"
                            placeholder="Write your blog content here..."
                        />
                    </div>
                    <div className="w-full mt-10 flex flex-col gap-1">
                        <Label className="text-xl">Blog Image/File</Label>
                        <div className="w-full cursor-pointer p-2 h-[40vw] rounded-sm border-[0.5px] border-zinc-200 bg-zinc-50 flex justify-center items-center">
                            <FaFileImage size={60} className="cursor-pointer" />
                        </div>
                    </div>
                    <div className="w-full mt-10">
                        <Button text="Update Blog" type="submit" />
                    </div>
                </div>
            </form>
        </>
    );
};

export default Edit;
