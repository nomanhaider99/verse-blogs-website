'use client'

import { BlogProps } from '@/components/ui/Blog';
import React, { useEffect, useState } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import { getMyblogs } from '../actions/getMyBlogs';
import { currentUser } from '../actions/currentUser';
import { User } from '@/types/user';
import MyBlog from '@/components/ui/MyBlog';

const Page = () => {
    const [blogs, setBlogs] = useState<BlogProps[]>([]);
    const [user, setUser] = useState<User | undefined>();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const currentLoggedUser = await currentUser();
                setUser(currentLoggedUser as any);
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };
        fetchUser();
    }, []);

    useEffect(() => {
        const fetchBlogs = async () => {
            if (!user?.id) return;

            try {
                setIsLoading(true);
                const res = await getMyblogs(user.id);
                if (!res.ok) throw new Error('Failed to fetch blogs');
                const result = await res.json();
                setBlogs(result.data);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchBlogs();
    }, [user]);

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
                <div className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                        {blogs.length > 0 ? (
                            blogs.map((item) => (
                                <MyBlog
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
                        ) : (
                            <p>No blogs available.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
