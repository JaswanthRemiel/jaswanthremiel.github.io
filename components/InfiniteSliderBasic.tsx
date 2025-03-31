import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";

export function InfiniteSliderBasic() {
  return (
    <InfiniteSlider speedOnHover={20} gap={24} speed={50}>
      <img src="/aws.svg" alt="Apple Music logo" className="h-[40px] w-auto" />
      <img src="/figma.svg" alt="Chrome logo" className="h-[40px] w-auto" />
      <img src="/express.svg" alt="Strava logo" className="h-[40px] w-auto" />
      <img src="/react.svg" alt="Nintendo logo" className="h-[40px] w-auto" />
      <img src="/nextjs.svg" alt="Jquery logo" className="h-[40px] w-auto" />
      <img src="/vercel.svg" alt="Prada logo" className="h-[40px] w-auto" />
    </InfiniteSlider>
  );
}
