import { signIn } from "@/auth";
import { FieldValues } from "react-hook-form";

export const loginUser = async (data: FieldValues) => {
    const user = await signIn("credentials", {
        data
    })
    return user;
}