"use client"
import React from 'react'
import { Inter,Fraunces } from 'next/font/google'
import Image from "next/image";
import { useRef,useState } from 'react';


const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
})

const Contact = () => {
    const [message, setmessage] = useState(false)
    const ref=useRef();
    const handleclick=()=>{
setmessage(true)
    }
  return (
    <div className={`container flex w-[98%]  mt-3 ${inter.className} md:flex-row flex-col `}>
    <div className='left-side md:w-1/2 w-full p-3 '>
<div className={`title ${fraunces.className} text-center text-3xl m-3`}>Get in Touch</div>

<div className='text-center'>"We'd love to hear from you! Please fill out the form below,"</div>
{message ? <div className='font-semibold text-lg mt-20 text-center'>Thank you! Your message has been sent.<br/> We'll get back to you within 24 hours</div>:
(<div ref={ref} className="form my-4 md:w-1/2 mx-auto w-[80%]">
    <form action="">
      <div className="flex flex-col p-2"> <label htmlFor="name">Name:</label>
        <input type="text" id='name' placeholder='Enter your Name' className='border border-black w-full p-1 rounded'/></div>  
      <div className="flex flex-col p-2"> <label htmlFor="mail">Email:</label>
        <input type="text" id='mail' placeholder='Enter your Email' className='border border-black w-full p-1 rounded'/></div>  
      <div className="flex flex-col p-2"> <label htmlFor="subject">Subject:</label>
        <input type="text" id='subject' placeholder='Enter your Subject' className='border border-black w-full p-1 rounded'/></div>  
      <div className="flex flex-col p-2"> <label htmlFor="message">Message:</label>
        <textarea type="text" id='message' placeholder='Enter your Message' className='border border-black w-full p-1 rounded h-30'/></div>  
        </form>
        <button onClick={handleclick} className="  h-12 w-24 mx-auto mt-5 justify-center items-center flex bg-[#884788] shadow-xl shadow-[#5c315c] text-lg rounded cursor-pointer">Submit</button>
</div>)}
<div className='text-center text-sm gap-2 mt-6 flex flex-col   rounded text-gray-600 font-[italic]'>
 <span> <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">📧 ghimrepragyan10@gmail.com  
</a></span>
          <span><a href="https://www.linkedin.com/in/pragyan-ghimire-508717363/">🔗 LinkedIn: Pragyan1019</a> </span>
</div>
    </div>
    <div className='right-side w-[40%] p-3 relative md:block hidden'>
        <div className="img">
            <Image alt="An vector image" width={465} height={100} src={"/myimage.png"}></Image>
        </div>
        
       
            
    </div>
    </div>
  )
}

export default Contact
