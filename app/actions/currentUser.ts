'use server'
import { db } from "@/drizzle/drizzle";
import { users } from "@/drizzle/schema";
import { eq } from "drizzle-orm";
import { getSession } from "next-auth/react";

export const currentUser = async () => {
    const session = await getSession();

    if (!session?.user) {
        return null;
    }

    const userArray = await db
        .select()
        .from(users)
        .where(eq(users.email, session?.user?.email as string));

    const user = userArray[0] || null;

    return user; 
};
