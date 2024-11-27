import Link from "next/link";
import * as links from "./details";

export function Footer() {
  return (
    <footer className="mt-32 pb-16 px-1 sm:px-6">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <div className="flex space-x-6">
          <Link
            href={links.twitter}
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            Twitter
          </Link>
          <Link
            href={links.github}
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            GitHub
          </Link>
          <Link
            href={links.linkedin}
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            Linkedin
          </Link>
        </div>
        <div className="text-sm text-gray-400">
          © {new Date().getFullYear()} Paco Coursey
        </div>
      </div>
    </footer>
  );
}
