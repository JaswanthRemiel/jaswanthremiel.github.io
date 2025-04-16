"use client";
import * as links from "./details";
import { motion } from "framer-motion";
import Link from "next/link";
import { Newsreader } from "next/font/google";
import { WritingColumn } from "./writingcolumn";
import { ArrowIcon } from "./ui/ArrowIcon";

import { Alegreya } from "next/font/google";
import { Inter } from "next/font/google";
const Interf = Inter({
  subsets: ["latin"],
  weight: "500",
});
const newsreader = Newsreader({
  subsets: ["latin"],
});
const alegreya = Alegreya({
  subsets: ["latin"],
});

export function Work() {
  return (
    <motion.section
      className="space-y-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="font-sm bg-orange-500 dark:text-white text-black px-2 py-0.75 inline-flex items-center space-x-1">
        <span className={`font-advercase `}>work</span>
        <ArrowIcon />
      </section>
      <div
        className={`${Interf.className} dark:text-gray-700 text-justify space-y-6 text-gray-300`}
      >
        <p>
          currently juggling multiple hats (figuratively—I don&apos;t own many
          hats), I&apos;m diving deep into tech as a PRISM intern at samsung r&d
          india, crafting AI-driven content moderation tools and learning
          something new every day. When not working on cutting-edge projects,
          I&apos;m busy building my personal brand and sharing my journey on{" "}
          <Link
            href={links.youtube}
            target="_blank"
            className="space-y-6 text-gray-100 dark:text-gray-800 underline decoration-orange-600 dark:decoration-orange-300"
          >
            Youtube
          </Link>{" "}
          and{" "}
          <Link
            href={links.twitter}
            target="_blank"
            className="space-y-6 text-gray-100 dark:text-gray-800 underline decoration-orange-600 dark:decoration-orange-300"
          >
            Twitter
          </Link>
          , if you&apos;re curious.
        </p>
      </div>
    </motion.section>
  );
}
