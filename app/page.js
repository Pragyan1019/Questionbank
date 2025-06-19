"use client"
import Image from "next/image";
import { Inter } from 'next/font/google'
import Link from "next/link";

const fraunces = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  return (
  <>
  <main className=" bg-[#F8F9FA] md:max-h-[90vh] h-[93.5vh]  relative  flex justify-center">
    <div className="title md:absolute md:bottom-80 md:left-37 md:mt-0 flex flex-col gap-1 left-[50%] mt-65 ">
      <span className="md:text-3xl text-2xl text-center z-10 md:font-normal font-extrabold ">🚀 Your Journey to </span>
      <span className="md:text-5xl text-3xl text-center z-10 md:font-normal font-extrabold"> Excellence Starts Here </span>
<span className="text-center md:text-xl z-10">Select your class and begin mastering every concept.</span>
    </div>
<div className="container bg-[#F8F9FA]  flex absolute md:bottom-40 justify-around bottom-20 ">
<div className="buttons flex gap-20   md:items-end md:flex-row flex-col ">
<Link href="/Class11">  <div className="class11 h-25 w-40 justify-center items-center flex bg-[#884788] shadow-xl shadow-[#b8a1b8] text-2xl rounded cursor-pointer hover:scale-110 transition-transform ">
  <Image alt="An vector image" width={30} height={50} src={"/books.gif"} unoptimized></Image>
  <span className={fraunces.className}> Class 11</span>
  </div></Link>
 <Link href="/Class12"> <div className="class12  h-25 w-40 justify-center items-center flex bg-[#884788] shadow-xl shadow-[#b8a1b8] text-2xl rounded cursor-pointer hover:scale-110 transition-transform ">
    <Image alt="An vector image" width={30} height={50} src={"/books.gif"} unoptimized></Image>
 <span className={fraunces.className}> Class 12</span>
  </div></Link>
</div>
<div className="image md:block hidden">
 <Image alt="An vector image" width={500} height={500} src={"/vector.png"}></Image>
  
</div>
</div>
</main>


  </>
  );
}
