import React from 'react'
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
import Button from './Button'
import { loginUser } from '@/app/actions/loginUser'

const LoginForm = () => {
    const { register, handleSubmit } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    });
    const submitLoginForm = async (data: FieldValues) => {
        await loginUser(data);
    }
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-darkblue text-lg">Login Your Account</CardTitle>
                <CardDescription className="text-lightblue">
                    Welcome back! Please enter your credentials to access your account.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
                <form
                    onSubmit={handleSubmit(submitLoginForm)}
                >
                    <div className="space-y-1">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            placeholder="johndoe@gmail.com"
                            type="email"
                            {...register('email')}
                        />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="******"
                            {...register('password')}
                        />
                    </div>
                    <CardFooter className="w-full mt-4">
                        <Button
                            text="Login"
                            type="submit"
                        />
                    </CardFooter>
                </form>
            </CardContent>
        </Card>
    )
}

export default LoginForm