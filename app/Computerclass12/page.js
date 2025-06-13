"use client";
import React, { useEffect } from "react";
import { useState } from "react";

const Page = () => {
  const [data, setdata] = useState(null);
  useEffect(() => {
    async function fetchdata() {
      let res = await fetch("http://localhost:8080/Questions");
      const a = await res.json();
      setdata(a);
      
    }
    fetchdata();
  }, []);
  if (data === null) {
    return <div className="text-center my-5">Loading...</div>;
  }
  const filtereddata = data.filter(
    i => i.subjects === "Computer" && i.grade =="12"
  );

  if (filtereddata.length===0) {
    return <div >No questions of Computer found</div>;
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
