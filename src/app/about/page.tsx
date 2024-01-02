"use client";

import { Aboutpage } from "@/components/about/Aboutpage";
import { Footer } from "@/components/global/Footer";
import Navbar from "@/components/global/Navbar";

export default function About() {
    return (
        <main className="bg-background">
            <Aboutpage />
            <Footer />
        </main>
    )
}

