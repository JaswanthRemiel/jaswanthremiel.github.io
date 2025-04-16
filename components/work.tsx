"use client";
import * as links from "./details";
import { DATA } from "./DATA";
import { motion } from "framer-motion";
import Link from "next/link";
import { Newsreader } from "next/font/google";
import { WritingColumn } from "./writingcolumn";
import { ArrowIcon } from "./ui/ArrowIcon";
import { Manrope } from "next/font/google";
import { Alegreya } from "next/font/google";
import { Inter } from "next/font/google";
import { ResumeCard } from "./resume-card";
const manrope = Manrope({
  subsets: ["latin"],
});
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
        className={`${manrope.className} font-semibold dark:text-black text-justify space-y-6 text-gray-300`}
      >
        <div id="work" className={`${manrope.className}`}>
          {DATA.work.map((work, id) => (
            <ResumeCard
              key={work.company}
              logoUrl={work.logoUrl}
              altText={work.company}
              title={work.company}
              subtitle={work.title}
              href={work.href}
              period={`${work.start} - ${work.end ?? "Present"}`}
              description={work.description}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
