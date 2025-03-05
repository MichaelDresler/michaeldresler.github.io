"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Snap from "lenis/snap";
import { useLenis } from "lenis/react";
import { Smooth } from "@/app/components/Smooth";
import Image from "next/image";
import michael from "/public/image.png"

export default function scroll() {
  const fakeNames = [
    "Dan Nanasi",
    "Maheen Sohail",
    "Connor Lowe",
    "Marta Bernstein",
    "Touchpoint Team",
    "Mark Strathern",
    "Christopher Elawa",
    "Armina Foroughi",
    "Matt Walsh",
  ];

  const cubicBezier = (t: number, ...params: number[]) => {
    const [p0, p1, p2, p3] = params;
    const c0 = (1 - t) ** 3;
    const c1 = 3 * (1 - t) ** 2 * t;
    const c2 = 3 * (1 - t) * t ** 2;
    const c3 = t ** 3;

    return c0 * p0 + c1 * p1 + c2 * p2 + c3 * p3;
  };

  const lenis = useLenis(({ scroll }) => {
    //     console.log(window.scrollY)
  });

  const listItems = document.querySelectorAll(
    ".snap-item"
  ) as NodeListOf<HTMLElement>;

  if (lenis) {
    const snap = new Snap(lenis, {
      type: "proximity", // Make the snap strict (must snap to points)
      lerp: 1, // Slightly smoother snap

      easing: (t) => 1 - Math.pow(1 - t, 3), // Cubic easing for snapping
      //       easing: (t) => cubicBezier(t, 0, 0.2, 0, 1), // Cubic easing for snapping
      duration: 1.25, // Snap duration is 600ms
    });
    listItems.forEach((item, index) => {
      snap.addElement(item, {
        align: ["center"],
      });
    });
  } else {
    console.error("Lenis instance is undefined");
  }

  return (
    <Smooth>
      <main className=" h-screen w-screen  my-auto">
        {/* <section className="snap-item w-screen h-screen bg-white/10 z-[10111199]"></section> */}



        <ol className="relative w-full  ">
          <div className="w-full z-[100] h-[20rem] sticky top-0  bg-surface [mask-image:linear-gradient(180deg,_rgba(255,0,0,1)_5%,_rgba(255,255,255,0)_90%)]  backdrop-blur-[20px] "></div>

          <div className="w-full z-[1000] h-[20rem] sticky top-0 translate-y-[calc(100vh-20rem)] rotate-180  bg-surface [mask-image:linear-gradient(180deg,_rgba(255,0,0,1)_5%,_rgba(255,255,255,0)_90%)]  backdrop-blur-[20px] "></div>

          {/* <div className="sticky w-[600px] h-[8rem] left-0   top-1/2 transform-[translate(10%,-55%)] border-t border-b border-white/10 z-[10000]  pointer-events-none"></div> */}

          <div className="grid grid-cols-[0.6fr_0.6fr_1fr] mt-[-640px] px-12   ">
            <div className="mt-[80%] pb-[300px]">
              {fakeNames.map((name, index) => (
                <motion.li
                  className="snap-item text-[2rem] lg:text-[3rem] my-12  font-medium tracking-[-0.04em] "
                  key={name}
                  initial={{
                    color: "var(--text-primary)",
                    opacity: 0.2,
                    scale: 0.98,
                    //     rotateX: "-30deg",
                    // translateZ:"40px"
                    // transform: "rotateX(-30deg) translateZ(40px),"
                  }}
                  whileInView={{
                    color: "var(--text-primary)",
                    opacity: 1,
                    scale: 1,
                    //     rotateX: "0deg",
                    // translateZ:"10px"

                    // transform: "rotateX(-0deg) translateZ(0px) scale(1)"
                  }}
                  viewport={{
                    margin: "-50%  0% -50% 0%",
                  }}
                  transition={{
                    duration: 0.75,
                    ease: [0.25, 0.8, 0.25, 1], // S-curve Bezier easing
                  }}
                >
                  <div className="text-base tracking-tight leading-0">
                    Product designer, Meta
                  </div>
                  <a className="" href="">
                    {name}
                  </a>
                </motion.li>
              ))}
            </div>
            <div className=" flex flex-col sticky top-0 py-8 w-full z-[10000] h-screen">
            <div className=" ml-6  h-fit  text-white/80 text-pretty ">
                01
              </div>
              <div className=" ml-6  h-fit  text-white/80 text-pretty ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing 
              </div>
            </div>
            <div className="sticky top-0 py-8 w-full z-[10000] h-screen">
              <Image
              src={michael}
              alt=""
              className="w-[85%] ml-auto h-full bg-white/5 object-cover "
              />
            </div>
           
          </div>
          {/* <div className="mt-[30rem]">hwl</div> */}
        </ol>

        {/* <div className="w-full h-full fixed flex justify-end items-end top-0 z-[10000] pointer-events-none">
          <div className=" flex justify-end  ">
            <span className="h-fit w-fit font-bold text-[16rem] leading-[100%]  text-[rgb(241,240,228)] ">
              01
            </span>
          </div>
        </div> */}
      </main>
    </Smooth>
  );
}
