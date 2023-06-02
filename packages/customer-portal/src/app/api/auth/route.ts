// Notice from where NextResponse is imported:
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

// Notice the function definition:
// export async function POST(req: NextRequest) {
//   const data = await req.json();
//   console.log(data);
  
//   return NextResponse.json({ message: "Hello World" });
// }

export default function handler(req: NextResponse, res) {
  // Handle the incoming request
  // Return the desired response

  res.status(200).json({ message: 'API route is working' });
}