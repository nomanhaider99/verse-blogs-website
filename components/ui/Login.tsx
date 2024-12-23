import React, { useState } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Label } from './label'
import { Input } from './input'
import { FieldValues, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Button from './Button'
import { FaGoogle } from 'react-icons/fa'
import { socialSignIn } from '@/app/actions/socialLogin'
import { loginUser } from '@/app/actions/loginUser'
import { useToast } from '@/hooks/use-toast'
import { useRouter } from 'next/navigation'
import BeatLoader from 'react-spinners/BeatLoader'
import useOnBoarding from '../hooks/use-onboarding'
import OnBoarding from '../models/onboarding-modal'

const loginSchema = z.object({
    email: z.string().email('Invalid email address').nonempty('Email is required'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
});

const LoginForm = () => {
    const onboardingform = useOnBoarding();
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();
    const router = useRouter();
    const { register, handleSubmit, resetField, formState: { errors } } = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    });

    const submitLoginForm = async (data: FieldValues) => {
        setIsLoading(true);
        try {
            await loginUser(data);  // If this fails, the error will be caught here
            toast({
                title: "Success: User Logged In Successfully",
                description: "You can now access your tools and start writing blogs.",
            });
            resetField("email");
            resetField("password");
            router.refresh();
        } catch (error: any) {
            console.error("Login error:", error);  
            toast({
                title: "Error: User Login Failed",
                description: "Something Went Wrong, It seems that user doesnot exists or Invalid credentials!",
                variant: "destructive",
            });
        } finally {
            setIsLoading(false);
        }
    };
   
    return (
        <>
            {
                onboardingform.isOpen ? (
                    <OnBoarding />
                ) : (
                    <Card className="relative">
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
                        <CardHeader>
                            <CardTitle className="text-darkblue text-lg">Login Your Account</CardTitle>
                            <CardDescription className="text-lightblue">
                                Welcome back! Please enter your credentials to access your account.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <form onSubmit={handleSubmit(submitLoginForm)}>
                                <div className="flex justify-center">
                                    <Button
                                        text="Sign with Google"
                                        className="w-[85%]"
                                        outline
                                        isStatic
                                        icon={FaGoogle}
                                        onClick={async() => await socialSignIn("google")}
                                    />
                                </div>
                                <div className="flex justify-center py-2">OR</div>
                                <div className="space-y-1">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        placeholder="johndoe@gmail.com"
                                        type="email"
                                        {...register("email")}
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-sm">{errors.email.message}</p>
                                    )}
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="password">Password</Label>
                                    <Input
                                        id="password"
                                        type="password"
                                        placeholder="******"
                                        {...register("password")}
                                    />
                                    {errors.password && (
                                        <p className="text-red-500 text-sm">{errors.password.message}</p>
                                    )}
                                </div>
                                <CardFooter className="w-full mt-4">
                                    <Button text="Login" type="submit" />
                                </CardFooter>
                            </form>
                        </CardContent>
                    </Card>
                )
            }

        </>
    );
};

export default LoginForm;