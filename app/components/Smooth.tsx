"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { lerp } from "vega";

export const Smooth = ({ children }: { children: React.ReactNode }) => {
  return <ReactLenis options={{
    lerp:1,
    duration:1
  }} root>{children}</ReactLenis>;
  
};
