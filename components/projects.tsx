"use client";

import { projects } from "./details";
import { motion } from "framer-motion";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Alegreya } from "next/font/google";
import { ArrowIcon } from "@/components/ArrowIcon";
const alegreya = Alegreya({
  subsets: ["latin"],
});

export default function Projects() {
  const [emblaRef] = useEmblaCarousel({
    loop: false,
    align: "start",
    containScroll: "keepSnaps",
  });

  return (
    <div className="w-full space-y-8">
      <motion.div
        className="space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <section
          className={` font-advercase bg-orange-500 dark:text-white text-black px-2 py-0.75  inline-flex items-center space-x-1 `}
        >
          <span>projects</span>
          <ArrowIcon />
        </section>
        <section className="overflow-hidden">
          <div className="embla" ref={emblaRef}>
            <div className="flex space-x-4">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="w-[280px] flex-shrink-0"
                  style={{ minWidth: "280px" }}
                >
                  <Link
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-md">
                      <div className="relative h-32 overflow-hidden">
                        <Image
                          src={project.imageUrl || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-300 hover:scale-105"
                          sizes="280px"
                          draggable="false"
                        />
                      </div>
                      <CardContent className="p-3">
                        <h3 className="text-base font-bold mb-1 line-clamp-1">
                          {project.title}
                        </h3>
                        <p className="text-xs text-muted-foreground line-clamp-2 mb-1">
                          {project.description}
                        </p>
                        <div className="text-xs text-primary font-medium">
                          View Project →
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
