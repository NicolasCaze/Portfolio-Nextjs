"use client"
import { ButtonEmail, ButtonGithub, ButtonLinkedin, ButtonResume } from "./Buttons/ButtonLink"
import { Section } from "./Section"
import { motion } from "framer-motion"
import { fadeIn } from "./Animations/variants"
export const Contact = () => {
    return (
        <Section>
        <motion.div id="Contact" className="flex flex-col items-center justify-center mt-40"
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.7}}
        >
            <h2 className="text-4xl font-bold">Keep In Touch.</h2>
            <div className="flex flex-col items-center mt-5">
                <p>I am currently looking for an internship for <span className="text-primary">September 2024.</span></p>
                <p>Do not hesitate to contact me.</p>
                <div className="flex items-stretch mt-10 mb-20">
                    <ButtonLinkedin/>
                    <ButtonEmail />
                    <ButtonResume />
                </div>
            </div>
        </motion.div>
        </Section>
    )
}
