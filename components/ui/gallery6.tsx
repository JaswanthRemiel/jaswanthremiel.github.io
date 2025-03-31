"use client";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { Alegreya } from "next/font/google";
const alegreya = Alegreya({
  subsets: ["latin"],
});
import { ArrowIcon } from "../ArrowIcon";

interface GalleryItem {
  id: string;
  title: string;
  summary: string;
  url: string;
  image: string;
}

interface Gallery6Props {
  items?: GalleryItem[];
}

const Gallery6 = ({ items = [] }: Gallery6Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!carouselApi) return;
    const updateSelection = () => {};
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <motion.section
      className="space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="py-4">
        <div className="w-full space-y-8">
          <section
            className={`${alegreya.className} bg-orange-500 text-black px-2 py-0.75  font-sm inline-flex items-center space-x-1 font-semibold`}
          >
            <span>projects</span>
            <ArrowIcon />
          </section>
          <Carousel
            setApi={setCarouselApi}
            opts={{ align: "center", loop: true, dragFree: true }}
            className="relative"
          >
            <CarouselContent className="ml-auto mr-auto flex justify-center space-x-4">
              {items.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="max-w-[250px] flex-shrink-0"
                >
                  <a
                    href={item.url}
                    className="group flex flex-col justify-between"
                  >
                    <div className="flex aspect-[3/2] overflow-clip rounded-xl">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="text-left text-sm font-medium pt-2">
                      {item.title}
                    </div>
                    <div className="text-left text-xs text-muted-foreground pt-1">
                      {item.summary}
                    </div>
                    <div className="flex items-left justify text-xs pt-1">
                      Read more{" "}
                      <ArrowRightIcon className="ml-1 size-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>
    </motion.section>
  );
};

export { Gallery6 };
