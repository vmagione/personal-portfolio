import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#030014] text-white">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
