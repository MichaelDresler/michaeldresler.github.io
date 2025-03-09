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
import { ScalingCarousel } from "@/app/components/ScalingCarousel";

export default function scroll() {
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
      ref.current.scrollLeft += scrollAmount * 0.4;
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
    window.addEventListener("wheel", handleWheel);
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
      <main className="flex items-end w-screen h-screen overflow-y-hidden">
        <ScalingCarousel/>
      </main>

      /* <main className=" relative w-screen h-screen overflow-y-hidden  ">
        <svg
          id="progress"
          width="80"
          height="80"
          className="absolute top-0"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="30"
            pathLength="1"
            className=" absolute top-0"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="30"
            className="stroke-amber-400 stroke-3 fill-indigo-50"
            style={{ pathLength: scrollXProgress }}
          />
        </svg>
        <div className="grid grid-rows-2 h-full      ">
          <div className="grid grid-cols-[1fr_1fr_1fr] pt-16 px-8 ">
            <div className=" text-[48px] font-[helvetica] tracking-tight  leading-[90%] text-text-primary text-pretty ">
              Christopher Elawa
            </div>
            <div className=" text-[15px]   text-text-secondary/100 text-pretty ">
              <span className="text-text-primary font-semibold">
                {" "}
                Product Designer <br />{" "}
              </span>
              Matt lives outside of Denver and is the Founder and CEO of Green
              Stone. Seven years in, the firm delivered solutions for Twitter,
              American Express, Google, Logitech, Beats By Dre, and many other
              clients across the globally. Prior to Green Stone, Matt spent 8
              years founding, building, and leading a team of 25 Experience
              Designers at Crispin Porter + Bogusky in Boulder as well as
              several years at R/GA on the Nike account in New York where he
              helped craft a number of influential platforms including NikeID
              and Nike+. Through that journey, his projects have won many
              marquee industry awards, but he gets far more excited about
              winning the hearts and minds of the people he designs for.
            </div>
          </div>

          <div ref={ref} className="flex items-end flex-row gap-2 overflow-x-scroll ">
          {imageList.map((img, index) => {
              const distanceFromCenter = useMotionValue(itemOffsets[index]);

              // Define the scale factor based on distance
              const scale = 1-(itemOffsets[index]/window.innerWidth/2)*3
              

              return (
                <motion.div
                  key={index}
                  className="flex-shrink-0 max-w-[450px] aspect-[7/10] bg-red-600"
                  style={{
                    width: 400 * scale,

                    // scale: scale, // Use dynamic scale here
                  }}
                >
                  <Image
                    src={img}
                    alt="Speaker"
                    style={{
                      width: 200 * scale,
                      height: 400 * scale,
                      // scale: scale, // Use dynamic scale here
                    }}
                    className="object-cover w-full h-full"
                  />
                </motion.div>
              )
            })}
          </div>
        </div>
      </main> */

  );
}
