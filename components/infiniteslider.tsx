import { Newsreader } from "next/font/google";
import { InfiniteSlider } from "@/components/ui/infinite-slider";

export default function InfiniteSliderBasic() {
  return (
    <div className="flex-col justify space-y-5">
      <InfiniteSlider
        gap={40}
        speed={55}
        speedOnHover={90}
        className="w-full h-full"
      >
        <img
          src="./nextjs.jpeg"
          alt="Apple Music logo"
          className="h-[55px] w-auto"
        />
        <img
          src="./reactjs.jpeg"
          alt="Chrome logo"
          className="h-[55px] w-auto"
        />
        <img
          src="./TailwindCSS.png"
          alt="Strava logo"
          className="h-[55px] w-auto"
        />
        <img
          src="./typescript.png"
          alt="Nintendo logo"
          className="h-[55px] w-auto"
        />
        <img src="./nodejs.png" alt="Prada logo" className="h-[55px] w-auto" />
        <img src="./vercel.png" alt="Prada logo" className="h-[55px] w-auto" />
        <img src="./aws.png" alt="Prada logo" className="h-[55px] w-auto" />
        <img
          src="./appwrite.png"
          alt="Prada logo"
          className="h-[55px] w-auto"
        />
        <img src="./github.png" alt="Prada logo" className="h-[55px] w-auto" />
      </InfiniteSlider>
    </div>
  );
}
