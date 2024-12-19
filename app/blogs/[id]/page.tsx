'use client';

import { BlogProps } from '@/components/ui/Blog';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import Avatar from '@/public/images/Avatar.png';
import { findUser } from '@/app/actions/findUser';
import { User } from '@/types/user';
import DOMPurify from 'dompurify';

const Page = ({ params }: { params: { id: string } }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [blog, setBlog] = useState<BlogProps | undefined>();
  const [user, setUser] = useState<User | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const blogsRes = await fetch('/api/blogs');
        if (!blogsRes.ok) throw new Error('Failed to fetch blogs');
        const blogsResult = await blogsRes.json();
        const foundBlog = blogsResult.data.find((b: BlogProps) => b.id === params.id);

        if (foundBlog) {
          setBlog(foundBlog);
          const userResult = await findUser(foundBlog.userId);
          setUser(userResult.data[0]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [params.id]);

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <BeatLoader color="#000" size={15} aria-label="Loading Spinner" data-testid="loader" />
      </div>
    );
  }
  const sanitizedContent = DOMPurify.sanitize(blog?.content);

  return (
    <div className="w-full px-10 py-10">
      {blog ? (
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <div className="text-[4vw] font-bold tracking-tight leading-none">{blog.title}</div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div>
                  <Image alt="" src={Avatar} height={25} width={25} />
                </div>
                <div>{user?.name}</div>
              </div>
              <div>Posted on {blog.createdAt.slice(0, 10)}</div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {/* TODO:  Image Here  */}
            <div></div>
            <div
              className="prose lg:prose-xl text-gray-800"
              dangerouslySetInnerHTML={{ __html: sanitizedContent }}
            />
          </div>
        </div>
      ) : (
        <div className="w-full flex justify-center">
          <BeatLoader color="#000" size={15} aria-label="Loading Spinner" data-testid="loader" />
        </div>
      )}
    </div>
  );
};

export default Page;