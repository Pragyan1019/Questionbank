// export async function POST(req) {

//     const { password } = await req.json();
//     const res = await fetch(process.env.Fetch_Password, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ password })
//     });

//     const data = await res.json();
//     return new Response(JSON.stringify(data), {
//       status: res.status,
//       headers: { 'Content-Type': 'application/json' }
//     });

  
// }
import clientPromise from "@/app/lib/mongodb"; // Adjust path if needed
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { password } = await req.json();
        
        // This is the logic from your Express app!
        if (password === process.env.ADMIN_PASSWORD) {
            // Optional: You could log successful/failed attempts to your database
            // const client = await clientPromise;
            // const db = client.db("questionbank");
            // await db.collection("passwords").insertOne({ success: true, timestamp: new Date() });
            
            return NextResponse.json({ success: true }, { status: 200 });
        } else {
            return NextResponse.json({ success: false, message: "Invalid Password" }, { status: 401 });
        }

    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
    }
}