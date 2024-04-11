"use client"
import { Badge } from "@/components/ui/badge"
import { Section } from "./Section"
import { JavascriptIcon } from "./icons/Skills/JavascriptIcon"
import { SymfonyIcon } from "./icons/Skills/SymfonyIcon"
import { PhpIcon } from "./icons/Skills/PhpIcon"
import { NextjsIcon } from "./icons/Skills/NextjsIcon"
import { ReactIcon } from "./icons/Skills/ReactIcon"
import { TailwindIcon } from "./icons/Skills/TailwindIcon"
import { motion } from "framer-motion"
import { fadeIn } from "./Animations/variants"
export const Skills = () => {
    return <Section className=" gap-20  w-full mt-52 ml-20 pl-20">
      
        <motion.h2 className="text-3xl font-bold"
        
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.7}}
        >Skills</motion.h2>
        <motion.p className="pb-2  mb-4 text-neutral-400 text-1 text-lg"variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.7}}
        >I love working on ...</motion.p>

        <motion.div className="grid grid-cols-3 gap-4"
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.7}}
        >
          
  <div className="flex flex-col gap-2">
    <div className="flex flex-col gap-4">
      <SymfonyIcon size={40} />
    </div>
    <h3 className="mb-2 text-2xl font-semibold tracking-tight dark:text-white">Symfony</h3>
    <p className="text-sm text-muted-foreground">I enjoy using Symfony because it provides a clear <br /> and structured approach to building web applications, with <br /> a focus on reusability and maintainability.</p>
  </div>

  <div className="flex flex-col gap-2">
    <div className="flex flex-col gap-4">
      <PhpIcon size={40}/>
    </div>
    <h3 className="mb-2 text-2xl font-semibold tracking-tight dark:text-white">Php</h3>
    <p className="text-sm text-muted-foreground"> I like using PHP because it is easy to learn and use,<br /> and it has a large community of developers who <br />contribute to its development and provide support.</p>
  </div>

  <div className="flex flex-col gap-2">
    <div className="flex flex-col gap-4">
      <JavascriptIcon size={40}/>
    </div>
    <h3 className="mb-2 text-2xl font-semibold tracking-tight dark:text-white">Javascript</h3>
    <p className="text-sm text-muted-foreground">I enjoy using JavaScript because it allows me to create <br /> dynamic and engaging user experiences</p>
  </div>

  <div className="flex flex-col gap-2 mt-6">
    <div className="flex flex-col gap-2">
      <NextjsIcon size={40}/>
    </div>
    <h3 className="mb-2 text-2xl font-semibold tracking-tight dark:text-white">Nextjs</h3>
    <p className="text-sm text-muted-foreground">I like using Next.js because it provides a seamless <br /> developer experience, with features like automatic code <br /> splitting, optimized performance, and easy deployment</p>
  </div>

  <div className="flex flex-col gap-2 mt-6">
    <div className="flex flex-col gap-4">
      <ReactIcon size={40} className="animate-spin" style={{ animationDuration: "10s"}}/>
    </div>
    <h3 className="mb-2 text-2xl font-semibold tracking-tight dark:text-white">React</h3>
    <p className="text-sm text-muted-foreground">enjoy using React because it allows me to build <br />complex and dynamic user interfaces</p>
  </div>

  <div className="flex flex-col gap-2  mt-6">
    <div className="flex flex-col gap-4">
      <TailwindIcon size={40}/>
    </div>
    <h3 className="mb-2 text-2xl font-semibold tracking-tight dark:text-white">Tailwind</h3>
    <p className="text-sm text-muted-foreground">I like using Tailwind CSS because it provides a flexible <br />and customizable approach to styling</p>
  </div>
</motion.div>

 

    </Section>
}

