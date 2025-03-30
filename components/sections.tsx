"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ProjectItem } from "./projectitem";
import { ArrowIcon } from "./ArrowIcon";

export function Sections() {
  return (
    <motion.section
      className="overflow-x-auto pb-6 md:pb-0 md:overflow-x-visible"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full ">
        <div className="w-full space-y-8">
          <section className="bg-black text-white px-2 py-1 text-sm font-sm inline-flex items-center space-x-1">
            <span>projects</span>
            <ArrowIcon />
          </section>

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
        <div className="w-full space-y-8">
          <section className="bg-black text-white px-2 py-1 text-sm font-sm inline-flex items-center space-x-1">
            <span>writing</span>
            <ArrowIcon />
          </section>
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
