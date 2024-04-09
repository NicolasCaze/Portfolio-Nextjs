import { About } from "./_components/About";
import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";

export default function Home() {
  return (
    <main>
      <Header/>
      <Hero />
      <About />
    </main>
  );
}
