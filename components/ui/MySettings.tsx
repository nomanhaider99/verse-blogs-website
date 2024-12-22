'use client';
import React from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from 'next/link';
import { deleteBlog } from '@/app/actions/deleteBlog';
import { useRouter } from 'next/navigation';

interface MySettingsProps {
    trigger: React.ReactElement;
    id: string;
}

const MySettings: React.FC<MySettingsProps> = ({ trigger, id }) => {
    const router = useRouter();

    const deleteThisBlog = async () => {
        await deleteBlog(id);
        router.replace('/blogs');
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>{trigger}</DropdownMenuTrigger>
            <DropdownMenuContent className='cursor-pointer'>
                <Link href={`/edit/${id}`}>
                    <DropdownMenuItem className='cursor-pointer'>Edit</DropdownMenuItem>
                </Link>
                <DropdownMenuItem
                    className='cursor-pointer'
                    onClick={async () => await deleteThisBlog().then(() => router.refresh())} 
                >
                    Delete
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default MySettings;
