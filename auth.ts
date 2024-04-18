import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import prisma from '@/app/libs/prismadb'
import github from "next-auth/providers/github"
import google from "next-auth/providers/google"
import credentials from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        github({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
          }),
        google({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        credentials({
            name: 'credentials',
            credentials: {
                email: { label: "email", type: "text" },
                password: { label: "password", type: "password" }
            },
            async authorize(credentials) {
                if(!credentials?.email || !credentials?.password){
                    throw new Error('Please fill out all fields')
                }

                const user = await prisma.user.findUnique({
                    where: {
                      email: credentials.email as string
                    }
                })
                if (!user || !user?.hashedPassword) {
                    throw new Error("Invalid Credentials")
                }

                //compare password
                const isCorrectPassword = await bcrypt.compare(
                    credentials.password as string,
                    user.hashedPassword
                )

                if (!isCorrectPassword) {
                    throw new Error('Invalid credentials')
                }

                return user;
            }

        })
    ],
    pages: {
        signIn: '/',
    },
    debug: process.env.NODE_ENV === 'development',
    session: {
        strategy: "jwt",
      },
      secret: process.env.AUTH_SECRET,
});

    