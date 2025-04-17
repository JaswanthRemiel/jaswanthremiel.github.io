"use client";
import Image from "next/image";
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
const newsreader = Newsreader({ subsets: ["latin"] });

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.section
      className="overflow-x-auto pb-6 md:pb-0 md:overflow-x-visible "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Parent Container */}
      <div className="flex-col items-start space-y-6 ">
        <div>
          <Image
            src="/profile.webp"
            width={65}
            height={65}
            alt="Picture of the legend"
            className="rounded-xl dark:border dark:border-orange-200 dark:border-opacity-40"
          />
        </div>

        {/* Main Content */}
        <div className="whitespace-pre-wrap text-2xl font-sm">
          <div className="relative">
            <button
              onClick={toggleTheme}
              className={`${alegreya.className} absolute right-0 top-4 dark:text-black text-white`}
            >
              <span>
                {theme === "light" ? (
                  <Lightbulb className="w-5 h-5" />
                ) : (
                  <LightbulbOff className="w-5 h-5" />
                )}
              </span>
            </button>
          </div>
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
            className={` ${Interf.className} lg:text-xl md:text-lg sm:text-lg font-medium text-gray-300 dark:text-black text-justify  `}
          >
            I fuse art and technology to craft immersive digital experiences,
            where every pixel and line of code is a deliberate stroke of
            creativity, delivering intuitive solutions that inspire and empower
            users; as a microsoft learn student ambassador, i channel my passion
            for innovation into engaging content on{" "}
            <Link
              href={links.youtube}
              className=" decoration-orange-600 dark:text-orange-600 text-orange-400"
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
