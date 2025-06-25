"use client";
import Image from "next/image";
import { motion } from "framer-motion";


import portait from "@/public/aboutme.png";
import { useEffect } from "react";
import BytebotSVG from "./components/bytebot";
import GuardianSVG from "./components/gaurdian";
import { Thumbnail1 } from "./components/Thumbnail1";

const preventBuild = "preventbuild"

//  Michael Dresler — <br /> Designer & Developer Based in Vancouver
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const childrenVariants = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      opacity: { duration: 2 },
      y: { duration: 0.8, ease: [0.25, 0, 0.2, 1] },
    },
  },
};

export default function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = ""; // Reset when leaving
    };
  }, []);

  return (
    <>
      <div className="absolute w-full h-full top-0 -z-20">
        <svg
          viewBox="0 0 1804 1450"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="901.998"
            cy="561.396"
            r="901.759"
            fill="url(#paint0_radial_2796_4719)"
            fillOpacity="1"
          />
          <defs>
            <radialGradient
              id="paint0_radial_2796_4719"
              cx="0"
              cy="0.0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(901.998 561.396) rotate(90) scale(901.759)"
            >
              <stop stopColor="#272727" />
              <stop offset="1" stopColor="#101010" stopOpacity="1" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <div className="content-box ">
        <main className=" w-full   flex items-center justify-center  pt-4 pb-24">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            // whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={childrenVariants}
              className="aspect-square max-w-[212px] mx-auto rounded-full overflow-hidden mb-8"
            >
              <Image
                src={portait}
                alt="pfp"
                className=" object-cover scale-[150%]  grayscale ml-[1%] mt-[25%]"
              />
            </motion.div>

            <motion.h1
              variants={childrenVariants}
              className="text-pretty  font-semibold text-[2.5rem] md:text-[4.5rem] 2xl:text-[rem]  text-primary tracking-[-0.03em] leading-[110%]  md:leading-[110%] text-center max-w-[12ch] mx-auto mb-6 "
            >
              I'm Michael, a Designer based in Vancouver
            </motion.h1>
            <motion.h2
              variants={childrenVariants}
              className="text-lg text-secondary text-center  max-w-[45ch]"
            >
              I have 11 years of experience working on userful and mindful
              products toghether with startups and known Brands.
            </motion.h2>
          </motion.div>
        </main>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={childrenVariants}
          className="grid grid-cols-1 xl:grid-cols-2 gap-6  pb-12"
          id="projects"
        >
          <Thumbnail1
            img={BytebotSVG}
            width="w-[72%]"
            link="/projects/bytebot"
            textColor="text-primary"
            bgColor="bg-[linear-gradient(210deg,#F8CD42_0%,#F1A707_93%)]"
            title="ByteBot"
            description={"Arduino Prototype"}
          />
          <Thumbnail1
            img={GuardianSVG}
            width="w-[30%]"
            link="/projects/surge"
            textColor="text-primary"
            bgColor="bg-[linear-gradient(30deg,#082213_19%,#143621_78%,#224930_100%)]"
            title="Guardian"
            description={"App Prototype"}
          />
        </motion.section>
      </div>
    </>
  );
}
