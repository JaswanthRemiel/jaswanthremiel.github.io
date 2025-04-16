export const linkedin = "https://www.linkedin.com/in/jaswanthremiel/";
export const twitter = "https://twitter.com/jrxag_official";
export const github = "https://github.com/jaswanthremiel";
export const youtube = "https://youtube.com/@remielgraphy";
export const blog = "./blog";
export const store = "./store";
export const merch = "https://merch.remiel.fyi";
export const preview =
  "https://raw.githubusercontent.com/JaswanthRemiel/jaswanthremiel.github.io/refs/heads/main/app/preview.png";

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}
export const projects: Project[] = [
  {
    id: "1",
    title: "AI-text-Summarizer",
    description:
      "AI Text Summarizer is a Node.js-based server-side rendering application designed to provide users with concise summaries of lengthy texts.",
    imageUrl: "/aisummarize.webp?height=400&width=600",
    projectUrl: "http://remiel.fyi/ai-summarizer",
  },
  {
    id: "2",
    title: "Batmode Chrome Web Extension",
    description:
      "Batmode is a Chrome extension that instantly enables dark mode across any website, giving your eyes the comfort they deserve.",
    imageUrl: "/batmode.webp?height=400&width=600",
    projectUrl: "http://remiel.fyi/batmode",
  },
  {
    id: "3",
    title: "CryptoCAT NFT",
    description:
      "CryptoCat NFT is a specialized Twitter bot with a paw firmly placed in the rapidly evolving world of Non-Fungible Tokens (NFTs).",
    imageUrl: "/cryptocat.webp?height=400&width=600",
    projectUrl: "http://remiel.fyi/cryptocat/",
  },
  {
    id: "4",
    title: "LinkDescrip AI",
    description:
      "LinkDescrip AI is a web application that helps users generate optimized LinkedIn headlines based on their professional bios.",
    imageUrl: "/linkdescrip.webp?height=400&width=600",
    projectUrl: "https://linkdescrip-ai.vercel.app/",
  },
  {
    id: "5",
    title: "Multimodal Classficition Web App using Hybrid Models",
    description:
      "A multimodal classification project combining text and image processing. Includes pre-trained models and a streamlined interface for inference.",
    imageUrl: "/multimodel.webp?height=400&width=600",
    projectUrl: "https://github.com/JaswanthRemiel/MultiModelClassification",
  },
];
