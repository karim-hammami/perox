import React from "react";
import { SocialIcon } from "react-social-icons";


export const Footer = () => {
    return (
        <div className="bg-background relative bottom-0 w-full h-28 px-48 sm:px-12 flex items-center sm:flex-col justify-between">
            <p className="text-onBackground">© 2023 PEROXANA</p>
            <div className="flex gap-2 sm:mb-10 sm:mt-4">
            <SocialIcon url="https://soundcloud.com/peroxmusic" />
            <SocialIcon url="https://www.facebook.com/peroxmusic/" />
            <SocialIcon url="https://www.instagram.com/peroxofficial/?hl=en" />
            <SocialIcon url="https://www.youtube.com/channel/UCFt81JdYEXwKjyQJoI2d89Q" />
            </div>
        </div>
    )
}