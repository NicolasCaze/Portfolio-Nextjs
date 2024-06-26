"use client"
import { useRef, useState } from "react";
import { ProjectCard } from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { Section } from "./Section"
import Link from "next/link"
import { motion, useInView } from "framer-motion";
import ScrollAnimation from "./Animations/ScrollAnimation";
import { fadeIn } from "./Animations/variants";


const projectsData = [
  {
    id: 1,
    title: "3rd year Bachelor Project",
    description: "I created a website for a restaurant using symfony. (Not finished)",
    image: "/restaurant.png",
    gitUrl: "https://github.com/NicolasCaze/projetdc3",
    tag: ["All", "Web"],
    previewUrl: "#",
  },
  {
    id: 2,
    title: "Weather App",
    description: "Weather App with react ",
    image: "/weather.png",
    gitUrl: "https://github.com/NicolasCaze/Weather-App",
    tag: ["All", "Web"],
    previewUrl: "https://weather-app-nu-dun-60.vercel.app/",
  },
  {
    id: 3,
    title: "Blog NextJs",
    description: "Personal project",
    image: "/nextblog.png",
    gitUrl: "https://github.com/NicolasCaze/NextBlog",
    tag: ["All", "Web"],
    previewUrl: "https://next-blog-n.vercel.app/",
  },
  {
    id: 4,
    title: "Slider React",
    description: "Slider Image ReactJS",
    image: "/Slider.png",
    gitUrl: "https://github.com/NicolasCaze/Slider-React",
    tag: ["All", "Web"],
    previewUrl: "https://slider-react-one.vercel.app/",
  },
];




  export const Projects = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });


  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

   
    return (
      <Section className="pt-10 lg:p-16">
        <motion.div className="mb-3"
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.7}}
        >
        
        <h2 id="Project" className="ml-2 text-3xl font-bold mb-1">All creative works</h2>
        <p className="text-neutral-400 text-1 text-lg mb-1 ml-2">Here&apos;s some of my projects that i have wordked on.</p>
        <Link 
        href="https://github.com/NicolasCaze"
        className="text-primary ml-2 text-2xl mb-1"
        > Explore more →
            </Link>
        </motion.div>
        <div className="text-white flex flex-row items-center justify-center lg:justify-center lg:items-center gap-2  py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
      </Section>
    );
  };

