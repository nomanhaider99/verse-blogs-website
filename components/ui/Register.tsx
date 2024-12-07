'use client';

import React, { useState } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Label } from './label';
import { Input } from './input';
import { FieldValues, useForm } from 'react-hook-form';
import Button from './Button';
import { createUser } from '@/app/actions/createUser';
import BeatLoader from "react-spinners/BeatLoader";
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';

const RegisterForm = () => {
    const { register, handleSubmit, resetField, } = useForm({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    });

    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();
    const router = useRouter();

    const submitRegisterForm = async (data: FieldValues) => {
        setIsLoading(true);
        await createUser(data)
            .then(() => {
                toast({
                    title: "Success: User Created Successfully",
                    description: "You can now login your account, and start writing blogs.",
                });
                resetField("name");
                resetField("email");
                resetField("password");
                router.refresh();
            })
            .catch(() => {
                toast({
                    title: "Error: User Creation Failed",
                    description: "There was an issue creating the user. Please try again.",
                    variant: 'destructive'
                });
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <Card className="relative">
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 z-10">
                    <BeatLoader
                        color='#000'
                        loading={isLoading}
                        size={15}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </div>
            )}

            <CardHeader>
                <CardTitle className="text-darkblue text-lg">Register Your Account</CardTitle>
                <CardDescription className="text-lightblue">
                    Create an account to enjoy all our features. Fill out the form below to get started.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
                <form onSubmit={handleSubmit(submitRegisterForm)}>
                    <div className="space-y-1">
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            type="text"
                            placeholder="John Doe"
                            {...register('name')}
                            required
                        />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="johndoe@gmail.com"
                            {...register('email')}
                            required
                        />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="******"
                            {...register('password')}
                            required
                        />
                    </div>
                    <CardFooter className="w-full mt-4">
                        <Button
                            text="Register"
                            type="submit"
                        />
                    </CardFooter>
                </form>
            </CardContent>
        </Card>
    );
};

export default RegisterForm;
