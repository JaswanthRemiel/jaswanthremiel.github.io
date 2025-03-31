"use client";
import * as links from "./details";
import { motion } from "framer-motion";
import Link from "next/link";
import { Newsreader } from "next/font/google";
import { Sections } from "./sections";
import { ArrowIcon } from "./ArrowIcon";

const newsreader = Newsreader({ subsets: ["latin"], weight: ["300"] });

export function Now() {
  return (
    <motion.section
      className="space-y-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <section
        className={`${newsreader.className} font-sm bg-black text-white px-2 py-1  font-sm inline-flex items-center space-x-1 `}
      >
        <p>now</p>
      </section>
      <div
        className={`${newsreader.className} text-justify space-y-6 text-gray-100`}
      >
        <p>
          Currently juggling multiple hats (figuratively—I don&apos;t own many
          hats), I&apos;m diving deep into tech as a PRISM intern at Samsung R&D
          India, crafting AI-driven content moderation tools and learning
          something new every day. When not working on cutting-edge projects,
          I&apos;m busy building my personal brand and sharing my journey on{" "}
          <Link
            href={links.youtube}
            target="_blank"
            className="space-y-6 text-gray-100 underline decoration-gray-100"
          >
            Youtube
          </Link>{" "}
          and{" "}
          <Link
            href={links.twitter}
            target="_blank"
            className="space-y-6 text-gray-100 underline decoration-gray-100"
          >
            Twitter
          </Link>
          , if you&apos;re curious.
        </p>
        <p>
          Between debugging code and brainstorming the next viral tweet or
          video, I like to keep things fun. Exploring content creation and
          storytelling has become a creative outlet, letting me connect with an
          amazing community while showcasing my passion for design, tech, and
          sometimes the occasional gaming session.
        </p>
        <Sections />
      </div>
    </motion.section>
  );
}
