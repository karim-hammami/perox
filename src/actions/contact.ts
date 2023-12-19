"use server";
import { Contact } from "@/types/Contact";
import { z } from "zod";

const schema = z.object({
    email: z.string().min(1, {message : "This Field has to be filled!"}).email("This is not a valid Email!"),
    message: z.string().min(1, {message: "This Field has to be filled!"})
})

export async function ContactMe(prevState: any ,formdata: FormData) {
    const rawData = {
        email: formdata.get("email"),
        message: formdata.get("message"),
    }
    try {
        const parse = schema.parse(rawData);
        console.log('Data is valid:', rawData);
        const data: Contact = {
            email: parse.email,
            message: parse.message
        }
        const secret = process.env.SECRET
        console.log(secret)
        return { 
            isError: false, 
            isSuccess: true, 
            data: data, 
            message: "Success", 
            statusCode: 200, 
        }; 
    } catch (error) {
        console.error('Validation error');
        return { 
            isError: true, 
            isSuccess: false, 
            data: null, 
            message: "Error", 
            statusCode: 500, 
        };
    }
    
}