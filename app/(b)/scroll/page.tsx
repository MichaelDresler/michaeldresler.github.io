"use client";
import { useEffect, useState } from "react";
import RandomImages from "../../components/RandomImages";
import { motion } from "framer-motion";

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

  const [positions, setPositions] = useState<number[]>([]);

  useEffect(() => {
    // Calculate the transformation values for each item
    const newPositions = fakeNames.map((_, i) => {
      return (i - fakeNames.length / 2) * 10;
    });
    setPositions(newPositions);
  }, []);

  return (
    <main className="relative h-screen w-screen flex my-auto">

      {/* <div className="fixed w-[600px] h-[8rem] left-0  top-1/2 transform-[translate(8%,-55%)] border-t border-b border-white/10 z-[10000]  pointer-events-none"></div> */}


      <div className="fixed w-full left-0 bottom-0 pointer-events-none rotate-180 z-1000">

        <div className="w-screen h-[25rem] absolute top-0 left-0 bg-surface/100  [mask-image:linear-gradient(180deg,_rgba(0,0,0,1)_10%,_rgba(255,255,255,0)_90%)]  backdrop-blur-[20px] "></div>
      </div>

      <div className="fixed w-full left-0 top-0 pointer-events-none  z-[400]">
        <div className="w-screen h-[25rem] absolute top-0 left-0 bg-surface/100  [mask-image:linear-gradient(180deg,_rgba(255,0,0,1)_5%,_rgba(255,255,255,0)_90%)]  backdrop-blur-[20px] "></div>
      </div>

      <ol className="w-full px-12 h-full overflow-y-scroll scroll-smooth snap-y  snap-mandatory">
        <div className="py-[50vh] ">
          {fakeNames.map((name, index) => (
            <motion.li
              className="text-[2rem] lg:text-[4rem] snap-center py-[1.5rem]  font-medium tracking-[-0.04em] text-[rgb(241,240,228)]"
              key={name}
              initial={{
                color: "rgba(241,240,228,0.2)",
                scale: 0.98,
                rotateX: "-30deg",
                // translateZ:"40px"
                // transform: "rotateX(-30deg) translateZ(40px),"
              }}
              whileInView={{
                color: "rgba(241,240,228,1)",
                scale: 1,
                rotateX: "0deg",
                // translateZ:"10px"

                // transform: "rotateX(-0deg) translateZ(0px) scale(1)"
              }}
              viewport={{
                margin: "-50%",
              }}
              transition={{
                duration: 0.75,
                ease: [0.25, 0.8, 0.25, 1], // S-curve Bezier easing
              }}
            >  
             <div className="text-base tracking-tight leading-0">Product designer, Meta</div>
             <div>{name}</div>
  
            </motion.li>
          ))}
        </div>
      </ol>
      <div className="w-full h-full fixed flex justify-end items-end top-0 z-[10000] pointer-events-none">
                <div className=" flex justify-end  ">
                        <span className="h-fit w-fit font-bold text-[16rem] leading-[100%]  text-[rgb(241,240,228)] ">01</span>
                </div>
        </div>
    </main>
  );
}
