"use client";
import Navbar from "@/_components/global/Navbar";
import { Spinner } from "@/_components/global/Spinner";
import { Homepage } from "@/_components/home/Homepage";
import { Suspense, useEffect, useState } from "react";


export default function Home() {
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(()=>{
        setTimeout(() => {
            setIsLoading(false)
        }, 1000);
    },[])
        

    return !isLoading ? (
   
            <main>
                    <Navbar />
                    <Homepage />  
            </main>

    ) :  (<Spinner />)
}
