"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { lerp } from "vega";

export const Smooth = ({ children }: { children: React.ReactNode }) => {
  return <ReactLenis options={{
    lerp:0,
    duration:10,
    // infinite:true,
    
    orientation:"horizontal",
    gestureOrientation:"horizontal"

  }} root>{children}</ReactLenis>;
  
};
