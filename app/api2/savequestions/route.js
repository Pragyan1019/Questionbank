// import { NextResponse } from 'next/server';
// const backend=process.env.Fetch_Questions;
// export async function GET(req){
// const res=await fetch(backend);
// const data=await res.json();
// return NextResponse.json(data); 
// }
import clientPromise from "@/app/lib/mongodb"; // Adjust path if needed
import { NextResponse } from "next/server";

// Function to GET all questions
export async function GET(req) {
    try {
        const client = await clientPromise;
        const db = client.db("questionbank");

        const questions = await db.collection("questions").find({}).toArray();

        return NextResponse.json(questions);

    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json({ message: "Failed to fetch questions" }, { status: 500 });
    }
}

// Function to POST new questions
export async function POST(req) {
    try {
        const client = await clientPromise;
        const db = client.db("questionbank");

        const { questions, subjects, year, grade, tags } = await req.json();

        // This is your data processing logic from the Express app
        const tagsarray = tags.split(",").map(i => i.trim()).filter(i => i.length > 0);
        const questionsarray = questions.split("?").map(i => i.trim()).filter(i => i.length > 0)
            .map(i => ({
                question: i + '?', // Renamed for clarity
                subject: subjects, // Renamed for clarity
                year,
                grade,
                tags: tagsarray
            }));

        if (questionsarray.length === 0) {
            return NextResponse.json({ message: "No valid questions provided" }, { status: 400 });
        }

        const insertResult = await db.collection("questions").insertMany(questionsarray);
        
        return NextResponse.json({ success: true, result: insertResult }, { status: 201 });

    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json({ message: "Failed to add questions" }, { status: 500 });
    }
}