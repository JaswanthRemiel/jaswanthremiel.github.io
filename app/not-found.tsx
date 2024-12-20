import Link from "next/link";
import { motion } from "framer-motion";
import * as links from "../components/details";

export default function NotFound() {
  return (
    <div className="justify-center">
      <h2 className="font-medium">Contact</h2>
      <div className="space-y-6">
        <p className="text-gray-400">
          The best way to reach me is via email:
          <Link
            href="mailto:sayhi@remiel.fyi?subject=Hi there!"
            className="group inline-flex items-center space-x-1 text-white hover:text-gray-300 transition-colors"
          >
            <br></br>
            <span>sayhi@remiel.fyi</span>
          </Link>{" "}
          and{" "}
          <Link
            href={links.twitter}
            className="group inline-flex items-center space-x-1 text-white hover:text-gray-300 transition-colors"
          >
            <span>@jrxag_official</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
