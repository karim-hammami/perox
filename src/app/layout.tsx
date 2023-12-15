import './globals.css'
import { Inter } from 'next/font/google'
import { Suspense } from 'react'
import { Spinner } from '@/_components/global/Spinner'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'PEROX',
    description: 'PEROX - Coming soon',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">          
            <body className={inter.className}> 
            <Suspense fallback={<Spinner />}>
                {children}
            </Suspense>            
                   
            </body>          
        </html>
    )
}
