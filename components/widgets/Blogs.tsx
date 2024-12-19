'use client';

import React, { useEffect, useState } from 'react';
import Categories from '../ui/Categories';
import Blog, { BlogProps } from '../ui/Blog';
import BeatLoader from 'react-spinners/BeatLoader';

const Blogs = () => {
  const [blogs, setBlogs] = useState<BlogProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch('/api/blogs');
        if (!res.ok) throw new Error('Failed to fetch blogs');
        const result = await res.json();
        setBlogs(result.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [setBlogs]);

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <BeatLoader
          color="#000"
          size={15}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }

  return (
    <div className="w-full flex justify-center md:px-10 px-4 py-5">
      <div className="w-full flex flex-col gap-4">
        {/* Blogs */}
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {blogs.length > 0 ? (
              blogs.map((item) => (
                <Blog
                  createdAt={item.createdAt}
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  content={item.content}
                  userId={item.userId}
                  key={item.id}
                />
              ))
            ) : ''
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
