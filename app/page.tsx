import About from "@/components/About";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Image from "next/image";
import ProjectCard from "@/components/ui/ProjectCard";
import Skills from "@/components/Skills";
import { Testimonials } from "@/components/Testimonials";
import Contact from "@/components/Contact";

import { navItems } from "@/data";


export default function Home() {
  return (
    <main className="h-lvh bg-slate-950 text-white">
      <FloatingNav navItems={navItems} />
      <Hero />
      <About />
      <Skills />
      <ProjectCard />
      <Testimonials />
      <Contact />
    </main>
  );
}
