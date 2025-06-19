"use client";
import React, { useEffect, useState } from "react";

const Page = () => {
 
  const [questions, setQuestions] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchdata() {
      let allquestions=[];
      let currentpage=1;
      let totalPages=1;
      try {
      
        do{
        let res = await fetch(`/api2/savequestions?page=${currentpage}&limit=100`);

        if (!res.ok) {
          throw new Error(`API call failed with status: ${res.status}`);
        }

        const responseData = await res.json();

        if (!responseData || !Array.isArray(responseData.questions)) {
          throw new Error("Data from API is not in the expected format.");
        }
        allquestions.push(...responseData.questions)
        totalPages=responseData.totalPages;
        currentpage++;
      }while(currentpage<=totalPages)
      
        setQuestions(allquestions);

      } catch (err) {
        console.error("Fetch data error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchdata();
  }, []);

  if (loading) {
    return <div className="text-center my-5">Loading...</div>;
  }

  if (error) {
    return <div className="text-center my-5 text-red-500">Error: {error}</div>;
  }
  
  
  if (!questions || questions.length === 0) {
    return <div className="text-center my-5">No questions found.</div>;
  }

 
  const filtereddata = questions.filter(
    (i) => i.subject === "English" && i.grade == "12"
  );

  if (filtereddata.length === 0) {
    return <div className="text-center p-5 text-2xl">No English questions for grade 12 were found.</div>;
  }

  return (
    <>
      <div className="max-w-4xl md:mx-auto md:px-4 sm:px-6 lg:px-8 py-8  px-2">
         <div className="flow-root">
          <ul role="list" className="-my-4 divide-y divide-gray-200">
      {filtereddata.map((i) => (
        <li key={i._id} className="md:py-5 py-6 hover:bg-purple-50 transition-colors duration-200 cursor-pointer">
          
          {/* 4. Corrected property name from 'questions' to 'question' */}
          <div className="text-lg text-gray-800 leading-relaxed">{i.question}</div>
        </li>
      ))}
      </ul>
      </div>
      </div>
    </>
  );
};

export default Page;