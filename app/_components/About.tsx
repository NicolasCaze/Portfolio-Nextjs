"use client"
import Image from "next/image"
import { Section } from "./Section"
import { motion } from "framer-motion";
import {fadeIn} from "./Animations/variants"
import { SvgDeco } from "./icons/SvgDeco";

export const About = () => {
  return (
    <Section className="flex gap-20 w-full mt-52 ml-20 pl-20">
      
        <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.7}}
        >
          <h2 className="text-3xl font-bold">⚡ About me</h2>
          <br />
          <p className="text-neutral-400 text-1xl ">Hi ! I&apos;m Nicolas Caze, a passionate computer science enthusiast with a focus on <span className="text-primary">web <br /> development.</span>
            <br /> <br />
            Currently, I&apos;m in my third year of a Bachelor&apos;s degree at <span className="text-primary">Digital Campus</span>, where I&apos;m <br /> 
            expanding my <span className="text-primary">knowledge and skills</span> in the field. In addition, I&apos;m gaining valuable <br /> 
            hands-on experience through an alternance at <span className="text-primary">AND</span>, a communication agency. <br />
            I love <span className="text-primary">exploring</span> new technologies and keeping up with the latest trends in web <br /> 
            development. My <span className="text-primary">goal</span> is to continue my studies until I get my Master&apos;s degree, <br /> so that 
            I can specialize even further and become <span className="text-primary">an expert</span> in my field.
            <br /> <br />
            When I&apos;m not coding I play games with my friends, watch movies at the cinema, <br /> 
            or if the weather&apos;s good, play basketball! 🏀
          </p>
        </motion.div>

        <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.7}}
        >
          <Image className=" ml-10 rounded-full "
            src="/me.jpg"
            width={400}
            height={300}
            alt="Picture of the author"
          />
          
        </motion.div>
    </Section>
  );
};
