import type { NextAuthConfig } from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials'
import { prisma } from "./lib/prisma"
import bcrypt from 'bcryptjs'

export default {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email as any
          }
        });

        if (!user) {
          throw new Error("User Not Found!")
        }

        const isPasswordMatched = bcrypt.compare(credentials.password as any, user.password);

        if (!isPasswordMatched) {
          throw new Error("Password Not Matched!");
        }

        return user;
      },
    })
  ],
} satisfies NextAuthConfig