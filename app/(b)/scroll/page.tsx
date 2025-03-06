"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Snap from "lenis/snap";
import { useLenis } from "lenis/react";
import { Smooth } from "@/app/components/Smooth";
import Image from "next/image";

import dan from "/public/port/dan.png";
import maheen from "/public/port/maheen.png";
import connor from "/public/port/connor.png";
import mark from "/public/port/mark.png";
import armina from "/public/port/armina.png";
import marta from "/public/port/marta.png";
import matt from "/public/port/matt.png";
import chris from "/public/port/chris.png";
import tt from "/public/port/bestie2.png";

export default function scroll() {
  const [imgIndex, setImgIndex] = useState(1);

  const imageList = [
    // WHEN STRUCTURING THIS LIST ENSURE THAT WHOEVER IS HIGHLIGHTED AT THE BEGINING OF THE PAGE IS FIRST IN THE ARRAY (ie. marta is first highlighted when opening page so her picture is first)
    dan,
    maheen,
    connor,
    marta,
    tt,
    mark,
    chris,
    armina,
    matt,
  ];
  const numSpeakers = 8

  const fakeNames = [
    // TO FIGURE OUT SEAMLESS SCROLL, FIRST DECIDE HOW MANY ELEMENTS YOU WANT DISPLAY ON THE SCREEN.
    // N = NUM ELEMENTS ON SCREEN (ex. 8)
    // S = VIEWPORT HEIGHT (ex. 818)
    // HEIGHT OF ELEMENT = S/N (ex. 818/8 = 103px)
    // T = TOTAL NUM OF ELEMENTS IN ARRAY  (ex.9 speakers in this case)
    // NT = NEW TOTAL NUM ELEMENT IN ARRAY FOR SEAMLpESS SCROLL = T*2 + N(THE ADDED ELEMENTS MUST BE TAKEN FROM TOP OF THE LIST AND PUT AT THE BOTTOM) (ex. 9*2 = 18 + 8 = 26 )

    "Dan Nanasi",
    "Maheen Sohail",
    "Connor Lowe",
    "Marta Bernstein",
    "Touchpoint Team",
    "Mark Strathern",
    "Christopher Elawa",
    "Armina Foroughi",
    "Matt Walsh",
    "Dan Nanasi",
    "Maheen Sohail",
    "Connor Lowe",
    "Marta Bernstein",
    "Touchpoint Team",
    "Mark Strathern",
    "Christopher Elawa",
    "Armina Foroughi",
    "Matt Walsh",
    // TAKEN FROM TOP OF LIST DOWNWARDS
    "Dan Nanasi",
    "Maheen Sohail",
    "Connor Lowe",
    "Marta Bernstein",
    "Touchpoint Team",
    "Mark Strathern",
    "Christopher Elawa",
    "Armina Foroughi",
  ];

  const lenis = useLenis(({ scroll }) => {
    // console.log(window.scrollY)
  });

  function isElementActive(element: HTMLElement) {}

  useEffect(() => {
    if (lenis) {
      const snap = new Snap(lenis, {
        type: "proximity", // Make the snap strict (must snap to points
        lerp: 1, // Slightly smoother snap
        easing: (t) => 1 - Math.pow(1 - t, 3), // Cubic easing for snapping
        duration: 1.25, // Snap duration is 600ms
      });

      // Ensure listItems is only accessed in the browser
      const listItems = document.querySelectorAll(
        ".snap-item"
      ) as NodeListOf<HTMLElement>;

      listItems.forEach((item, index) => {
        snap.addElement(item, {
          align: ["center"],
        });
      });

      const entries = Array.from(snap.elements.entries());
      const elementPosY = entries.map((entry) => entry[1].rect.top);
      console.log

      window.addEventListener("scroll", () => {
        elementPosY.forEach((element, index) => {
          if (Math.abs(Math.round(window.scrollY) - element) <= 30) {
            console.log("index",index,"scrollpos",Math.abs(Math.round(window.scrollY)),"element posy",element,"threshold:",Math.round(Math.abs(window.scrollY - element)))
            setImgIndex(index % 9);
            // console.log(index)
          }
        });
      });

      // Clean up the scroll event listener if needed
      return () => {
        window.removeEventListener("scroll", () => {});
      };
    } else {
      console.error(
        "Lenis instance is undefined or not in a browser environment"
      );
    }
  }, [lenis]); // Empty dependency array means this runs only once after component mounts

  return (
    <Smooth>
      <main className=" h-screen w-screen   ">
        <ol className="relative w-full  ">
          <div className="grid grid-cols-[0.6fr_0.6fr_1fr]  px-12   ">
            <div className=" ">
              {fakeNames.map((name, index) => (
                <motion.li
                  style={{height:window.innerHeight/numSpeakers}}
                  className="snap-item text-text-secondary/20 text-[2rem] lg:text-[3rem] bg-red-300 font-medium tracking-[-0.04em]  "
                  key={index}
                  initial={{
                    color: "var(--text-primary)",
                    opacity: 0.2,
                    // scale: 0.9,
                    originX: 0,
                    // width:"12rem"
                    //     rotateX: "-30deg",
                    // translateZ:"40px"
                    // transform: "rotateX(-30deg) translateZ(40px),"
                  }}
                  whileInView={{
                    color: "var(--text-primary)",
                    opacity: 1,
                    scale: 1,
                    // width:"14rem"
                    //     rotateX: "0deg",
                    // translateZ:"10px"

                    // transform: "rotateX(-0deg) translateZ(0px) scale(1)"
                  }}
                  viewport={{
                    margin: "0%  0% -90% 0%",
                  }}
                  transition={{
                    duration: 0.75,
                    ease: [0.25, 0.8, 0.25, 1], // S-curve Bezier easing
                  }}
                >
                  {/* <div className="text-base tracking-tight leading-0">
                    Product designer, Meta
                  </div> */}
                  <div className="  ">{name}</div>
                </motion.li>
              ))}
            </div>
            <div className=" flex flex-col sticky top-0 py-8 w-full z-[10000] h-screen ">
              <div className=" ml-6  h-fit  text-white/80 text-pretty ">01</div>
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
                src={imageList[imgIndex]}
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
