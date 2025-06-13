"use client"
import React from 'react'
import { Inter,Fraunces } from 'next/font/google'
import Image from "next/image";


const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
})

const About = () => {
  return (
    <div className={`container  ${inter.className}`}>
      <div className="headline text-center flex flex-col mt-5 gap-3">
      <span className={`text-3xl font-bold ${fraunces.className}`}> Your Journey to Academic Excellence Starts with a Single Question.</span> 
      <span className='text-xl '>We&apos;re here to guide you every step of the way, from confusion to confidence.
</span>
      </div>

<div className="main mt-10  w-full flex pt-3 px-10 flex-col md:flex-row">
<div className="para md:w-[60%] order-2   w-full">
<div className="title text-2xl font-bold mb-4">Our Mission: Practice with Purpose</div>
<p className='font-[italic] text-lg mb-6'>&quot;Studying for the NEB exams can feel like searching for a needle in a haystack. We&apos;ve all been there—knowing that success often lies in mastering the types of questions that are asked time and again, but struggling to find them in one organized place.</p>
<p className='font-[italic] text-lg mb-6'>As a student, I felt this frustration firsthand. In an era of incredible technology, why was it still so hard to find a modern platform dedicated to practicing the most important questions?</p>
<p className='font-bold text-lg mb-6'>Questions.com.np was born from that simple question.</p>
<p className='font-[italic] text-lg mb-6'>Our mission is to close that gap. We meticulously curate and organize the high-yield, frequently repeated questions from past NEB exams so you can stop searching and start mastering. We're here to empower you to study smarter, build unshakable confidence, and walk into your exams fully prepared to excel.&quot;</p>
</div>
    <div className="image md:w-[40%] md:mb-0 mb-5 md:order-2">
 <Image alt="An vector image" width={500} height={100} src={"/studentsai.png"}></Image>
    </div>
</div>
<div className="approach my-2  w-full flex p-3 px-10 flex-col">
    <div className="title text-2xl font-bold mb-6">Our Approach: How We Help You Succeed</div>
        <div  className="title text-xl font-semibold mb-2">Expertly Curated Questions</div>
        <p className='font-[italic] text-lg mb-6'>We don&apos;t believe in quantity over quality. Our team meticulously analyzes years of NEB past papers to identify the high-yield questions and recurring patterns that are crucial for success. This means every question you practice is strategically chosen to build your understanding of core concepts and prepare you for what you&apos;ll actually see on the exam.</p>
        <div  className="title text-xl font-semibold mb-2">Comprehensive Subject Coverage</div>
        <p className='font-[italic] text-lg mb-6'>Your entire syllabus, all in one place. We offer a growing library of questions across all major subjects for both Class 11 and 12. Instead of hunting through different books and websites, you can find focused practice sets for everything you need, saving you time and keeping your study sessions organized.</p>
   
</div>


    </div>
  )
}

export default About
