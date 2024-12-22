import { Header } from "../components/header";
import { Sections } from "../components/sections";
import { Now } from "../components/now";
import { Contact } from "../components/contact";
import { Footer } from "../components/footer";
import { Navbar } from "@/components/navBar";
import TweetCard from "@/components/tweet-card";
import { motion } from "framer-motion";
import { AppleCardsCarouselDemo } from "@/components/cards";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-[#1c1c1c] text-white">
      <main className="flex-grow max-w-4xl mx-auto px-10 sm:px-6 py-20 space-y-12 w-full">
        <Header />
        <AppleCardsCarouselDemo />
        <Now />
        <Sections />
        <TweetCard />
        <Contact />
      </main>
    </div>
  );
}
