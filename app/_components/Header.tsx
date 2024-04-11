"use client"
import { buttonVariants } from "@/_components/ui/button";
import { Section } from "./Section"
import { cn } from "@/lib/utils"
import Link from "next/link"
import ToggleMode from "./ToggleMode";
import AnimatedDiv from "./Animations/Animation";

export const Header = () => {
    const navBorder = "border-b border-primary/";

    return (
        
        <header className={cn("top-0 ", navBorder)}>
            
            <Section className={cn("flex justify-between items-center")}>
                <AnimatedDiv>
                <h1 className="text-4xl  data-[text-white]: font-bold ml-6">
                    <span id="Home"className="text-gray-500">&#123;</span>
                    N
                    <span className="text-gray-500">&#125;</span>
                </h1>
                </AnimatedDiv>
                <AnimatedDiv>
                <ul className="flex items-center gap-6 p-5 m-1">
                    <li>
                        <Link
                            href="#Home"
                            className={cn(buttonVariants({ size: "sm" }), "m-0 text-lg")}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#Project"
                            className={cn(buttonVariants({ size: "sm" }), "m-0 text-lg")}
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#Contact"
                            className={cn(buttonVariants({ size: "sm" }), "m-0 text-lg")}
                        >
                            Contact
                        </Link>
                        
                    </li>
                    <li className={cn(({ size: "sm" }), "m-0 text-lg")}>
                        <ToggleMode />
                    </li>
                </ul>
                </AnimatedDiv>
            </Section>
        </header>
    )
}
