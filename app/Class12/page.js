"use client"
import Image from "next/image";
import React from 'react'
import Link from "next/link";

const Page = () => {
  return (
   <>
   <div className="container md:bg-[#dce1ea] bg-[#F8F9FA] md:w-1/2 w-full mx-auto rounded p-5 md:mt-3 ">
<div className="flex mx-auto w-full  justify-center my-4">
  <Image alt="An vector image" width={40} height={50} src={"/books.gif"}></Image>
  <span className="md:text-3xl text-4xl"> Class 12  Subjects </span>
  </div>
  <div className="text-center md:text-xl text-2xl ml-8">Choose a subject to begin practice.</div>
  <div className="flex md:flex-col justify-center flex-wrap flex-row md:gap-0 gap-10 md:mt-0 mt-30">
<div className="subjects flex flex-wrap md:gap-0 gap-10  md:p-10 md:mt-10 justify-evenly md:flex-row flex-col">
<Link href="/Physicsclass12"> <div className="physics h-20 w-30 justify-center items-center flex bg-[#884788] shadow-xl shadow-[#b8a1b8]  rounded cursor-pointer hover:scale-110 transition-transform ">
<span className="text-xl"> Physics</span> </div></Link>
<Link href="/Chemistryclass12"><div className="physics h-20 w-30 justify-center items-center flex bg-[#884788] shadow-xl shadow-[#b8a1b8]  rounded cursor-pointer hover:scale-110 transition-transform ">
 <span className="text-xl"> Chemistry</span></div></Link>
<Link href="/Mathsclass12"><div className="physics h-20 w-30 justify-center items-center flex bg-[#884788] shadow-xl shadow-[#b8a1b8]  rounded cursor-pointer hover:scale-110 transition-transform">
 <span className="text-xl"> Maths</span></div></Link>

</div>
<div className="subjects flex flex-warp  md:p-10 md:gap-0 gap-10   justify-evenly md:flex-row flex-col">
<Link href="/Biologyclass12"><div className="physics h-20 w-30 justify-center items-center flex bg-[#884788] shadow-xl shadow-[#b8a1b8]  rounded cursor-pointer hover:scale-110 transition-transform">
  <span className="text-xl"> Biology</span></div></Link>
<Link href="/Computerclass12"><div className="physics h-20 w-30 justify-center items-center flex bg-[#884788] shadow-xl shadow-[#b8a1b8]  rounded cursor-pointer hover:scale-110 transition-transform">
  <span className="text-xl">Computer</span></div></Link>
<Link href="/Englishclass12"><div className="physics h-20 w-30 justify-center items-center flex bg-[#884788] shadow-xl shadow-[#b8a1b8]  rounded cursor-pointer hover:scale-110 transition-transform">
  <span className="text-xl">English</span></div></Link>

</div>
</div>
   </div>
   

   </>
  )
}

export default Page
