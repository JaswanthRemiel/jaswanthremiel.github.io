import { Header } from "@/components/header";
import { WritingColumn } from "@/components/writingcolumn";
import { Work } from "@/components/work";
import { Contact } from "@/components/contact";
import { motion } from "framer-motion";
import Skills from "@/components/skills";
import Projects from "@/components/projects";

export default function Page() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <main className="flex-grow max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 py-16 space-y-10 w-full">
        <Header />
        <Projects />
        <Work />
        <WritingColumn />
        <Contact />
      </main>
    </div>
  );
}
