"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowIcon } from "./ArrowIcon";
import * as links from "./details";
import Image from "next/image";
import { Newsreader } from "next/font/google";
import { Button } from "@/components/ui/3d-button";
import { Alegreya } from "next/font/google";
const alegreya = Alegreya({
  subsets: ["latin"],
});
const newsreader = Newsreader({ subsets: ["latin"] });

export function Contact() {
  return (
    <motion.section
      className="space-y-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <div className="space-y-4">
        <p
          className={`${alegreya.className} bg-orange-500 text-black px-2 py-0.75  font-sm inline-flex items-center space-x-1 font-semibold`}
        >
          contact
        </p>
        <div
          className={`${newsreader.className} font-light space-y-6 text-gray-100`}
        >
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
      </div>
    </motion.section>
  );
}
