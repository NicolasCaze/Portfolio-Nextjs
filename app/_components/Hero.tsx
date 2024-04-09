import { ComputerIcon } from "./icons/ComputerIcon"
import { RocketIcon } from "./icons/RocketIcon"
import { Section } from "./Section"
import { ButtonEmail, ButtonGithub, ButtonLinkedin } from "./Buttons/ButtonLink"
export const Hero = () => {
    return (
        <Section className="gap-20 w-full mt-32 ml-20 pl-20">
            <div>
          <p className="text-primary text-5xl">Hey there!, I&apos;m- </p> 
           <h2 className="text-9xl tracking-tighter font-bold">Caze Nicolas. </h2> 
           <h2 className="text-neutral-400 text-4xl mt-8"><span className="text-primary">Web Junior Developer.</span> A self-taught developer with an <br />
            interest in Computer Science.</h2>
            <div className="flex items-center mt-10 text-2xl">
            <RocketIcon size={35} /><p>Explore the world of web development</p>
            </div>
            <div className="flex items-center mt-2 text-2xl">
            <ComputerIcon size={40} className="text-foreground"/><p>Currently specializing in <span className="text-primary">Back-end Development</span></p>
            </div>
            <div className="flex items-stretch mt-10">
                <ButtonGithub />
                <ButtonLinkedin/>
                <ButtonEmail />
            </div>
            </div>
            
        </Section>
    )
}