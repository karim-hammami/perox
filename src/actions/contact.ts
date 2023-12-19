"use server";
import { Contact } from "@/types/Contact";
import { z } from "zod";
import { Resend } from 'resend';


const schema = z.object({
    email: z.string().min(1, {message : "This Field has to be filled!"}).email("This is not a valid Email!"),
    message: z.string().min(1, {message: "This Field has to be filled!"})
})

export async function ContactMe(prevState: any ,formdata: FormData) {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const rawData = {
        email: formdata.get("email"),
        message: formdata.get("message"),
    }
    try {
        const parse = schema.parse(rawData);
        const data: Contact = {
            email: parse.email,
            message: parse.message
        }
        resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'hammamik790@gmail.com',
            subject: `Message from ${data.email}`,
            html: `<h1>You have a message from ${data.email}</h1><p><strong>${data.message}</strong></p>`
        });
        return { 
            isError: false, 
            isSuccess: true, 
            data: data, 
            message: "Success", 
            statusCode: 200, 
        }; 
    } catch (error) {
        return { 
            isError: true, 
            isSuccess: false, 
            data: null, 
            message: "Error", 
            statusCode: 500, 
        };
    }
    
}