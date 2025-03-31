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
const Interf = Inter({
  subsets: ["latin"],
});
const alegreya = Alegreya({
  subsets: ["latin"],
});
const newsreader = Newsreader({ subsets: ["latin"], weight: ["300"] });

export function Header() {
  return (
    <motion.section
      className="overflow-x-auto pb-6 md:pb-0 md:overflow-x-visible"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex-col items-start space-y-5">
        <img src="./Vector.svg" alt="porto logo" className="h-[45px] w-auto" />
        <div className="whitespace-pre-wrap text-2xl font-sm">
          <p className="text-gray-100">{"hi i'm remiel"}</p>
          <Typewriter
            text={[
              "a fullstack developer from india.",
              "a cracked designer.",
              "crafting art through code, design, and sound.",
              "a creator shaping digital and sonic worlds.",
              "designing, coding, and composing the extraordinary.",
              "blending tech, art, and rhythm into one.",
              "building, designing, and making waves.",
              "turning imagination into digital reality.",
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
            className={`${Interf.className} text-gray-300 font-medium text-justify`}
          >
            where art meets code, I create digital experiences that captivate
            and empower, merging aesthetic brilliance with cutting-edge
            technology. Every pixel and line of code is a deliberate stroke,
            shaping intuitive solutions that resonate with users.
          </p>

          <p
            className={`${Interf.className} text-gray-300 font-medium  text-justify`}
          >
            as a Microsoft Learn Student Ambassador, I share my passion for
            technology and innovation through engaging content, inspiring a
            global community of creators on my channel,{" "}
            <Link
              href={links.youtube}
              className="underline text-gray-100 decoration-orange-600  "
            >
              remielgraphy
            </Link>
            .
          </p>

          <p
            className={`${Interf.className} text-gray-300 font-medium text-justify`}
          >
            checkout my{" "}
            <Link
              href={links.blog}
              target="_blank"
              className="underline decoration-orange-600 text-gray-100  "
            >
              blog
            </Link>{" "}
            ,{" "}
            <Link
              href={links.store}
              target="_blank"
              className="underline decoration-orange-600 text-gray-100  "
            >
              store
            </Link>
            , and{" "}
            <Link
              href={links.merch}
              target="_blank"
              className="underline decoration-orange-600 text-gray-100  "
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
