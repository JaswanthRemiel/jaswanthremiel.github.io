"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Alegreya } from "next/font/google";
import { Inter } from "next/font/google";
import { SpinningText } from "@/components/ui/spinning-text";

const alegreya = Alegreya({ subsets: ["latin"] });
const Interf = Inter({ subsets: ["latin"] });

export function Contact() {
  return (
    <motion.section
      className="relative flex items-center justify-between space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      {/* Left Section: Contact Info */}
      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-4">
          <p
            className={`${alegreya.className} bg-orange-500 text-black px-2 py-1 font-medium inline-flex items-center space-x-1`}
          >
            contact
          </p>
        </div>

        {/* Main Content */}
        <div
          className={`${Interf.className} font-light space-y-4 text-gray-400`}
        >
          <p>
            Mail me at{" "}
            <Link
              href="mailto:sayhi@remiel.fyi?subject=Hi there!"
              className="group inline-flex items-center space-x-1 text-white hover:text-gray-300 transition-colors ml-1"
            >
              <span>sayhi@remiel.fyi</span>
            </Link>
            .
          </p>

          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            <SocialLink
              href="https://linkedin.com/in/jaswanthremiel"
              label="Linkedin"
              iconPath="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
              onHover="hover:text-blue-400"
            />
            <SocialLink
              href="https://github.com/jaswanthremiel"
              label="Github"
              iconPath="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
              onHover="hover:text-white"
            />
            <SocialLink
              href="https://behance.net/jaswanthremiel"
              label="Behance"
              iconPath="M4.654 3c.461 0 .887.035 1.278.14.39.07.711.216.996.391s.497.426.641.747c.14.32.216.711.216 1.137 0 .496-.106.922-.356 1.242-.215.32-.566.606-.997.817.606.176 1.067.496 1.348.922s.461.957.461 1.563c0 .496-.105.922-.285 1.278a2.3 2.3 0 0 1-.782.887c-.32.215-.711.39-1.137.496a5.3 5.3 0 0 1-1.278.176L0 12.803V3zm-.285 3.978c.39 0 .71-.105.957-.285.246-.18.355-.497.355-.887 0-.216-.035-.426-.105-.567a1 1 0 0 0-.32-.355 1.8 1.8 0 0 0-.461-.176c-.176-.035-.356-.035-.567-.035H2.17v2.31c0-.005 2.2-.005 2.2-.005zm.105 4.193c.215 0 .426-.035.606-.07.176-.035.356-.106.496-.216s.25-.215.356-.39c.07-.176.14-.391.14-.641 0-.496-.14-.852-.426-1.102-.285-.215-.676-.32-1.137-.32H2.17v2.734h2.305zm6.858-.035q.428.427 1.278.426c.39 0 .746-.106 1.032-.286q.426-.32.53-.64h1.74c-.286.851-.712 1.457-1.278 1.848-.566.355-1.243.566-2.06.566a4.1 4.1 0 0 1-1.527-.285 2.8 2.8 0 0 1-1.137-.782 2.85 2.85 0 0 1-.712-1.172c-.175-.461-.25-.957-.25-1.528 0-.531.07-1.032.25-1.493.18-.46.426-.852.747-1.207.32-.32.711-.606 1.137-.782a4 4 0 0 1 1.493-.285c.606 0 1.137.105 1.598.355.46.25.817.532 1.102.958.285.39.496.851.641 1.348.07.496.105.996.07 1.563h-5.15c0 .58.21 1.11.496 1.396m2.24-3.732c-.25-.25-.642-.391-1.103-.391-.32 0-.566.07-.781.176s-.356.25-.496.39a.96.96 0 0 0-.25.497c-.036.175-.07.32-.07.46h3.196c-.07-.526-.25-.882-.497-1.132zm-3.127-3.728h3.978v.957h-3.978z"
              onHover="hover:text-blue-600"
            />
            <SocialLink
              href="https://x.com/jrxag_official"
              label="Twitter"
              iconPath="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"
              onHover="hover:text-blue-400"
            />
          </div>
        </div>
      </div>

      <div className="absolute right-0  transform -translate-y-1/2">
        <SpinningText
          radius={5}
          fontSize={1.2}
          className="font-medium leading-none text-orange-500"
        >
          {`sayonara • sayonara • sayonara • `}
        </SpinningText>
      </div>
    </motion.section>
  );
}

function SocialLink({
  href,
  label,
  iconPath,
  onHover,
}: {
  href: string;
  label: string;
  iconPath: string;
  onHover: string;
}): JSX.Element {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-gray-400 transition-colors ${onHover} duration-300`}
      aria-label={label}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d={iconPath} />
      </svg>
    </Link>
  );
}
