import { NextResponse, NextRequest } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";



export async function GET(request: Request) {
   const userData = {
    "name": "abhishek",
    "id": "1001",
    "greet": "hello World !"
   }
    return NextResponse.json({data: userData});
  }

