import { NextRequest, NextResponse } from "next/server";

interface em {
  email: string,
  body: string,
}


export async function POST(req: NextRequest) {
    // Get the todo data from the request body
    const todoData= req.body;
    console.log("hit")
    console.log(todoData)
  
    // Create a new todo in the database
    return new Response(todoData, {status: 200});
  }