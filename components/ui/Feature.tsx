import React from 'react';
import { IconType } from 'react-icons';
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";

interface FeatureProps {
    icon: IconType;
    title: string;
    description: string;
}

const Feature: React.FC<FeatureProps> = ({
    description,
    icon: Icon,
    title,
}) => {
    return (
        <Card className="md:w-[23vw] w-full p-2 py-8 shadow-sm flex flex-col gap-3">
            <CardHeader className="flex flex-col items-center">
                <div className="p-2 flex justify-center items-center md:w-[4vw] w-[14vw] rounded-lg bg-lightblue">
                    <Icon size={30} color="#fff" />
                </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-1">
                <CardTitle className="text-xl font-medium">{title}</CardTitle>
                <CardDescription className="text-zinc-600 leading-5">
                    {description}
                </CardDescription>
            </CardContent>
        </Card>
    );
};

export default Feature;
