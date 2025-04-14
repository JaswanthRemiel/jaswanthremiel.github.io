import { Header } from "@/components/header";
import { WritingColumn } from "@/components/writingcolumn";
import { Work } from "@/components/work";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navBar";
import { motion } from "framer-motion";
import Skills from "@/components/skills";
import Projects from "@/components/projects";

export default function Page() {
  return (
    <div className="flex flex-col ">
      <main className="flex-grow max-w-7xl mx-auto px-12 sm:px-4 py-24 space-y-16 w-full">
        <Header />
        <Projects />
        <Work />
        <Skills />
        <WritingColumn />
        <Contact />
      </main>
    </div>
  );
}
