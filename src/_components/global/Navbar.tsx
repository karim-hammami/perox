import Image from 'next/image'
import React from 'react'

export default function Navbar() {
    return (
        <>
            <div className='fixed z-50 bg-background w-full h-28'>
                <div className='flex mx-48 items-center py-5 justify-between'>
                    <Image src="/logo.webp" alt="logo" width={50} height={50} />
                    <Image src="/Vector.png" alt="menu" width={50} height={50} />
                </div>
            </div>
        </>
    )
}
