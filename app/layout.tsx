import { Inter } from "next/font/google";
import * as links from "@/components/details";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Remiel — Portfolio",
  description:
    "Explore Remiel's portfolio showcasing projects, achievements, and expertise in tech, built with Next.js for a seamless experience.",
  openGraph: {
    title: "Remiel — Portfolio",
    description: "Showcasing my work, projects, and achievements.",
    url: "https://remiel.fyi",
    images: [
      {
        url: links.preview,
        width: 1200,
        height: 630,
        alt: "Remiel's Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Remiel — Portfolio",
    description: "Showcasing my work, projects, and achievements.",
    images: [links.preview],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <head></head>
      <body
        className={`${inter.className} bg-black text-white antialiased dark:bg-stone-100 dark:text-black`}
      >
        {children}
      </body>
    </html>
  );
}
