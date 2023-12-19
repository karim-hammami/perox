"use client";
import Image from "next/image";
import React, { useEffect }  from "react";
import { ContactMe } from "@/actions/contact";
import { ContactButton } from "./ContactButton";
import { useFormState } from "react-dom";
import { toast, Toaster } from "react-hot-toast";



export const ContactContent = () => {
    const [state, formAction] = useFormState(ContactMe, null)

    useEffect(() => {
        if (state?.isSuccess) {
            console.log(state)
            toast.success('Message has been sent!', {style: {background: "#FFFF00", color: "#000000"}})
        } else if (state?.isError) {
            console.log(state)
            toast.error("There seems to be a problem!", {style: {background: "#FFFF00", color: "#000000"}})
        }
    }, [state])
    
    return (
        <div>
            <div className="pt-36 py-10 flex md:flex-col sm:flex-col">

                <form action={formAction} className=" lg:w-1/2 xl:w-1/2 2xl:w-1/2 bg-background  flex  flex-col items-center justify-center">

                    <p className="text-primary text-8xl font-bold sm:text-5xl">Contact Me</p>

                    <input placeholder="Email" className="px-4 py-2 mt-10 outline-none w-2/3 m-5 h-[45px] rounded" type="email" name="email" />

                    <textarea placeholder="Type your message here" className="px-4 outline-none py-2 w-2/3 h-[280px] m-5 rounded" name="message" />

                    <ContactButton />

                    <Toaster position="bottom-center" />

                </form>

                <div className=" lg:w-1/2 xl:w-1/2 2xl:w-1/2 bg-background  flex flex-col items-center justify-center py-10">

                    <p className="text-primary text-8xl font-bold sm:text-5xl py-10">Booking</p>

                    <Image className="py-10" src="/whatsapp.svg" alt="whatsapp" width={200} height={200} />

                    <a href="tel:+21654443650" className="text-onBackground sm:text-4xl text-8xl py-10">+21654443650</a>

                </div>

            </div>
        </div>
    )
}