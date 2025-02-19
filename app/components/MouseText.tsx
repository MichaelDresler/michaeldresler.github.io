import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";


type MouseTextProps = {
  text: string;
  el?: keyof JSX.IntrinsicElements;
  className?: string;
};

export const MouseText = ({
  text,
  el: Wrapper = "p",
  className,
}: MouseTextProps) => {
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
  const blurSpring = useSpring(blurValue, { damping: 100, stiffness: 120 });
  const blurFilter = useTransform(blurSpring, [0, 1], ["blur(0px)", "blur(20px)"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width

    
    const mouseX = e.clientX -rect.left


    const xPct = mouseX/(width/2)
    blurValue.set(xPct)
    

  };
  const handleMouseLeave = () => blurValue.set(0); // Animate blur back smoothly

  return (
    <motion.span
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ filter: blurFilter }}
      
    >
      {char}
    </motion.span>
  );
};




