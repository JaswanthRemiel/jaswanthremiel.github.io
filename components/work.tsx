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
        className={`font-Innovator font-normal dark:text-black text-justify space-y-4 text-gray-300`}
      >
        <p className="lg:text-xl md:text-lg sm:text-lg  text-white dark:text-black text-justify">
          I, as a passionate and driven individual, actively contributed to
          impactful projects while fostering technical communities and honing my
          skills in web development, AI, and cloud technologies. Additionally,
          as a freelance designer, I’ve delivered high-quality solutions,
          earning over $500 QRR, and actively contributed to open-source
          projects like Appwrite during Hacktoberfest, showcasing my commitment
          to innovation and collaboration.
          <p>
            My collaborative efforts in the open-source community reflect my
            passion for innovation and creating value through technology. I'm
            passionate about designing digital experiences that make people say
            "wow" and building web applications more stable than a server after
            a reboot. My work experience includes leading projects at Samsung
            R&D India, contributing to impactful research at IIT Palakkad, and
            fostering technical communities as a Microsoft Learn Student
            Ambassador.
          </p>
        </p>
        <div id="work" className={`${Interf.className}`}>
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
