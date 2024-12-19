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
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from './Button';
import { createUser } from '@/app/actions/createUser';
import BeatLoader from "react-spinners/BeatLoader";
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { socialSignIn } from '@/app/actions/socialLogin';
import { FaGoogle } from 'react-icons/fa';

const registerSchema = z.object({
    name: z.string().min(2, { message: 'Name must be at least 2 characters long' }),
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string().min(6, { message: 'Password must be at least 6 characters long' }),
});

const RegisterForm = () => {
    const { register, handleSubmit, resetField, formState: { errors } } = useForm({
        resolver: zodResolver(registerSchema),
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
            .catch((err) => {
                toast({
                    title: "Error: User Creation Failed",
                    description: JSON.stringify(err),
                    variant: 'destructive'
                });
                console.log(err);
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
                    <div className='flex justify-center'>
                        <Button
                            text='Sign with Google'
                            className='w-[85%]'
                            outline
                            isStatic
                            icon={FaGoogle}
                            onClick={() => socialSignIn("google")}
                        />
                    </div>
                    <div className='flex justify-center py-2'>OR</div>
                    <div className="space-y-1">
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            type="text"
                            placeholder="John Doe"
                            {...register('name')}
                            required
                        />
                        {errors.name && (
                            <p className="text-red-600 text-sm">{errors.name.message}</p>
                        )}
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
                        {errors.email && (
                            <p className="text-red-600 text-sm">{errors.email.message}</p>
                        )}
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
                        {errors.password && (
                            <p className="text-red-600 text-sm">{errors.password.message}</p>
                        )}
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
