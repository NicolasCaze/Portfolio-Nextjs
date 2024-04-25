"use client"
import Image from "next/image"
import { Section } from "./Section"
import { motion } from "framer-motion";
import {fadeIn} from "./Animations/variants"
import { SvgDeco } from "./icons/SvgDeco";

export const About = () => {
  return (
    <Section className="flex flex-col lg:flex-row gap-10 w-full mt-20 ml-10 pl-10 lg:mt-32 lg:ml-20 lg:pl-20">

      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.7}}
        className="w-full lg:w-1/2"
      >
        <h2 className="text-xl lg:text-3xl font-bold">⚡ About me</h2>
        <br />
        <p className="text-neutral-400 whitespace-pre-line text-sm lg:text-xl leading-relaxed lg:leading-normal text-justify sm:text-base">
          Hi ! I&apos;m Nicolas Caze, a passionate computer science enthusiast with a focus on <span className="text-primary">web development.</span>

          Currently, I&apos;m in my third year of a Bachelor&apos;s degree at <span className="text-primary">Digital Campus</span>, where I&apos;m expanding my <span className="text-primary">knowledge and skills</span> in the field. In addition, I&apos;m gaining valuable hands-on experience through an alternance at <span className="text-primary">AND</span>, a communication agency. I love <span className="text-primary">exploring</span> new technologies and keeping up with the latest trends in web development. My <span className="text-primary">goal</span> is to continue my studies until I get my Master&apos;s degree, so that I can specialize even further and become <span className="text-primary">an expert</span> in my field.

          When I&apos;m not coding I play games with my friends, watch movies at the cinema, or if the weather&apos;s good, play basketball! 🏀
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.7}}
        className="w-full lg:w-1/2 lg:ml-8 flex justify-center lg:justify-end items-center"
      >
        <div className="w-full lg:w-3/4">
          <Image
            className="rounded-full mx-auto"
            src="/me.jpg"
            width={290}
            height={300}
            alt="Picture of the author"
          />
        </div>
      </motion.div>
    </Section>
  );
};
