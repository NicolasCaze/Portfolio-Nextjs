import { About } from "./_components/About";
import { Contact } from "./_components/Contact";
import { Footer } from "./_components/Footer";
import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Projects } from "./_components/ProjectSection";
import { Skills } from "./_components/Skills";

export default function Home() {
  return (
    <main>
      <Header/>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
