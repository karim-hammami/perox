"use server";
import { Contact } from "@/types/Contact";
import { z } from "zod";
;


const schema = z.object({
    email: z.string().min(1, {message : "This Field has to be filled!"}).email("This is not a valid Email!"),
    message: z.string().min(1, {message: "This Field has to be filled!"})
})

const link = "https://api.resend.com/emails"
const bearerToken = process.env.RESEND_API_KEY
const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${bearerToken}`
  };

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
        const tobesent = {
            "from": "onboarding@resend.dev",
            "to": "hammamik790@gmail.com",
            "subject": `You have an Email from ${data.email}`,
            "html": `<h1>You have an Email from ${data.email} sent from <a href="https://peroxmusic.com">peroxmusic.com</a></h1><p><strong>${data.message}</strong></p>`
        }
        const response = await fetch(link, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(tobesent)
        });

        if (!response.ok) {
            return { 
                isError: true, 
                isSuccess: false, 
                data: null, 
                message: "Error", 
                statusCode: 500, 
            };
        }

        const responseData = await response.json();


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