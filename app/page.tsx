import { Header } from "../components/header";
import { Sections } from "../components/sections";
import { Now } from "../components/now";
import { Contact } from "../components/contact";
import { Footer } from "../components/footer";
import { Navbar } from "@/components/navBar";
import { motion } from "framer-motion";
import InfiniteSliderBasic from "@/components/infiniteslider";
import ProjectCarousel from "@/components/project-carousel";

export default function Page() {
  return (
    <div className="flex flex-col  bg-[#000000]">
      <main className="flex-grow max-w-7xl mx-auto px-12 sm:px-4 py-24 space-y-16 w-full">
        <Header />
        <ProjectCarousel />
        <Now />
        <InfiniteSliderBasic />
        <Sections />
        <Contact />
      </main>
    </div>
  );
}
