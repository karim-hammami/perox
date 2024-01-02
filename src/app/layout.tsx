
import './globals.css'
import { Inter } from 'next/font/google'
import { Suspense } from 'react'
import { Spinner } from '@/components/global/Spinner'
import Navbar from '@/components/global/Navbar'
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { SessionProvider } from 'next-auth/react'
import { NextAuthProvider } from '@/components/global/NextAuthProvider'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'PEROX',
    description: 'PEROX Shop',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html className='bg-background' lang="en"> 
            <link rel="icon" href="/logo.webp" sizes="any" />         
            <body className={inter.className}>       
                <NextAuthProvider>
                    <Navbar />    
                    {children}
                </NextAuthProvider>
                <SpeedInsights />     
                <Analytics />            
            </body>          
        </html>
    )
}
