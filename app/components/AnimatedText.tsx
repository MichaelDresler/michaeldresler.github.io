
import {motion} from "framer-motion"

type AnimatedTextProps = {
  text: string;
  el?: keyof JSX.IntrinsicElements;
  className?: string;
  textSize:number
};


const transition = {
  duration: 4,
  ease: [.37,0,.17,1],
}

export const AnimatedText = ({
  text,
  el: Wrapper = "p",
  className,
  textSize
}: AnimatedTextProps) => {


  const newBlur  = Math.min(textSize / 35, 8)
  console.log(newBlur)

  const defaultAnimations = {
    hidden:{
      filter:"blur(200px)"
      // opacity:0
    },
  
    visible:{
      filter: `blur(${newBlur}px)`
      // opacity:1
    }
    
  }
  console.log(textSize)
  
  return (
    <Wrapper       className={className} >
      <span className="sr-only">{text}</span>
      <motion.span
      initial="hidden"
      animate = "visible"
      transition={{staggerChildren:0.2}}

       aria-hidden>
        {text.split("").map((char,index) => (
          <motion.span transition={transition} variants={defaultAnimations}  key={index} >{char}</motion.span>
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
            <feFuncA type="discrete" tableValues="0 0 1" />
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
