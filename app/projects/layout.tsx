
export default function ProjectsLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section className=" ">
          <div className="absolute top-0 left-0 w-full h-full z-20">
          <svg
          viewBox="0 0 1804 1250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="901.998"
            cy="561.396"
            r="901.759"
            fill="url(#paint0_radial_2796_4719)"
            fillOpacity="0.07"
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
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
          </div>
      {children}</section>
  }