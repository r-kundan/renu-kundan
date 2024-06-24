
'use client'
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import projectsData from "@/data/projects.json"

function page() {
  return (
    <div className="min-h-screen bg-black py-12 pt-36">
        <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">All Project ({projectsData.projects.length})</h1>  
        <div className="flex flex-wrap justify-center">
            {projectsData.projects.map((projects ,index) => (
                <CardContainer className="inter-var m-4" key={index}>
                <CardBody className="bg-black  relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black w-auto sm:w-[30rem] h-auto rounded-xl p-6 border border-white/[0.2]  ">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 text-white"
                  >
                    {projects.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-300 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    {projects.description}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src={projects.image}
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt={projects.title}
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-20">
                    <Link  target="_blank" href={`${projects.demo}`}>
                 
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl text-xs font-normal border dark:text-white"
                    >
                      Demo
                    </CardItem>
                    </Link>
                    <Link  target="_blank" href={`${projects.github}`}>
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-black border dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      Github
                    </CardItem>
                    </Link>

                  </div>
                </CardBody>
              </CardContainer>
            ))}
        </div>  
    </div>
  )
}

export default page
