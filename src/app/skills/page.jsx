"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";

function page() {
    return (
        <div className="flex justify-center text-center w-full">
       <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-4 w-full bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        
   <div className="flex items-center justify-center flex-wrap gap-10">
   <p className="flex justify-center items-center shadow-lg rounded-full border-cyan text-3xl p-3">JavaScript</p>
   <p className="flex justify-center items-center shadow-lg rounded-full border-cyan text-3xl p-3">TypeScript</p>
   <p className="flex justify-center items-center shadow-lg rounded-full border-cyan text-3xl p-3">React js</p>
   <p className="flex justify-center items-center shadow-lg rounded-full border-cyan text-3xl p-3">Next js</p>
   <p className="flex justify-center items-center shadow-lg rounded-full border-cyan text-3xl p-3">Redux</p>

      <p className="flex justify-center items-center shadow-lg rounded-full border-cyan text-3xl p-3">HTML</p>
      <p className="flex justify-center items-center shadow-lg rounded-full border-cyan text-3xl p-3">Tailwind Css</p>
      <p className="flex justify-center items-center shadow-lg rounded-full border-cyan text-3xl p-3">Bootstrap</p>
      <p className="flex justify-center items-center shadow-lg rounded-full border-cyan text-3xl p-3">Css</p>
      <p className="flex justify-center items-center shadow-lg rounded-full border-cyan text-3xl p-3">Sass</p>
    

   </div>

      </motion.h1>
    </LampContainer>
        </div>
      );
}

export default page
