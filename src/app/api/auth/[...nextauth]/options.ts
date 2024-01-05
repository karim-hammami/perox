import { db } from '@/utils/db';
import { PrismaAdapter } from '@auth/prisma-adapter';
import type { NextAuthOptions } from 'next-auth'
import { Adapter } from 'next-auth/adapters';
import GoogleProvider from "next-auth/providers/google";

export const options: NextAuthOptions = {
    providers: [
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID as string,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
  })
],
adapter: PrismaAdapter(db) as Adapter,
secret: process.env.NEXTAUTH_SECRET,
theme: {
  colorScheme: 'dark',
  brandColor: '#ffff00',
  logo: '/logo.webp',
  buttonText: '#ffffff'
}
}