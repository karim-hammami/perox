import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer"


interface em {
  email: string,
  message: string,
}


export async function POST(req: Request, res: Response) {
    // Get the todo data from the request body
    const reso: em = await req.json()

    

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
    });

    const mailOptions = {
      from: reso.email, // Use the email entered by the user
      to: process.env.EMAIL, // Replace with your Gmail email address
      subject: 'Email from Next.js Form',
      text: reso.message,
    };
    try {
      // Send the email
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent:', info.response);
      return new NextResponse(JSON.stringify({"message": "message is sent!!!!"}))
    } catch (error) {
      console.error('Error sending email:', error);
      return new NextResponse(JSON.stringify({"message": "message failed!!!"}))
    }
  
  }