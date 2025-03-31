"use client";

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

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "AI-text-Summarizer",
    description:
      "AI Text Summarizer is a Node.js-based server-side rendering application designed to provide users with concise summaries of lengthy texts.",
    imageUrl: "/aisummarize.png?height=400&width=600",
    projectUrl: "http://remiel.fyi/ai-summarizer",
  },
  {
    id: "2",
    title: "Batmode Chrome Web Extension",
    description:
      "Batmode is a Chrome extension that instantly enables dark mode across any website, giving your eyes the comfort they deserve.",
    imageUrl: "/batmode.png?height=400&width=600",
    projectUrl: "https://github.com/JaswanthRemiel/batmode",
  },
  {
    id: "3",
    title: "CryptoCAT NFT",
    description:
      "CryptoCat NFT is a specialized Twitter bot with a paw firmly placed in the rapidly evolving world of Non-Fungible Tokens (NFTs).",
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

export default function ProjectCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: true });

  return (
    <div className="w-full space-y-8">
      <section
        className={`${alegreya.className} bg-orange-500 text-black px-2 py-0.75  font-sm inline-flex items-center space-x-1 font-semibold`}
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
    </div>
  );
}
