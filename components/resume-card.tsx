"use client";

import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Manrope } from "next/font/google";
const manrope = Manrope({
  subsets: ["latin"],
});

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
}

export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <Link
      href={href || "#"}
      className="block cursor-pointer"
      onClick={handleClick}
    >
      <Card className="flex flex-row items-start border border-gray-700 dark:border-gray-500 rounded-md p-3 mb-3">
        {/* Logo */}
        <div className="flex-shrink-0 mr-4 sm:hidden">
          <img
            src={logoUrl}
            alt={altText}
            className="w-[70px] h-[70px] object-contain rounded-full"
          />
        </div>

        {/* Content */}
        <div className="flex-grow">
          <CardHeader className="mb-1">
            <div className="flex items-center justify-between gap-x-2 text-base">
              {/* Title and Badges */}
              <div className="inline-flex items-center font-bold leading-none text-sm sm:text-base">
                {title}
                {badges && (
                  <span className="inline-flex gap-x-1 ml-2">
                    {badges.map((badge, index) => (
                      <span
                        key={index}
                        className="bg-gray-200 dark:bg-gray-700 text-xs px-1 py-0.5 rounded-sm ml-1"
                      >
                        {badge}
                      </span>
                    ))}
                  </span>
                )}
                <ChevronRightIcon
                  className={cn(
                    "size-4 ml-2 transition-transform duration-300 ease-in-out",
                    isExpanded ? "rotate-90" : "rotate-0"
                  )}
                />
              </div>
            </div>

            {/* Subtitle */}
            {subtitle && (
              <div
                className={` ${manrope.className} font-bold mt-1 font-mono text-sm sm:text-base text-gray-100 dark:text-orange-600`}
              >
                {subtitle}
              </div>
            )}

            {/* Expandable Description */}
            {description && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: isExpanded ? 1 : 0,
                  height: isExpanded ? "auto" : 0,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mt-2 text-sm sm:text-base text-gray-400 dark:text-gray-500"
              >
                {description}
              </motion.div>
            )}
          </CardHeader>
        </div>
      </Card>
    </Link>
  );
};
