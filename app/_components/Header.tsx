import { buttonVariants } from "@/_components/ui/button";
import { Section } from "./Section"
import { cn } from "@/lib/utils"
import Link from "next/link"
import ToggleMode from "./ToggleMode";

export const Header = () => {
    const navBorder = "border-b border-primary/";

    return (
        <header className={cn("top-0 ", navBorder)}>
            <Section className={cn("flex justify-between items-center")}>
                <h1 className="text-4xl  data-[text-white]: font-bold ml-6">
                    <span className="text-gray-500">&#123;</span>
                    N
                    <span className="text-gray-500">&#125;</span>
                </h1>
                <ul className="flex items-center gap-6 p-5 m-1">
                    <li>
                        <Link
                            href="/"
                            className={cn(buttonVariants({ size: "sm" }), "m-0 text-lg")}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/Projects"
                            className={cn(buttonVariants({ size: "sm" }), "m-0 text-lg")}
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/#"
                            className={cn(buttonVariants({ size: "sm" }), "m-0 text-lg")}
                        >
                            Contact
                        </Link>
                        
                    </li>
                    <li className={cn(({ size: "sm" }), "m-0 text-lg")}>
                        <ToggleMode />
                    </li>
                </ul>
            </Section>
        </header>
    )
}
