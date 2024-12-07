import { db } from "@/lib/drizzle"; // Import your Drizzle database instance
import { users } from "@/lib/schema"; // Import the Drizzle schema for users
import { eq } from "drizzle-orm"; // Import the `eq` helper for querying
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
    try {
        const { name, email, password } = await request.json();

        // Check if the user already exists
        const existingUser = await db
            .select()
            .from(users)
            .where(eq(users.email, email))
            .limit(1); // Fetch only one record

        if (existingUser.length > 0) {
            return NextResponse.json({ error: "User already exists!" }, { status: 400 });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 12);

        // Create a new user
        const [newUser] = await db.insert(users).values({
            name,
            email,
            password: hashedPassword,
        }).returning(); // Return the created user

        return NextResponse.json({
            success: "User created successfully!",
            data: newUser,
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message || "Something went wrong!" }, { status: 500 });
    }
}
