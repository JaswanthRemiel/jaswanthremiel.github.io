"use client";

import { motion } from "framer-motion";
import HyperText from "@/components/ui/hyper-text";
import Link from "next/link";
import Image from "next/image";
import * as links from "./details";
import { FlipWords } from "./ui/flip-words";
import { Newsreader } from "next/font/google";

const newsreader = Newsreader({ subsets: ["latin"], weight: ["300"] });

const words = [
  "fullstack developer.",
  "content creator.",
  "graphic designer.",
  "gamer.",
];

export function Header() {
  return (
    <motion.header
      className="space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo */}
      <div className="flex items-start">
        <Image
          src="https://raw.githubusercontent.com/JaswanthRemiel/nextsam/refs/heads/main/public/logo.png"
          alt="Jaswanth Remiel Logo"
          width={40}
          height={40}
          className="mr-4"
        />
      </div>
      <br></br>

      {/* Description */}
      <h1>
        <span>
          Jaswanth Remiel
          {/* <FlipWords words={words} /> <br /> */}
        </span>
      </h1>
      <p className={`${newsreader.className} text-gray-100`}>
        where art meets code, I create digital experiences that captivate and
        empower, merging aesthetic brilliance with cutting-edge technology.
        Every pixel and line of code is a deliberate stroke, shaping intuitive
        solutions that resonate with users.
      </p>
      <p className={`${newsreader.className} text-gray-100`}>
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
    </motion.header>
  );
}
