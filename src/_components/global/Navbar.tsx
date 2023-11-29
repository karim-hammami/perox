'use client'
import Image from 'next/image'
import React, { useState } from 'react'

export default function Navbar() {
    const [num, setNum] = useState(0)
    return (
        <>
            <div className='bg-background w-screen h-24'>
                <div className='flex mx-48 items-center py-4'>
                    <Image src="/logo.webp" alt="logo" width={50} height={50} />
                </div>
            </div>
        </>
    )
}
