import { db } from "@/drizzle/drizzle";
import { blogs } from "@/drizzle/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function DELETE(request: Request) {
    try {
        // Parse the request body
        const { id } = await request.json();

        // Validate the input
        if (!id) {
            return NextResponse.json(
                { error: "Missing blog ID in the request body" },
                { status: 400 } // Bad Request
            );
        }

        // Perform the deletion
        const deletedBlog = await db.delete(blogs).where(eq(blogs.id, id)).returning();
        
        // Respond with the deleted blog data
        return NextResponse.json({
            message: "Blog deleted successfully",
            data: deletedBlog,
        });
    } catch (error: any) {
        console.error("Error in delete API:", error);

        // Return a proper error response
        return NextResponse.json(
            { error: "An unexpected error occurred", details: error.message },
            { status: 500 } // Internal Server Error
        );
    }
}
