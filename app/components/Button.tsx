type ButtonProps = {
  title: string;
  link: string;
  className?: string;
};
export const Button = ({ title, link, className }: ButtonProps) => {
  return (
    <a
      href={link}
      className={`${className} relative flex w-fit  gap-3 justify-center items-center bg-white/14 rounded-lg text-primary py-[10px] px-4  font-medium  group hover:bg-white/10 transition-all duration-300 border-1 border-primary/50 overflow-hidden active:bg-white/4`}
    >
      <div>{title} </div>
      <div className="group-hover:translate-x-1 duration-200 text-lg">
        {" "}
        {`->`}
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
              <stop stopColor="#212121" />
              <stop offset="0.894148" stopColor="#0E0E0E" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          className="size-6 rotate-180 stroke-white/60 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25"
          />
        </svg> */}
    </a>
  );
};
