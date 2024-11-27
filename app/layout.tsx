import { Inter } from "next/font/google";
import { Newsreader } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const newsreader = Newsreader({ subsets: ["latin"] });

export const metadata = {
  title: "Remiel — Portfolio",
  description: "Remiel's portfolio website built with Next.js",
};

export const viewport = {
  themeColor: [
    { color: "#1c1c1c", media: "(prefers-color-scheme: dark)" },
    { color: "#ffffff", media: "(prefers-color-scheme: light)" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
