'use client';

import React, { useState } from 'react';
import { Label } from './label';
import { Input } from './input';
import { Textarea } from './textarea';
import Button from './Button';
import { FieldValues, useForm } from 'react-hook-form';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { FaFileImage } from 'react-icons/fa';
import { createBlog } from '@/app/actions/createBlog';
import { currentUser } from '@/app/actions/currentUser';
import BeatLoader from 'react-spinners/BeatLoader';

const Writer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [content, setContent] = useState('');
  const { toast } = useToast();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    resetField,
    watch
  } = useForm({
    defaultValues: {
      title: '',
      description: '',
      content: ''
    }
  });

  const handleQuillChange = (value: string) => {
    setContent(value);
    setValue('content', value, { shouldValidate: true });
  };

  const submitForm = async (data: FieldValues) => {
    const user = await currentUser();

    if (!user || !user.id) {
      toast({
        title: "Error: User not found",
        description: "Unable to retrieve user information.",
        variant: 'destructive',
      });
      return;
    }

    const dataWithUserId = {
      ...data,
      userId: user.id,
    };

    setIsLoading(true);

    await createBlog(dataWithUserId)
      .then((blog) => {
        if (!blog.id) {
          throw new Error('Blog ID is missing');
        }

        toast({
          title: "Success: Blog Created Successfully",
          description: "You can now view your blog.",
        });
        resetField("title");
        resetField("description");
        resetField("content");
        router.push(`/blogs/${blog.id}`);
      })
      .catch((err) => {
        toast({
          title: "Error: Blog Creation Failed",
          description: err.message,
          variant: 'destructive',
        });
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

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
      <form onSubmit={handleSubmit(submitForm)} className="relative">
        <div className="w-full px-10 flex flex-col items-center gap-5">
          <div className="w-full flex flex-col gap-1">
            <Label className="text-xl">Blog Title</Label>
            <Input
              type="text"
              placeholder="The Ultimate Guide to Frontend Development"
              {...register('title')}
              disabled={isLoading}
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <Label className="text-xl">Blog Description</Label>
            <Textarea
              placeholder="Explore the essential skills every frontend developer needs to master in 2025."
              className="h-[7vw]"
              {...register('description')}
              disabled={isLoading}
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <Label className="text-xl">Blog Content</Label>
            <ReactQuill
              theme="snow"
              value={content}
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
            <Button text="Post Blog" type="submit" />
          </div>
        </div>
      </form>
    </>
  );
};

export default Writer;
