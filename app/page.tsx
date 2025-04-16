import { Header } from "@/components/header";
import { WritingColumn } from "@/components/writingcolumn";
import { Work } from "@/components/work";
import { Contact } from "@/components/contact";
import { motion } from "framer-motion";
import Skills from "@/components/skills";
import Projects from "@/components/projects";

export default function Page() {
  return (
    <div className="relative flex flex-col min-h-screen sm:mx-10">
      <main className="flex-grow max-w-7xl mx-auto px-12 sm:px-0.75 py-24 space-y-10 w-full">
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
