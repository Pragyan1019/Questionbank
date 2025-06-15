"use client";
import React, { useEffect } from "react";
import { useState } from "react";

const Page = () => {
  const [data, setdata] = useState(null);
   const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchdata() {
      try{
      let res = await fetch('/api2/savequestions');
        if (!res.ok) {
    console.error("Failed to fetch questions from the API.");
    // Maybe show an error message to the user and stop.
    return; 
  }

      const a = await res.json();
          if (!Array.isArray(a)) {
            throw new Error("Data received from API is not an array.");
        }
      setdata(a);
    }
     catch (err) {
        // Catch any error from the try block (network error, bad response, etc.)
        console.error("Fetch data error:", err);
        setError(err.message); // Store the error message to display to the user
      } finally {
        // This runs regardless of success or failure
        setLoading(false); // Stop showing the loading indicator
      }
    }
    fetchdata();
  }, []);
   // Render UI based on the state
  if (loading) {
    return <div className="text-center my-5">Loading...</div>;
  }
    if (error) {
    return <div className="text-center my-5 text-red-500">Error: {error}</div>;
  }
  if (data === null) {
    return <div className="text-center my-5">Loading...</div>;
  }
  const filtereddata = data.filter(
    (i) => i.subjects === "Physics" && i.grade =="12"
  );

  if (filtereddata.length===0) {
    return <div>No questions of physics found</div>;
  }

  return (
    <>
      {filtereddata.map((i) => (
        <div key={i._id||i.id} className="container flex p-1 m-1 w-[98vw]">
          <div className="year w-[8vw] text-xl md:block hidden">{i.year}</div>
          <div className="questions md:w-[87vw] w-[98vw]">{i.questions}</div>
        </div>
      ))}
    </>
  );
};

export default Page;
