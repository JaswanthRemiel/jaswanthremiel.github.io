"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ProjectItem } from "./projectitem";
import { ArrowIcon } from "./ArrowIcon";
import { Alegreya } from "next/font/google";
const alegreya = Alegreya({
  subsets: ["latin"],
});

export function Sections() {
  return (
    <motion.section
      className="overflow-x-auto pb-6 md:pb-0 md:overflow-x-visible space-x-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full ">
        <div className="w-full space-y-8">
          <section
            className={`${alegreya.className} bg-orange-500 text-black px-2 py-0.75  font-sm inline-flex items-center space-x-1 font-semibold`}
          >
            <span>writing</span>
            <ArrowIcon />
          </section>

          <div className="space-y-6 text-justify">
            <ProjectItem
              href="https://remiel.fyi/blog/deploying-nextjs-to-github-pages-use-github-actions-and-custom-domains"
              title="deploying Next.js to GitHub Pages: use GitHub Actions and Custom Domains"
              description="This comprehensive guide will explain every part of the workflow, ensuring you have a clear understanding of each step."
            />
            <ProjectItem
              href="https://remiel.fyi/blog/a-simple-guide-to-deploy-a-static-web-app-on-azure"
              title="a simple guide to deploy a static web app on azure"
              description="the most common mistakes and how you can avoid."
            />
            <ProjectItem
              href="https://remiel.fyi/blog/becomemlsa2024"
              title="becoming a microsoft learn student ambassador: your path to impact and growth"
              description="the microsoft learn student ambassador program is a prestigious global initiative that empowers students passionate about technology. "
            />
          </div>
        </div>
        <div className="w-full space-y-8">
          <section
            className={`${alegreya.className} bg-orange-500 text-black px-2 py-0.75  font-sm inline-flex items-center space-x-1 font-semibold`}
          >
            <span>some more ..</span>
          </section>
          <div className="space-y-6 text-justify">
            <ProjectItem
              href="https://uxplanet.org/must-have-design-resources-in-2023-part-1-fc3cbb5fcaf4"
              title="must-have design resources in 2023"
              description="we’ll explore some of the most important resources for graphic designers in 2022, as well as how you can use them to stay up-to-date and maximize your creative potential."
            />
            <ProjectItem
              href="https://medium.com/design-bootcamp/the-5-mistakes-that-ux-beginners-make-1c131598cff3"
              title="the 5 mistakes that ux beginners make"
              description="when I started out, it can be difficult to examine what are the most common mistakes and how you can avoid them in your own work. Here are the five biggest mistakes that UX beginners make."
            />
            <ProjectItem
              href="https://medium.com/design-bootcamp/my-top-10-favourite-fonts-of-2021-f8434adde25c"
              title="my top 5 favourite fonts of 2021"
              description="2021 is a tough year for all of us, ended peacefully and i’ve curated a list of my favourite fonts that i have used throughout the projects that i finished in the year 2021."
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
