"use client";

import { motion } from "framer-motion";
import HyperText from "@/components/ui/hyper-text";
import Link from "next/link";
import Image from "next/image";
import * as links from "./details";
import { Newsreader } from "next/font/google";
import { LinksComponent } from "./linkscomponent";
import { Typewriter } from "./ui/typewriter";

const newsreader = Newsreader({ subsets: ["latin"], weight: ["300"] });

export function Header() {
  return (
    <motion.header
      className="space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <br></br>
      <h1>
        <p className="whitespace-pre-wrap font-sm">
          <span className="text-gray-400">{"hi i'm remiel, "}</span>
          <Typewriter
            text={[
              "Fullstack Developer",
              "Designer",
              "Youtuber",
              "creating things that make the world artistic",
            ]}
            speed={70}
            className="text-blue-800"
            waitTime={1500}
            deleteSpeed={40}
            cursorChar={"_"}
          />
        </p>
      </h1>
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
    </motion.header>
  );
}
