"use client"
import { ComputerIcon } from "./icons/ComputerIcon"
import { RocketIcon } from "./icons/RocketIcon"
import { Section } from "./Section"
import { ButtonEmail, ButtonGithub, ButtonLinkedin } from "./Buttons/ButtonLink"
import { SvgDeco } from "./icons/SvgDeco"
import AnimatedDiv from "./Animations/Animation"
export const Hero = () => {
    return (
        <Section className="gap-20 w-full mt-20 ml-10 pl-10 lg:mt-32 lg:ml-20 lg:pl-20">
            <AnimatedDiv className="">
            <div className="flex items-start flex-col">
                <SvgDeco className="absolute z-[-1]    lg:h-auto lg:w-36 top-30s left-20" size={50}  />
          <p className="text-2xl text-primary lg:text-5xl relative z-10">Hey there!, I&apos;m- </p> 
           <h2 className="text-4xl lg:text-9xl tracking-tighter font-bold">Caze Nicolas. </h2> 
           <h2 className="text-neutral-400 text-xl lg:text-4xl mt-8"><span className="text-primary">Web Junior Developer.</span> A self-taught developer with an <br />
            interest in Computer Science.</h2>
            <div className="flex items-start lg:items-center mt-10 text-2xl">
            <RocketIcon size={17} className="lg:h-[35px] lg:w-[35px]" /><p className="text-sm lg:text-xl">Exploring the world of web development</p>
            </div>
            <div className="flex items-center mt-2 text-2xl">
            <ComputerIcon size={20} className="lg:h-[40px] lg:w-[40px] text-foreground"/><p className="text-sm lg:text-xl">Currently specializing in <span className="text-primary">Back-end Development</span></p>
            </div>
            <div className="flex items-start flex-col lg:flex-row gap-2 lg:items-stretch mt-10">
                <ButtonGithub />
                <ButtonLinkedin/>
                <ButtonEmail />
            </div>
            </div>
            </AnimatedDiv>
        </Section>
    )
}