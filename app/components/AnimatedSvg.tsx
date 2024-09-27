"use client"
import { useState } from "react"

export default function AnimatedSvg() {
    const [hover, setHover] = useState<boolean> (false)
  return (
    <svg onMouseEnter={() => setHover(true)} onMouseLeave={()=>setHover(false)}
            width="400"
            height="400"
            viewBox="0 0 400 400"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* body */}
            <ellipse cx="200" cy="250" rx="100" ry="150" fill="blue" />

            {/* eyes */}
            <circle cx="170" cy="200" r="15" fill="#fff"></circle>
            <circle cx="230" cy="200" r="15" fill="#fff"></circle>
            <circle cx="170" cy="200" r="7" fill="#000" />
            <circle cx="230" cy="200" r="7" fill="#000" />

            {/* mouth */}
            <path
              d="M150,230 Q200,280 250,230"
              fill="transparent"
              stroke="#000"
              strokeWidth="5"
            />

            {/* Arms */}
            <g>
              {/* Left Arm with animation */}
              <line
                x1="100"
                y1="250"
                x2="50"
                y2="300"
                stroke="#ff1493"
                strokeWidth="10"
              >
                {hover && <animateTransform
                  attributeName="transform"
                  type="rotate"
                  values="0 100 250; 100 100 250; 0 100 250"
                  keyTimes="0; 0.5; 1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                    }
              </line>

              {/* Right Arm */}
              <line
                x1="300"
                y1="250"
                x2="350"
                y2="300"
                stroke="#ff1493"
                strokeWidth="10"
              />
            </g>

            {/* Legs */}
            <line
              x1="150"
              y1="400"
              x2="150"
              y2="300"
              stroke="#ff1493"
              strokeWidth="10"
            />
            <line
              x1="250"
              y1="400"
              x2="250"
              y2="300"
              stroke="#ff1493"
              strokeWidth="10"
            />
          </svg>
  )
}
