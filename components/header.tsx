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

const newsreader = Newsreader({ subsets: ["latin"], weight: ["300"] });

export function Header() {
  return (
    <motion.header
      className="space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="z-6 flex items-center justify-left">
        <div
          className={cn(
            "group rounded-sm border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
          )}
        >
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span>
              <Link href={`${links.github}/jaswanthremiel.github.io`}>
                *under construction
              </Link>
            </span>
          </AnimatedShinyText>
        </div>
      </div>
      <div className="flex-col items-start space-y-5">
        <p className="whitespace-pre-wrap text-2xl font-sm">
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
            className="text-yellow-500"
            waitTime={1500}
            deleteSpeed={40}
            cursorChar={"_"}
          />
        </p>
        <p className={`${newsreader.className} text-gray-100 text-justify`}>
          where art meets code, I create digital experiences that captivate and
          empower, merging aesthetic brilliance with cutting-edge technology.
          Every pixel and line of code is a deliberate stroke, shaping intuitive
          solutions that resonate with users.
        </p>
        <p className={`${newsreader.className} text-gray-100 text-justify`}>
          as a Microsoft Learn Student Ambassador, I share my passion for
          technology and innovation through engaging content, inspiring a global
          community of creators on my channel,{" "}
          <Link
            href={links.youtube}
            className="underline text-gray-100 decoration-gray-100"
          >
            remielgraphy
          </Link>
          .
        </p>
        <p className={`${newsreader.className} text-justify`}>
          checkout my{" "}
          <Link
            href={links.blog}
            target="_blank"
            className="underline decoration-gray-400"
          >
            blog
          </Link>{" "}
          ,{" "}
          <Link
            href={links.store}
            target="_blank"
            className="underline decoration-gray-400"
          >
            store
          </Link>
          , and{" "}
          <Link
            href={links.merch}
            target="_blank"
            className="underline decoration-gray-400"
          >
            merch
          </Link>
          .
        </p>
        {/* <InfiniteSliderBasic /> */}
      </div>
    </motion.header>
  );
}
