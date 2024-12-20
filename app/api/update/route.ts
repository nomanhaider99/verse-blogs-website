import { db } from "@/drizzle/drizzle";
import { blogs } from "@/drizzle/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const {
            id,
            title,
            description,
            content
        } = await request.json();

        const updatedBlog = await db
            .update(blogs)
            .set({
                title: title,
                description: description,
                content: content
            }).where(eq(blogs.id, id));

            return NextResponse.json({
                data: updatedBlog
            });
    } catch (error: any) {
        throw new Error(error);
    }
}