"use client";
import React, { Suspense } from "react";
import { Catch } from "./Catch";
import { Banner } from "./Banner";
import { Spinner } from "../global/Spinner";

export const Content = () => {
    return (
        <div className="flex md:flex-col sm:flex-col">
            <Banner />
            <Catch />
        </div>
    )
}
