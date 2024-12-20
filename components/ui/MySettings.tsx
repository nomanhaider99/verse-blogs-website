import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link'

interface MySettingsProps {
    trigger: React.ReactElement,
    id: string
}


const MySettings: React.FC<MySettingsProps> = ({ trigger, id }) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>{trigger}</DropdownMenuTrigger>
            <DropdownMenuContent 
                className='cursor-pointer'
            >
                <Link href={`/edit/${id}`}><DropdownMenuItem className='cursor-pointer'>Edit</DropdownMenuItem></Link>
                <DropdownMenuItem>Delete</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}

export default MySettings