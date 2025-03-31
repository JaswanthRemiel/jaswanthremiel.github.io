"use client";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { motion } from "framer-motion";

export default function InfiniteSliderBasic() {
  return (
    <div className="flex-col justify space-y-5">
      <motion.section
        className="space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <InfiniteSlider
          gap={40}
          speed={55}
          speedOnHover={90}
          className="w-full h-full"
        >
          <img
            src="/nextjs.jpeg"
            alt="NEXT.js logo"
            className="h-[55px] w-auto"
          />
          <img
            src="/reactjs.jpeg"
            alt="REACT.js logo"
            className="h-[55px] w-auto"
          />
          <img
            src="/TailwindCSS.png"
            alt="TailwindCSS logo"
            className="h-[55px] w-auto"
          />
          <img
            src="/typescript.png"
            alt="TypeScript logo"
            className="h-[55px] w-auto"
          />
          <img
            src="/nodejs.png"
            alt="Node.js logo"
            className="h-[55px] w-auto"
          />
          <img
            src="/vercel.png"
            alt="Vercel logo"
            className="h-[55px] w-auto"
          />
          <img src="/aws.png" alt="AWS logo" className="h-[55px] w-auto" />
          <img
            src="/appwrite.png"
            alt="Appwrite logo"
            className="h-[55px] w-auto"
          />
          <img
            src="/github.png"
            alt="GitHub logo"
            className="h-[55px] w-auto"
          />
        </InfiniteSlider>
      </motion.section>
    </div>
  );
}
