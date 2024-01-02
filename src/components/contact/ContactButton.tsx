"use client";
import { useFormStatus } from "react-dom";


const ContactLoading = () => {
    return (
        <div className="border-primary text-center h-8 w-8 animate-spin rounded-FULL border-8 border-t-[#000000]" />
    )
}


export const ContactButton = () => {

    const { pending } = useFormStatus()

    const style = `bg-[#FFFF00]  flex items-center justify-center outline-none font-bold w-2/3 h-[45px] m-5 rounded`

    if (pending) {
        return (<button type="submit" className={style}><ContactLoading /></button>)
    } 
    return (<button type="submit" className={style}>Submit</button>)
}