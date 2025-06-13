"use client"
import React from 'react'
import { useState,useRef } from 'react'


const Page = () => {
    const [form, setform] = useState({questions:"",subjects:"",year:"",grade:"",tags:""})
    const [isauthorized, setisuuthorized] = useState()
    const [pass, setpass] = useState({password:""})
    const ref=useRef(null);
    const hidepassform=useRef(null);

const handlechange=(e)=>{
  setform({...form,[e.target.name]:e.target.value})
}

    const Savequestions=async()=> {
      await fetch('http://localhost:8080/Questions',{
     method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
body:JSON.stringify({...form})
})
setform({questions:"",subjects:"",year:"",grade:"",tags:""})
    }
   
    const checkpassword=async()=>{
let res=await fetch('http://localhost:8080/Admin',{
     method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
body:JSON.stringify({password:ref.current.value})
}
)
const data =await res.json();
        if(data.success){
           setisuuthorized(true)
           hidepassform.current.style.display="none"
        }
        else{
           setisuuthorized(false)
    }}
  return (
  
    <>
    {isauthorized==true && <div>
    <form action="" className='mx-20 flex flex-col gap-[10px]'>
  <div className="flex flex-col"> <label htmlFor="questions">Questions:</label>
    <textarea value={form.questions} onChange={handlechange}  name='questions' id="questions" className='w-1/2 h-[40vh] overflow-y-auto p-1' placeholder='Enter the questions'></textarea></div> 
    <div className="flex flex-col"> <label htmlFor="subjects">subjects:</label>
    <input type="text" id='subjects'  value={form.subjects} onChange={handlechange} name='subjects' className='w-[40%] p-2' placeholder='Enter the subjects name'/></div>
    <div className="flex flex-col"> <label htmlFor="year">Year:</label>
    <input type="text" id='year'  value={form.year} onChange={handlechange} name='year' className='w-[40%] p-2' placeholder='Enter the year of the question'/></div>
    <div className="flex flex-col"> <label htmlFor="grade">Grade:</label>
    <input type="text" id='grade'  value={form.grade} onChange={handlechange} name='grade' className='w-[40%] p-2' placeholder='Enter the grade'/></div>
    <div className="flex flex-col"> <label htmlFor="tags">Tags:</label>
    <input type="text" id='tags'  value={form.tags} onChange={handlechange} name='tags' className='w-[40%] p-2' placeholder='Enter the tags'/></div>

</form>
  <button className='p-2 bg-blue-600 rounded-3xl my-5 w-25 py-3 font-semibold absolute bottom-2 right-50 cursor-pointer
        hover:bg-blue-500' onClick={Savequestions}>Submit</button>



        </div>
        }
    {isauthorized==false && <div>
    Password incorrect,Acces denied!
        </div>
        }
        <div className="container" ref={hidepassform}>
    <div className='bg-slate-50 md:w-1/3 mx-auto text-center my-28 p-10 w-full'>
    <div>
       <label htmlFor="password" className='text-2xl mx-auto'>Enter the password</label>
<input type="text" id='password'   ref={ref} className='h-10 border-2 border-black w-80 mx-auto p-1'  placeholder='Enter the password'/>
</div>
<button onClick={checkpassword} className='mt-8 bg-purple-500 p-3 rounded-3xl text-white font-bold hover:cursor-pointer'>Submit</button>
    </div>
    </div>
    
    </>
  )
}

export default Page
