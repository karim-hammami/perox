"use client";

import { Aboutpage } from "@/_components/about/Aboutpage";
import { Footer } from "@/_components/global/Footer";
import Navbar from "@/_components/global/Navbar";

export default function About() {
    return (
        <main className="bg-background">
            <Aboutpage />
            <Footer />
        </main>
    )
}

