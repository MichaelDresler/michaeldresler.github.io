"use client";

import { AnimatedText } from "@/app/components/AnimatedText";
import { MouseText } from "@/app/components/MouseText";
import { RandomText } from "@/app/components/RandomText";
import { useEffect, useState } from "react";

export default function type() {
  const [vw10, setVw10] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      setVw10(window.innerWidth/15);
    };

    updateWidth(); // Set initial value
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);

  }, []);

  return (
    <div className="relative flex items-center justify-center flex-col h-screen bg-[#F1EFE7]">
      <div className=" text-center gap-0 leading-[0.2]">
        {/* <AnimatedText
          textSize={vw10}
          text="Touchpoint "
          className="  uppercase leading-[0.8] text-[15vw] font-[helvetica] tracking-[-0.09em] font-bold text-black  blur-threshold-effect"
        /> */}

        <MouseText
          text="Touchpoint "
          className="  uppercase leading-[0.8] text-[15vw] font-[helvetica] tracking-[-0.09em] font-bold text-black  blur-threshold-effect"
        />
      </div>
    </div>
  );
}
