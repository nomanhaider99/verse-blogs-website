import { db } from "@/drizzle/drizzle";
import { blogs } from "@/drizzle/schema";
import { NextResponse } from "next/server";
import { desc } from "drizzle-orm";

export async function GET(request: Request) {
    try {
        const allBlogs = await db
        .select()
        .from(blogs)

        return NextResponse.json({
            data: allBlogs
        });
    } catch (error: any) {
        throw new Error(error);
    }
}