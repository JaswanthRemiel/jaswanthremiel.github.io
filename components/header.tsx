"use client";

import { motion } from "framer-motion";
import HyperText from "@/components/ui/hyper-text";
import Link from "next/link";
import Image from "next/image";
import * as links from "./details";
import { Newsreader } from "next/font/google";
import { LinksComponent } from "./linkscomponent";
import { Typewriter } from "./ui/typewriter";
import { InfiniteSliderBasic } from "./InfiniteSliderBasic";
import { AnimatedShinyText } from "./magicui/animated-shiny-text";
import { cn } from "@/lib/utils";
import { Alegreya } from "next/font/google";
import { Inter } from "next/font/google";
import ThemeToggle from "@/components/ui/dark-but";
import useTheme from "@/hooks/useTheme";
import { CloudSun } from "lucide-react";
import { Moon } from "lucide-react";

const Interf = Inter({
  subsets: ["latin"],
  weight: "500",
});
const alegreya = Alegreya({
  subsets: ["latin"],
});
const newsreader = Newsreader({ subsets: ["latin"], weight: ["300"] });

export function Header() {
  const { theme, toggleTheme } = useTheme();
  return (
    <motion.section
      className="overflow-x-auto pb-6 md:pb-0 md:overflow-x-visible"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex-col items-start space-y-4">
        <button
          onClick={toggleTheme}
          className="bg-orange-500 dark:text-white text-black px-2 py-0.75  font-sm inline-flex items-center space-x-1 font-semibold"
        >
          {theme === "light" ? "Light" : "Dark"}
        </button>
        <div className="whitespace-pre-wrap text-2xl font-sm">
          <p className="text-gray-100 dark:text-black">{"hi i'm remiel"}</p>
          <Typewriter
            text={[
              "a fullstack developer.",
              "a cracked designer.",
              "I build worlds.",
              "turning ideas alive.",
              "by day, code. by night, art.",
            ]}
            speed={70}
            className="text-orange-500"
            waitTime={1500}
            deleteSpeed={40}
            cursorChar={"_"}
          />
        </div>
        <div className="flex-col items-start space-y-2">
          <p
            className={`${Interf.className} text-gray-300 dark:text-gray-950 font-medium text-justify`}
          >
            where art meets code, I create digital experiences that captivate
            and empower, merging aesthetic brilliance with cutting-edge
            technology. Every pixel and line of code is a deliberate stroke,
            shaping intuitive solutions that resonate with users.
          </p>

          <p
            className={`${Interf.className} text-gray-300 dark:text-gray-950 font-medium  text-justify`}
          >
            as a Microsoft Learn Student Ambassador, I share my passion for
            technology and innovation through engaging content, inspiring a
            global community of creators on my channel,{" "}
            <Link
              href={links.youtube}
              className="underline text-gray-100 dark:text-gray-800 decoration-orange-600  "
            >
              remielgraphy
            </Link>
            .
          </p>

          <p
            className={`${Interf.className} text-gray-300 dark:text-gray-800 font-medium text-justify`}
          >
            checkout my{" "}
            <Link
              href={links.blog}
              target="_blank"
              className="underline decoration-orange-600 text-gray-100 dark:text-gray-800  "
            >
              blog
            </Link>{" "}
            ,{" "}
            <Link
              href={links.store}
              target="_blank"
              className="underline decoration-orange-600 text-gray-100 dark:text-gray-800  "
            >
              store
            </Link>
            , and{" "}
            <Link
              href={links.merch}
              target="_blank"
              className="underline decoration-orange-600 text-gray-100 dark:text-gray-800  "
            >
              merch
            </Link>
            .
          </p>
        </div>
      </div>
    </motion.section>
  );
}
