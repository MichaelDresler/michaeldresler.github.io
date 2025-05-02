"use client";

import { MouseText } from "@/app/components/MouseText";
import { useEffect, useState } from "react";
import { RandomText } from "../components/RandomText";
import { AnimatedText } from "../components/AnimatedText";
import { Instrument_Serif } from 'next/font/google'

const instrument = Instrument_Serif({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-Instrument_Serif'
})

export default function Type() {
  const [vw10, setVw10] = useState(0);
  console.log(vw10)

  useEffect(() => {
    const updateWidth = () => {
      setVw10(window.innerWidth/15);
    };

    updateWidth(); // Set initial value
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);

  }, []);

  return (
    <div className="relative flex items-center justify-center flex-col h-screen bg-[#fffefc]">
      <div className=" text-center gap-0 leading-[0.2]">
        <AnimatedText
          textSize={vw10}
          text="Design In Progress "
          className={` ${instrument.className} uppercase leading-[0.8] text-[15vw]  tracking-[-0.09em] font-bold text-black  blur-threshold-effect max-w-[10ch]`}
        />

        {/* <RandomText
          text="Touchpoint "
          className="  uppercase leading-[0.8] text-[15vw] font-[helvetica] tracking-[-0.09em] font-bold text-black  blur-threshold-effect"
        /> */}
      </div>
    </div>
  );
}
