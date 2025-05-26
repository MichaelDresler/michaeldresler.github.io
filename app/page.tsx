"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Thumbnail } from "./components/Thumbnail";
import surge from "@/public/surge.png";
import test from "@/public/webpage.png";
import bytebot from "@/public/bytebot.png";
import portait from "@/public/aboutme.png";
import { useEffect } from "react";
import BytebotSVG from "./components/bytebot";
import GuardianSVG from "./components/gaurdian";
import { image } from "d3";
import { Thumbnail1 } from "./components/Thumbnail1";

//  Michael Dresler — <br /> Designer & Developer Based in Vancouver

export default function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = ""; // Reset when leaving
    };
  }, []);

  return (
    <>  
      <div className="absolute w-full top-0">
        <svg
          viewBox="0 0 1804 1464"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="901.998"
            cy="561.396"
            r="901.759"
            fill="url(#paint0_radial_2796_4719)"
            fill-opacity="0.12"
          />
          <defs>
            <radialGradient
              id="paint0_radial_2796_4719"
              cx="0"
              cy="0.0"
              r="0.9"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(901.998 561.396) rotate(90) scale(901.759)"
            >
              <stop stop-color="white" />
              <stop offset="1" stop-color="#737373" stop-opacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <div className="content-box ">
        <main className=" w-full   flex items-center justify-center  pb-24">
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              opacity: { duration: 1 },
              y: { duration: 1, ease: [0.25, 0, 0.2, 1] },
            }}
          >
            <>
              <div className="aspect-square max-w-[212px] mx-auto rounded-full overflow-hidden mb-8">
                <Image
                  src={portait}
                  alt="pfp"
                  className=" object-cover scale-[150%]  grayscale ml-[1%] mt-[25%]"
                />
              </div>

              <h1 className="text-pretty  font-semibold text-[2.5rem] md:text-[4.5rem] 2xl:text-[rem]  text-text-primary tracking-[-0.05em] leading-[110%]  md:leading-[110%] text-center max-w-[12ch] mx-auto mb-6 ">
                I'm Michael, a Designer based in Vancouver
              </h1>
              <h2 className="text-lg text-text-secondary text-center  max-w-[45ch]">
                I have 11 years of experience working on userful and mindful
                products toghether with startups and known Brands.
              </h2>
            </>
          </motion.div>
        </main>

        <section
          className="grid grid-cols-1 xl:grid-cols-2 gap-6  pb-12"
          id="projects"
        >
          <Thumbnail1
            img={BytebotSVG}
            width="w-[72%]"
            link="/projects/surge"
            textColor="text-white/87"
            bgColor="bg-[linear-gradient(210deg,#F8CD42_0%,#F1A707_93%)]"
            title="ByteBot"
            description={"Arduino Prototype"}
          />
          <Thumbnail1
            img={GuardianSVG}
            width="w-[30%]"
            link="/"
            textColor="text-white/87"
            bgColor="bg-[linear-gradient(30deg,#082213_19%,#143621_78%,#224930_100%)]"
            title="Guardian"
            description={"App Prototype"}
          />
        </section>
      </div>
    </>
  );
}
