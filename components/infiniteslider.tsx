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
          alt="NEXTjs logo"
          className="h-[55px] w-auto"
        />
        <img
          src="./reactjs.jpeg"
          alt="REACTjs logo"
          className="h-[55px] w-auto"
        />
        <img
          src="./TailwindCSS.png"
          alt="TailwindCSS logo"
          className="h-[55px] w-auto"
        />
        <img
          src="./typescript.png"
          alt="TypeSCRIPT logo"
          className="h-[55px] w-auto"
        />
        <img src="./nodejs.png" alt="Nodejs logo" className="h-[55px] w-auto" />
        <img src="./vercel.png" alt="vercel logo" className="h-[55px] w-auto" />
        <img src="./aws.png" alt="AWS logo" className="h-[55px] w-auto" />
        <img
          src="./appwrite.png"
          alt="APPWRITE logo"
          className="h-[55px] w-auto"
        />
        <img src="./github.png" alt="GITHUB logo" className="h-[55px] w-auto" />
      </InfiniteSlider>
    </div>
  );
}
