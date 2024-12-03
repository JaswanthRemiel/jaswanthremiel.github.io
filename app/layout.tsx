import { Inter } from "next/font/google";
import { Newsreader } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const newsreader = Newsreader({ subsets: ["latin"] });

export const metadata = {
  title: "Remiel — Portfolio",
  description: "Remiel's portfolio website built with Next.js",
  openGraph: {
    title: "Remiel — Portfolio",
    description: "Showcasing my work, projects, and achievements.",
    url: "https://remiel.fyi",
    images: [
      {
        url: "/app/preview.png", // Path to your preview image
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
    images: ["/app/preview.png"], // Path to your preview image
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>{/* Add any custom global metadata here if necessary */}</head>
      <body className={`${inter.className} bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
