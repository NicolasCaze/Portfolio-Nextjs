import { Section } from "./Section"

export const Footer = () => {
    return (
        <Section>
        <div className="w-full flex justify-center flex-col items-center mb-4">
        <p className="text-sm   ">Developed by Caze Nicolas. </p>
        <p>Built with <span className="text-primary">Next.js</span> & <span className="text-primary">Shadcn</span>. Hosted on <span className="text-primary">Vercel</span>.</p>
        </div>
        </Section>
    )
}