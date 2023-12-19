import './globals.css'
import { Inter } from 'next/font/google'
import { Suspense } from 'react'
import { Spinner } from '@/_components/global/Spinner'
import Navbar from '@/_components/global/Navbar'
import { SpeedInsights } from '@vercel/speed-insights/next';



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
                <Navbar />      
                {children}
                <SpeedInsights />                 
            </body>          
        </html>
    )
}
