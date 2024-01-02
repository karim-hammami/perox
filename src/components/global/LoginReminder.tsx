"use client";

import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";


type Props = {
    children?: React.ReactNode;
};


export default function LoginReminder({ children }: Props) {
    const {data: session} = useSession();
    const [hidden, setHidden] = useState<boolean>(false);

    useEffect(() => {
        if (session?.user) {
            setHidden(true)
        }
    }, [session])


    return (
        <>
        {children}
        <div className={`${hidden ? "hidden" : ""} w-full bg-primary fixed bottom-0 z-20 h-[13%] sm:h-[16%] py-6 sm:py-5 `}>
            <div className="flex items-center sm:flex-col justify-around">
                <div className="text-background font-bold text-3xl sm:text-lg text-center">Sign Up to get the full experience</div>
                <div className="flex items-center justify-between sm:mt-2">
                <button onClick={() => signIn()} className="bg-background text-blanche hover:text-primary hover:bg-surface p-4 rounded font-bold text-xl sm:text-base mr-8 ">Sign Up</button>
                <Image
                onClick={() => setHidden(true)}
                src="/Closer.png"
                alt="close"
                width={50}
                height={50}
                priority
                style={{ cursor: "pointer" }}
              />
                </div>
            </div>
        </div>
        </>
    )
}