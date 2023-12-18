"use client";
import Image from "next/image";
import React from "react";


export const ContactContent = () => {
    return (
        <div>
            <div className="pt-36 py-10 flex md:flex-col sm:flex-col">

                <div className=" lg:w-1/2 xl:w-1/2 2xl:w-1/2 bg-background  flex  flex-col items-center justify-center">

                    <p className="text-primary text-8xl font-bold sm:text-5xl">Contact Me</p>

                    <input placeholder="Email" className="px-4 py-2 mt-10 outline-none w-2/3 m-5 h-[45px] rounded" type="email" name="" id="" />

                    <textarea placeholder="Type your message here" className="px-4 outline-none py-2 w-2/3 h-[280px] m-5 rounded" name="" id=""></textarea>

                    <button className="bg-[#FFFF00] hover:bg-[#d3d36f] outline-none font-bold w-2/3 h-[45px] m-5 rounded">Submit</button>

                </div>

                <div className=" lg:w-1/2 xl:w-1/2 2xl:w-1/2 bg-background  flex flex-col items-center justify-center py-10">

                    <p className="text-primary text-8xl font-bold sm:text-5xl py-10">Booking</p>

                    <Image className="py-10" src="/whatsapp.svg" alt="whatsapp" width={200} height={200} />

                    <a href="tel:+21654443650" className="text-onBackground sm:text-4xl text-8xl py-10">+21654443650</a>

                </div>

            </div>
        </div>
    )
}