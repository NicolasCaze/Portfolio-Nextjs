import { Card } from "@/components/ui/card"
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import React from "react"
import { GithubIcon } from "./icons/Githubicon"
import { motion, useInView } from "framer-motion";

interface ProjectCardProps {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl: string;
  previewUrl: string;
}
export const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl}: ProjectCardProps) => {
    return (
        <Card className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}>
        <div 
             className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <GithubIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>

        <div className="bg-[#181818] py-1 px-4 absolute bottom-0 left-0 w-full p-2 text-white rounded-b-xl mt-2 ">
          <h5 className="text-xl font-semibold mb-2">{title}</h5>
          <p className="text-[#ADB7BE]">{description}</p>
        </div>

      </Card>
    )
}
