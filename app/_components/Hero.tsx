"use client"
import { ComputerIcon } from "./icons/ComputerIcon"
import { RocketIcon } from "./icons/RocketIcon"
import { Section } from "./Section"
import { ButtonEmail, ButtonGithub, ButtonLinkedin } from "./Buttons/ButtonLink"
import { SvgDeco } from "./icons/SvgDeco"
import AnimatedDiv from "./Animations/Animation"
export const Hero = () => {
    return (
        <Section className="gap-20 w-full mt-32 ml-20 pl-20">
            <AnimatedDiv className="">
            <div className="flex-col md:flex-row">
                <SvgDeco className="absolute z-[-1] h-auto w-36 top-30s left-20" size={180}  />
          <p className="text-primary text-5xl relative z-10 w-full md:w-1/2">Hey there!, I&apos;m- </p> 
           <h2 className="text-9xl tracking-tighter font-bold w-full md:w-1/2">Caze Nicolas. </h2> 
           <h2 className="text-neutral-400 text-4xl mt-8 w-full md:w-1/2"><span className="text-primary">Web Junior Developer.</span> A self-taught developer with an <br />
            interest in Computer Science.</h2>
            <div className="flex-col md:flex-row items-center mt-10 text-2xl w-full md:w-1/2">
            <RocketIcon size={35} /><p>Exploring the world of web development</p>
            </div>
            <div className="flex items-center mt-2 text-2xl w-full md:w-1/2">
            <ComputerIcon size={40} className="text-foreground"/><p>Currently specializing in <span className="text-primary">Back-end Development</span></p>
            </div>
            <div className="flex  items-stretch mt-10 w-full md:w-1/2">
                <ButtonGithub />
                <ButtonLinkedin/>
                <ButtonEmail />
            </div>
            </div>
            </AnimatedDiv>
        </Section>
    )
}