"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ProjectItem } from "./projectitem";

export function Sections() {
  return (
    <motion.section
      className="overflow-x-auto pb-6 md:pb-0 md:overflow-x-visible"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex gap-0.2 w-[180%] md:w-full">
        <div className="w-full space-y-8">
          <h2 className="font-sm text-gray-400">projects</h2>
          <div className="space-y-6">
            <div>
              <Link
                href="https://remiel.fyi/batmode/"
                className="group inline-flex items-center space-x-1 text-white hover:text-gray-300 transition-colors"
              >
                <span>batmode extension</span>
                <motion.span
                  className="inline-block opacity-50"
                  whileHover={{ x: 2 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3 ml-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 19L19 5M5 5h14v14"
                    />
                  </svg>
                </motion.span>
              </Link>
              <p className="text-sm font-mono text-gray-400 mt-1">
                dark mode across any website.
              </p>
            </div>
            <div>
              <Link
                href="https://remiel.fyi/ai-summarizer/"
                className="group inline-flex items-center space-x-1 text-white hover:text-gray-300 transition-colors"
              >
                <span>ai text summarizer</span>
                <motion.span
                  className="inline-block opacity-50"
                  whileHover={{ x: 2 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3 ml-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 19L19 5M5 5h14v14"
                    />
                  </svg>
                </motion.span>
              </Link>
              <p className="text-sm font-mono text-gray-400 mt-1">
                powered by facebook BART model.
              </p>
            </div>
            <div>
              <Link
                href="https://remiel.fyi/cryptocat"
                className="group inline-flex items-center space-x-1 text-white hover:text-gray-300 transition-colors"
              >
                <span>cryptocat nft</span>
                <motion.span
                  className="inline-block opacity-50"
                  whileHover={{ x: 2 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3 ml-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 19L19 5M5 5h14v14"
                    />
                  </svg>
                </motion.span>
              </Link>
              <p className="text-sm font-mono text-gray-400 mt-1">
                twitter bot with a paw firmly placed in the rapidly evolving
                world of non-fungible tokens (NFTs)
              </p>
            </div>
          </div>
        </div>
        <div className="w-full space-y-8">
          <h2 className="font-sm text-gray-400">writing</h2>
          <div className="space-y-6">
            <ProjectItem
              href="https://uxplanet.org/must-have-design-resources-in-2023-part-1-fc3cbb5fcaf4"
              title="must-have design resources in 2023"
              description="most important resources for graphic designer"
            />
            <ProjectItem
              href="https://medium.com/design-bootcamp/the-5-mistakes-that-ux-beginners-make-1c131598cff3"
              title="the 5 mistakes that ux beginners make"
              description="the most common mistakes and how you can avoid."
            />
            <ProjectItem
              href="https://medium.com/design-bootcamp/my-top-10-favourite-fonts-of-2021-f8434adde25c"
              title="my top 5 favourite fonts of 2021"
              description="fonts are a great way to liven up your projects."
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
