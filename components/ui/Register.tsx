"use client";

import * as React from "react";
import Button from "@/components/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Google from "@/public/images/icons8-google-100.png";
import { FieldValues, useForm } from "react-hook-form";
import Link from "next/link";
import PasswordInput from "../Input";
import Loader from "./Loader";

export default function Register() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const [isLoading, setIsLoading] = React.useState(false);

  const onRegisterFormSubmit = (data: FieldValues) => {
    setIsLoading(true);
    console.log(data);
    setTimeout(() => setIsLoading(false), 2000); // Simulate API delay
  };

  return (
    <div className="relative flex justify-center items-center h-screen">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <Loader />
        </div>
      )}
      <Card className="w-[30vw] z-0">
        <form onSubmit={handleSubmit(onRegisterFormSubmit)}>
          <CardHeader>
            <CardTitle className="text-2xl font-medium">
              Register Your Account
            </CardTitle>
            <CardDescription>
              Enter your credentials and create your account.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Button
                  content={
                    <div className="flex justify-center items-center gap-2">
                      <div>
                        <Image alt="" src={Google} width={24} height={24} />
                      </div>
                      <div>Sign with Google</div>
                    </div>
                  }
                  secondary
                />
              </div>
              <div className="w-full flex justify-center font-semibold">OR</div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  type="text"
                  {...register("name")}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="johndoe@gmail.com"
                  type="text"
                  {...register("email")}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <PasswordInput register={register("password") as any} />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-center gap-2">
            <Button content="Register" type="submit" />
            <Link href={"/login"} className="text-sm hover:underline">
              Already have an account?
              <span className="font-semibold text-deeppurple cursor-pointer">
                Login
              </span>
            </Link>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
