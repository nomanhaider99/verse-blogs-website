export interface User {
    image: string | null;
    id: string;
    gender: "MALE" | "FEMALE" | null;
    name: string | null;
    email: string | null;
    emailVerified: Date | null;
    password: string | null;
    bio: string | null;
    createdAt: Date | null;
}