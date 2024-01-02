"use client";
import Navbar from "@/components/global/Navbar";
import { Spinner } from "@/components/global/Spinner";
import { Homepage } from "@/components/home/Homepage";
import { Suspense, useEffect, useState } from "react";


export default function Home() {
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(()=>{
        setTimeout(() => {
            setIsLoading(false)
        }, 500);
    },[])
        

    return !isLoading ? (
   
            <main>
                    <Homepage />  
            </main>

    ) :  (<Spinner />)
}
