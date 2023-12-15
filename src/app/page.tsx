import Navbar from "@/_components/global/Navbar";
import { Spinner } from "@/_components/global/Spinner";
import { Homepage } from "@/_components/home/Homepage";
import { Suspense } from "react";


export default function Home() {
    return (
        <main>

                <Navbar />
                <Homepage />

        </main>
    )
}
