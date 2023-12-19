"use server";
import { Contact } from "@/types/Contact";
import { z } from "zod";
import { Resend } from 'resend';
import { EmailTemplate } from "@/_components/global/EmailTemplate";


const schema = z.object({
    email: z.string().min(1, {message : "This Field has to be filled!"}).email("This is not a valid Email!"),
    message: z.string().min(1, {message: "This Field has to be filled!"})
})

const resend = new Resend(process.env.RESEND_API_KEY);

export async function ContactMe(prevState: any ,formdata: FormData) {
    

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
        try {
            resend.emails.send({
                from: 'onboarding@resend.dev',
                to: ['hammamik790@gmail.com'],
                subject: `Message from ${data.email}`,
                react: EmailTemplate({ email: data.email, message: data.message })
            });
        } catch (error) {
            return { 
                isError: true, 
                isSuccess: false, 
                data: null, 
                message: "Could not send Email", 
                statusCode: 500, 
            };
        }
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