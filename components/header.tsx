"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import * as links from "./details";
import { Newsreader } from "next/font/google";
import { Typewriter } from "./ui/typewriter";
import { Alegreya } from "next/font/google";
import { Inter } from "next/font/google";
import { Manrope } from "next/font/google";
import ThemeToggle from "@/components/ui/dark-but";
import useTheme from "@/hooks/useTheme";
import { Lightbulb, LightbulbOff } from "lucide-react";

const manrope = Manrope({
  subsets: ["latin"],
});
const Interf = Inter({
  subsets: ["latin"],
});
const alegreya = Alegreya({
  subsets: ["latin"],
});
const newsreader = Newsreader({ subsets: ["latin"], weight: ["300"] });

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.section
      className="overflow-x-auto pb-6 md:pb-0 md:overflow-x-visible relative" // Added `relative` to make it the reference for absolute positioning
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Parent Container */}
      <div className="flex-col items-start space-y-4 relative">
        {" "}
        <div>
          <button
            onClick={toggleTheme}
            className={`${alegreya.className} bg-orange-500 dark:bg-orange-500 dark:text-white text-black px-1 py-0.75  inline-flex items-center space-x-2`}
          >
            <span className="text-sm font-semibold">
              {theme === "light" ? "Light Mode" : "Dark Mode"}
            </span>
          </button>
        </div>
        {/* Main Content */}
        <div className="whitespace-pre-wrap text-2xl font-sm">
          <p className="font-advercase text-gray-100 dark:text-black">
            {"Howdy, Remiel here."}
          </p>
          <Typewriter
            text={[
              "a fullstack developer.",
              "a cracked designer.",
              "I build worlds.",
              "turning ideas alive.",
            ]}
            speed={70}
            className="font-advercase font-extralight text-orange-500"
            waitTime={1500}
            deleteSpeed={40}
            cursorChar={"_"}
          />
        </div>
        <div className="flex-col items-start">
          <p
            className={` ${manrope.className}  font-semibold text-gray-300 dark:text-black text-justify  `}
          >
            I fuse art and technology to craft immersive digital experiences,
            where every pixel and line of code is a deliberate stroke of
            creativity, delivering intuitive solutions that inspire and empower
            users; as a microsoft learn student ambassador, i channel my passion
            for innovation into engaging content on{" "}
            <Link
              href={links.youtube}
              className=" decoration-orange-600 dark:text-orange-600"
              target="_blank"
            >
              remielgraphy
            </Link>
            , sparking curiosity and empowering a global community of creators.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
