"use client";

import { motion } from "framer-motion";
import HyperText from "@/components/ui/hyper-text";
import Link from "next/link";
import Image from "next/image";
import * as links from "./details";
import { Newsreader } from "next/font/google";
import { LinksComponent } from "./linkscomponent";

const newsreader = Newsreader({ subsets: ["latin"], weight: ["300"] });

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

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
      {/* <LinksComponent /> */}
    </motion.header>
  );
}
