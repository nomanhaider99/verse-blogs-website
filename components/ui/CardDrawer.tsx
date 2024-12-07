import React from 'react'
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"


interface CardDrawerProps {
    content?: React.ReactElement,
    trigger: React.ReactElement,
    title: string,
    subTitle: string
}

const CardDrawer: React.FC<CardDrawerProps> = ({
    trigger,
    content,
    subTitle,
    title
}) => {
    return (
        <Drawer>
            <DrawerTrigger>{trigger}</DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle></DrawerTitle>
                    <DrawerDescription></DrawerDescription>
                </DrawerHeader>
                <DrawerContent className='px-10'>
                    <div className='text-[4rem] text-darkblue font-bold'>{title}</div>
                    <div className='text-lightblue'>{subTitle}</div>
                    <div>{content}</div>
                </DrawerContent>
            </DrawerContent>
        </Drawer>

    )
}

export default CardDrawer