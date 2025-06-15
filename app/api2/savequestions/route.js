import { NextResponse } from 'next/server';
const backend=process.env.Fetch_Questions;
export async function GET(req){
const res=await fetch(backend);
const data=await res.json();
return NextResponse.json(data); 
}