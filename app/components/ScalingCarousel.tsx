"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

import Snap from "lenis/snap";
import { useLenis } from "lenis/react";
import { Smooth } from "@/app/components/Smooth";
import Image from "next/image";
import { useScroll } from "framer-motion";

import dan from "/public/port/dan.png";
import maheen from "/public/port/maheen.png";
import connor from "/public/port/connor.png";
import mark from "/public/port/mark.png";
import armina from "/public/port/armina.png";
import marta from "/public/port/marta.png";
import matt from "/public/port/matt.png";
import chris from "/public/port/chris.png";
import tt from "/public/port/bestie2.png";

export const ScalingCarousel = () => {
  const [itemOffsets, setItemOffsets] = useState<number[]>([]);

  const imageList = [
    // WHEN STRUCTURING THIS LIST ENSURE THAT WHOEVER IS HIGHLIGHTED AT THE BEGINING OF THE PAGE IS FIRST IN THE ARRAY (ie. marta is first highlighted when opening page so her picture is first)
    dan,
    maheen,
    connor,
    marta,
    tt,
    mark,
    chris,
    dan,
    maheen,
    connor,
    marta,
    tt,
    mark,
    chris,

    // armina,
    // matt,
  ];
  const numSpeakers = 8;

  const ref = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: ref });
  const widthTransform = useTransform(scrollXProgress, [0, 1], [100, 500]);
  const heightTransform = useTransform(scrollXProgress, [0, 1], [100, 800]);

  const lenis = useLenis(({ scroll }) => {
    // console.log(window.scrollY)
  });

  const handleWheel = (event: WheelEvent) => {
    // Prevent default vertical scroll behavior

    window.addEventListener("wheel", handleWheel, { passive: false });
    // Determine how much to scroll horizontally
    const scrollAmount = event.deltaY;
    // Get the current scroll position and adjust it horizontally
    if (ref.current) {
      ref.current.scrollLeft += scrollAmount * 0.3;
    }
  };

  useEffect(() => {
    // Add the scroll event listener on mount

    const calculateOffsets = () => {
      const items = ref.current?.children;
      if (items) {
        const offsets = Array.from(items).map((item) => {
          // Calculate the offset of the item relative to the viewport
          const rect = item.getBoundingClientRect();
          const itemCenter = rect.left + rect.width / 2; // center of the item
          const viewportCenter = window.innerWidth / 2; // center of the viewport
          return Math.abs(itemCenter - viewportCenter); // distance from the center
        });
        setItemOffsets(offsets);
      }
    };

    // Recalculate on scroll or resize
    // window.addEventListener("wheel", handleWheel);
    window.addEventListener("resize", calculateOffsets);
    window.addEventListener("wheel", calculateOffsets);
    calculateOffsets(); // Initial calculation

    return () => {
      window.removeEventListener("resize", calculateOffsets);
      window.removeEventListener("scroll", calculateOffsets);
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <main className=" relative w-screen ">


        <div ref={ref} className="flex items-end flex-row gap-5  ">
        <Smooth>
          {imageList.map((img, index) => {
            // Define the scale factor based on distance
            const scale =
              1 - Math.abs(itemOffsets[index] / window.innerWidth / 2) * 2.5;

            return (
              <motion.div
                key={index}
                className="flex-shrink-0 min-w-[231px] max-w-[500px] aspect-[7/10] bg-black/10 rounded-2xl"
                style={{
                  width: 500 * scale,

                  // scale: scale, // Use dynamic scale here
                }}
              ></motion.div>
            );
          })}
                </Smooth>
        </div>

    </main>
  );
};
