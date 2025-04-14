"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import * as links from "./details";
import { Newsreader } from "next/font/google";
import { Typewriter } from "./ui/typewriter";
import { Alegreya } from "next/font/google";
import { Inter } from "next/font/google";
import ThemeToggle from "@/components/ui/dark-but";
import useTheme from "@/hooks/useTheme";
import { Lightbulb, LightbulbOff } from "lucide-react";

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
        <div className="flex items-center justify-between">
          <div className="whitespace-pre-wrap text-2xl font-sm">
            <p className="text-gray-100 dark:text-black ">{"hi i'm remiel"}</p>
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
          <div className="ml-auto">
            <button
              onClick={toggleTheme}
              className="text-gray-500 dark:text-orange-600"
            >
              {theme === "light" ? <Lightbulb /> : <LightbulbOff />}
            </button>
          </div>
        </div>

        <div className="flex-col items-start space-y-2">
          <p
            className={`${Interf.className}  text-gray-300 dark:text-gray-700 font-medium text-justify`}
          >
            I fuse art and technology to craft immersive digital experiences,
            where every pixel and line of code is a deliberate stroke of
            creativity, delivering intuitive solutions that inspire and empower
            users; as a microsoft learn student ambassador, i channel my passion
            for innovation into engaging content on{" "}
            <Link
              href={links.youtube}
              className="underline decoration-orange-600 dark:text-black"
              target="_blank"
            >
              remielgraphy
            </Link>
            , sparking curiosity and empowering a global community of creators.
          </p>

          <p
            className={`${Interf.className} text-gray-300 dark:text-gray-700 font-medium text-justify`}
          >
            checkout my{" "}
            <Link
              href={links.blog}
              target="_blank"
              className="underline decoration-orange-600 text-gray-100 dark:text-black  "
            >
              blog
            </Link>{" "}
            ,{" "}
            <Link
              href={links.store}
              target="_blank"
              className="underline decoration-orange-600 text-gray-100 dark:text-black  "
            >
              store
            </Link>
            , and{" "}
            <Link
              href={links.merch}
              target="_blank"
              className="underline decoration-orange-600 text-gray-100 dark:text-black  "
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
