// import { NextResponse } from 'next/server';
// const backend=process.env.Fetch_Questions;
// export async function GET(req){
// const res=await fetch(backend);
// const data=await res.json();
// return NextResponse.json(data); 
// }
// app/api/savequestions/route.js

import clientPromise from "@/app/lib/mongodb";
import { NextResponse } from "next/server";

// Function to GET questions with pagination
export async function GET(req) {
    try {
        const client = await clientPromise;
        const db = client.db("questionbank");

        const { searchParams } = new URL(req.url);
        const page = parseInt(searchParams.get('page') || '1', 10);
        const limit = parseInt(searchParams.get('limit') || '20', 10);
        const skip = (page - 1) * limit;

        // Fetch a "page" of questions and the total count in parallel for efficiency
        const [questions, totalQuestions] = await Promise.all([
            db.collection("questions").find({}).sort({ _id: -1 }).skip(skip).limit(limit).toArray(),
            db.collection("questions").countDocuments({})
        ]);

        return NextResponse.json({
            questions,
            totalPages: Math.ceil(totalQuestions / limit),
            currentPage: page,
        });

    } catch (error) {
        console.error("GET /api2/savequestions Error:", error);
        return NextResponse.json({ message: "Failed to fetch questions" }, { status: 500 });
    }
}

// Function to POST new questions with defensive coding and batching
export async function POST(req) {
    try {
        const client = await clientPromise;
        const db = client.db("questionbank");

        // Use default empty strings to prevent crashes if fields are missing
        const { questions = '', subjects, grade, tags = '' } = await req.json();

        // Defensive parsing
        const tagsarray = (tags || '').split(",").map(i => i.trim()).filter(i => i.length > 0);
        const questionsarray = (questions || '').split("?").map(i => i.trim()).filter(i => i.length > 0)
            .map(i => ({
                question: i + '?',
                subject: subjects,
               
                grade,
                tags: tagsarray
            }));

        if (questionsarray.length === 0) {
            return NextResponse.json({ message: "No valid questions provided" }, { status: 400 });
        }

        // --- BATCHING LOGIC TO PREVENT TIMEOUTS ---
        const BATCH_SIZE = 100;
        let successfulInserts = 0;

        for (let i = 0; i < questionsarray.length; i += BATCH_SIZE) {
            const batch = questionsarray.slice(i, i + BATCH_SIZE);
            const insertResult = await db.collection("questions").insertMany(batch);
            successfulInserts += insertResult.insertedCount;
        }
        
        return NextResponse.json({ success: true, insertedCount: successfulInserts }, { status: 201 });

    } catch (error) {
        console.error("POST /api/savequestions Error:", error);
        return NextResponse.json({ message: "Failed to add questions", error: error.message }, { status: 500 });
    }
}