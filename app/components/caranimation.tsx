"use client";
import dynamic from "next/dynamic";
import { useRef, useState, useEffect } from "react";
import OpenIcon from "@/public/icons/open-stack.svg";
import ClosedIcon from "@/public/icons/closed-stack.svg";
import anime from "@/public/BOT_colour.json";

const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});

import { LottieRefCurrentProps } from "lottie-react";



export default function CarAnimation() {
  const phoneRef = useRef<LottieRefCurrentProps>(null);
  const [animationState, setAnimationState] = useState<boolean>(true);
  const [button, setButtonState] = useState<string>("Open");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="  pb-[10%] h-full  ">
     <button
      className={` relative flex w-full  gap-3 justify-center items-center bg-white/5 rounded-lg text-primary py-[16px] px-4  font-medium  group hover:bg-white/8 transition-all duration-300 border-1 border-primary/50 overflow-hidden active:bg-white/4`}
              onClick={() => {
          setAnimationState(!animationState);
          animationState
            ? phoneRef.current?.setDirection(1)
            : phoneRef.current?.setDirection(-1);
          phoneRef.current?.play();
          button === "Open" ? setButtonState("Close") : setButtonState("Open");
        }}
    >
      <div>{button} </div>
        <div className=" ">
          {animationState ? <OpenIcon className="size-6"/> : <ClosedIcon className="size-6"/>}
        </div>
      <div className="absolute top-0 left-0 h-full w-full -z-20">
        <svg
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 1133 679"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="1132.5"
            height="678.417"
            fill="url(#paint0_radial_3157_666)"
          />
          <defs>
            <radialGradient
              id="paint0_radial_3157_666"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(557.537 3.5) rotate(90) scale(650 1200)"
            >
              <stop stopColor="#595959" />
              <stop offset="0.894148" stopColor="#0E0E0E" />
            </radialGradient>
          </defs>
        </svg>
      </div>

    </button>

      
      <Lottie
        className={` mx-auto h-full  pt-12   `}
        lottieRef={phoneRef}
        loop={false}
        autoplay={false}
        animationData={anime}
      />

      {/* <div className="absolute w-full h-full top-0 left-0 opacity-10  bg-white bg-blend-difference z-10"/> */}

     
    </div>
  );
}
