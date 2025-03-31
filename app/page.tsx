import { Header } from "../components/header";
import { Sections } from "../components/sections";
import { Now } from "../components/now";
import { Contact } from "../components/contact";
import { Footer } from "../components/footer";
import { Navbar } from "@/components/navBar";
import { motion } from "framer-motion";
import { AppleCardsCarouselDemo } from "@/components/cards";

export default function Page() {
  return (
    <div className="flex flex-col  bg-[#1c1c1c] text-white">
      <main className="flex-grow max-w-5xl mx-auto px-12 sm:px-8 py-24 space-y-16 w-full">
        <Header />
        <Now />
        <Contact />
      </main>
    </div>
  );
}
