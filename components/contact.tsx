"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Contact() {
  return (
    <motion.section
      className="space-y-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <h2 className="font-medium">Contact</h2>
      <div className="space-y-6">
        <p className="text-gray-400">
          The best way to reach me is via email:
          <Link
            href="mailto:remiel.fyi?subject=Hi there!"
            className="group inline-flex items-center space-x-1 text-white hover:text-gray-300 transition-colors"
          >
            <br></br>
            <span className="underline">remiel@remiel.fyi</span>
            <motion.span className="inline-block" whileHover={{ x: 2 }}>
              →
            </motion.span>
          </Link>
        </p>
      </div>
    </motion.section>
  );
}
