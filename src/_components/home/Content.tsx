import React from "react";
import { Catch } from "./Catch";
import { Banner } from "./Banner";

export const Content = () => {
    return (
        <div className="flex md:flex-col sm:flex-col">
            <Banner />
            <Catch />
        </div>
    )
}
