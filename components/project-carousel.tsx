"use client";

import type React from "react";
import { motion } from "framer-motion";
import { useState, type MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Alegreya } from "next/font/google";
import { ArrowIcon } from "./ArrowIcon";
const alegreya = Alegreya({
  subsets: ["latin"],
});

// Project type definition
interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

const sampleProjects: Project[] = [
  {
    id: "1",
    title: " AI-text-Summarizer",
    description:
      "AI Text Summarizer is a Node.js-based server-side rendering application designed to provide users with concise summaries of lengthy texts. Leveraging the advanced capabilities of Hugging Face's Facebook BART model, ",
    imageUrl: "/aisummarize.png?height=400&width=600",
    projectUrl: "http://remiel.fyi/ai-summarizer",
  },
  {
    id: "2",
    title: "Batmode Chrome Web Extension",
    description:
      "Batmode is a Chrome extension that instantly enables dark mode across any website, giving your eyes the comfort they deserve. With one click, transform your browsing experience and enjoy a sleek, modern, and eye-friendly dark theme.",
    imageUrl: "/batmode.png?height=400&width=600",
    projectUrl: "https://github.com/JaswanthRemiel/batmode",
  },
  {
    id: "3",
    title: "CryptoCAT NFT",
    description:
      "CryptoCat NFT is a specialized Twitter bot with a paw firmly placed in the rapidly evolving world of Non-Fungible Tokens (NFTs). Renowned for its swift and comprehensive coverage of the NFT landscape, CryptoCat NFT relies on the power of the OpenSea API through Rapid API.",
    imageUrl: "/cryptocat.png?height=400&width=600",
    projectUrl: "http://remiel.fyi/cryptocat/",
  },
  {
    id: "4",
    title: "LinkDescrip AI",
    description:
      "LinkDescrip AI is a web application that helps users generate optimized LinkedIn headlines based on their professional bios.",
    imageUrl: "/linkdescrip.png?height=400&width=600",
    projectUrl: "https://linkdescrip-ai.vercel.app/",
  },
];

interface ProjectCarouselProps {
  projects?: Project[];
}

export default function ProjectCarousel({
  projects = sampleProjects,
}: ProjectCarouselProps) {
  // Calculate how many projects to show per slide
  const projectsPerSlide = 3;

  // Calculate total number of slides
  const totalSlides = Math.ceil(projects.length / projectsPerSlide);

  const [currentSlide, setCurrentSlide] = useState(0);

  // Add these drag-related state variables
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);

  // Navigate to specific slide
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Remove the existing touch event handlers and replace with these drag handlers
  const handleDragStart = (
    e: MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    setIsDragging(true);

    // Get the starting position (either mouse or touch)
    if ("clientX" in e) {
      setStartPosition(e.clientX);
    } else {
      setStartPosition(e.touches[0].clientX);
    }

    setPrevTranslate(currentTranslate);
  };

  const handleDragMove = (
    e: MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    if (!isDragging) return;

    // Get current position (either mouse or touch)
    let currentPosition = 0;
    if ("clientX" in e) {
      currentPosition = e.clientX;
    } else {
      currentPosition = e.touches[0].clientX;
    }

    // Calculate how far we've dragged
    const diff = currentPosition - startPosition;
    setCurrentTranslate(prevTranslate + diff);
  };

  const handleDragEnd = () => {
    setIsDragging(false);

    // Calculate which slide to snap to based on drag distance
    const threshold = window.innerWidth * 0.15; // 15% of screen width
    const draggedSlides = Math.round(currentTranslate / threshold);

    let newSlide = currentSlide - Math.sign(draggedSlides);

    // Ensure we stay within bounds
    if (newSlide < 0) newSlide = 0;
    if (newSlide >= totalSlides) newSlide = totalSlides - 1;

    goToSlide(newSlide);
  };

  return (
    <motion.section
      className="overflow-x-auto pb-6 md:pb-0 md:overflow-x-visible"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="space-y-8">
        <div
          className={`${alegreya.className} bg-orange-500 text-black px-2 py-0.75 font-sm inline-flex items-center space-x-1 font-semibold`}
        >
          <span>projects</span>
          <ArrowIcon />
        </div>

        <div
          className="relative w-full overflow-hidden cursor-grab"
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
          style={{ touchAction: "pan-y" }}
        >
          <div className="relative">
            <div
              className={cn(
                "flex transition-transform duration-500 ease-out",
                isDragging ? "transition-none" : ""
              )}
              style={{
                transform: isDragging
                  ? `translateX(calc(-${
                      currentSlide * 100
                    }% + ${currentTranslate}px))`
                  : `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => {
                const slideProjects = projects.slice(
                  slideIndex * projectsPerSlide,
                  slideIndex * projectsPerSlide + projectsPerSlide
                );

                return (
                  <div key={slideIndex} className="w-full flex gap-4 px-1">
                    {slideProjects.map((project) => (
                      <div
                        className="w-[280px] h-auto flex-shrink-0"
                        key={project.id}
                        style={{ minWidth: "280px" }}
                      >
                        <Link
                          href={project.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block h-full"
                          onClick={(e) => isDragging && e.preventDefault()}
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
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
