"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowIcon } from "./ArrowIcon";
import * as links from "./details";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import { Newsreader } from "next/font/google";

const newsreader = Newsreader({ subsets: ["latin"], weight: ["300"] });

export function Contact() {
  return (
    <motion.section
      className="space-y-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <div className="space-y-4">
        <h2 className="font-medium">contact</h2>
        <div className={`${newsreader.className} space-y-6 text-gray-100`}>
          <p className="text-gray-400">
            The best way to reach me is via email:
            <Link
              href="mailto:sayhi@remiel.fyi?subject=Hi there!"
              className="group inline-flex items-center space-x-1 text-white hover:text-gray-300 transition-colors"
            >
              <br></br>
              <span>sayhi@remiel.fyi</span>
            </Link>{" "}
            and{" "}
            <Link
              href={links.twitter}
              className="group inline-flex items-center space-x-1 text-white hover:text-gray-300 transition-colors"
            >
              <span>@jrxag_official</span>
            </Link>
          </p>
        </div>
        <div className="flex items-start">
          <Image
            src="/cat.gif"
            alt="Jaswanth Remiel Logo"
            width={40}
            height={40}
            className="mr-4"
          />
          <Button variant="outline">
            <Link href="/resume">Resume</Link>
          </Button>
        </div>
      </div>
    </motion.section>
  );
}
