"use client"
import React from "react";
import Link from "next/link";
import '../globals.css'



function page() {
  return (
    <div className=" w-full h-full mb-32 relative flex justify-center items-center">
        <div className=" m-4 flex flex-wrap sm:flex-nowrap justify-center gap-6">
        <h1 className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 m-4 rounded-lg p-3 flex justify-center items-center text-white ">
          <b className="flex justify-center items-center text-center block md:hidden">EDUCATION</b>
          <b className="md:m-8 flex justify-center items-center text-center md:block hidden">
            E
            <br />
            D
            <br />
            U
            <br />
            C
            <br />
            A
            <br />
            T
            <br />
            I
            <br />
            O
            <br />
            N</b>
        </h1>
        <div className="m-4 flex flex-col  gap-8">
          <div className="border-none p-4 shadow-md shadow-indigo-500 rounded-lg">
            <h3 className="text-pink-400 text-lg">
              <span className="text-pink-600 ">
                <b>2019-2022</b>
              </span>{" "}
              <Link href="https://www.gjust.ac.in/" target="_blank">
                | Guru Jambheshwar University
              </Link>
            </h3>
            <div className="px-6 m-2">
              {" "}
              <h2 className="font-bold">
                BACHELOR OF SCIENCE IN COMPUTER SCIENCE{" "}
              </h2>
              <h5 className="italic tracking-wider pl-3">
                I hold a Bachelor of Science degree in Computer Science. I
                acquired a solid foundation in various computer science
                concepts. And enhanced my problem solving skills{" "}
              </h5>
            </div>
          </div>
          <br />
          <div className="border-none p-4 shadow-md shadow-indigo-500 rounded-lg">
          <h3 className="text-pink-400 text-lg">
            <span className="text-pink-600 ">
                <b>2018-2019</b>
              </span>{" "}
              <Link
                href="https://www.cbse.gov.in/cbsenew/cbse.html"
                target="_blank"
              >
                | Central Board of Secondary Education
              </Link>
            </h3>
            <div className="px-6 m-2">
              {" "}
              <h2 className="font-bold">Non-medical-PCM </h2>
              <h5 className="italic tracking-wider pl-3">
                I had a volunteer experience at school, which is helping me
                right now in working with the team and leadership
              </h5>
            </div>
          </div>
          <br />
          <div className="border-none p-4 shadow-md shadow-indigo-500 rounded-lg">
          <h3 className="text-pink-400 text-lg">
                        <span className="text-pink-600 ">
                <b>2017-2019</b>
              </span>{" "}
              | VOLUNTEER EXPERIENCE
            </h3>
            <div className="px-6 m-2 ">
              {" "}
              <h2 className="font-bold">NATIONAL SERVICE SCHEME</h2>
              <h4 className="italic tracking-wider pl-3">Social service</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  );
}

export default page;
