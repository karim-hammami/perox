"use client";

import { Aboutpage } from "@/_components/about/Aboutpage";
import Navbar from "@/_components/global/Navbar";

export default function About() {
    return (
        <main className="bg-background">
            <Navbar />
            <Aboutpage />
        </main>
    )
}

