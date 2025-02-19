import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

type RandomTextProps = {
  text: string;
  el?: keyof JSX.IntrinsicElements;
  className?: string;
};

export const RandomText = ({
  text,
  el: Wrapper = "p",
  className,
}: RandomTextProps) => {
  return (
    <Wrapper className={className}>
      <span className="sr-only">{text}</span>
      <motion.span initial="hidden" animate="visible" transition={{ staggerChildren: 0.2 }} aria-hidden>
        {text.split("").map((char, index) => (
          <BlurredChar key={index} char={char} />
        ))}
      </motion.span>

       {/* SVG Filter Definition */}
       <svg width="0" height="0">
        <filter id="svgThreshold">
          {/* Tint the text (e.g., blue hue) */}
          <feColorMatrix
            type="matrix"
            values="0.4 0 0 0 0.4
            0 0.4 0 0 0.4
            0 0 0.4 0 0.4
            0 0 0 1 0"

          />
          {/* Apply Threshold Effect */}
          <feComponentTransfer>
            <feFuncR type="discrete" tableValues="0 0 0" />
            <feFuncG type="discrete" tableValues="0 0 0" />
            <feFuncB type="discrete" tableValues="0 0 0" />
            <feFuncA type="discrete" tableValues="0 0 0.89" />
          </feComponentTransfer>
        </filter>
      </svg>

      

      <style jsx>{`
        .blur-threshold-effect {
          filter:  url(#svgThreshold);
        }
      `}</style>
    </Wrapper>
  );
};

const BlurredChar = ({ char }: { char: string }) => {
  const blurValue = useMotionValue(0);
  const blurSpring = useSpring(blurValue, {
    damping: 60,  // Increase damping for slower, drawn-out transitions
    stiffness: 60, // Lower stiffness for softer, more gradual movement

  });
  const blurFilter = useTransform(blurSpring, [0, 1], ["blur(0px)", "blur(19px)"]);

  useEffect(() => {
    const interval = setInterval(() => {
      blurValue.set(Math.random()); // Random blur intensity between 0 and 1
    }, Math.random() * 2000 + 2000); // Random time intervals (0.5s - 2s)

    return () => clearInterval(interval);
  }, [blurValue]);

  return <motion.span style={{ filter: blurFilter }}>{char}</motion.span>;
};




