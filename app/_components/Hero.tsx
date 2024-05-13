"use client"
import { ComputerIcon } from "./icons/ComputerIcon"
import { RocketIcon } from "./icons/RocketIcon"
import { Section } from "./Section"
import { ButtonEmail, ButtonGithub, ButtonLinkedin } from "./Buttons/ButtonLink"
import { SvgDeco } from "./icons/SvgDeco"
import AnimatedDiv from "./Animations/Animation"
export const Hero = () => {
    return (
<Section className="px-4 py-4 lg:py-8 lg:px-8 lg:p-16">
      <AnimatedDiv className="">
        <div className="flex flex-col">
          <SvgDeco className="sm:block hidden absolute z-[-1] lg:h-auto lg:w-36 top-30s left-20" size={50} />
          <p className="text-2xl text-primary lg:text-5xl relative z-10">Hey there!, I&apos;m- </p>
          <div className="flex flex-col">
            <h2 className="text-4xl lg:text-9xl tracking-tighter font-bold">Caze Nicolas. </h2>
            <h2 className="whitespace-normal text-neutral-400 text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-8"><span className="text-primary">Junior Web Developer.</span><br className="hidden lg:inline" /><span className="pl-2">A self-taught developer with an interest in Computer Science.</span></h2>
          </div>
          <div className="flex items-start lg:items-center mt-8 text-2xl">
            <RocketIcon size={17} className="lg:h-[35px] lg:w-[35px]" />
            <p className="text-sm lg:text-xl">Exploring the world of web development</p>
          </div>
          <div className="flex items-center mt-2 text-2xl">
            <ComputerIcon size={20} className="lg:h-[40px] lg:w-[40px] text-foreground" />
            <p className="text-sm lg:text-xl">Currently specializing in <span className="text-primary">Back-end Development</span></p>
          </div>
          <div className="flex items-start lg:pb-16 lg:pt-6 lg:flex-row  lg:items-stretch mt-8">
            <ButtonGithub />
            <ButtonLinkedin />
            <ButtonEmail />
          </div>
        </div>
      </AnimatedDiv>
    </Section>
    )
}