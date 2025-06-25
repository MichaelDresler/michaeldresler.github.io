type FigureCaptionProps = {
  heading: string;
  text: string;
  media?: React.ReactNode;
  frame?: boolean;
  breakout?: boolean; // New prop to control breakout behavior
};

export const FigureCaption = ({
  heading,
  text,
  media,
  frame = true,
  breakout = false, // default to false
}: FigureCaptionProps) => {
  return (
    <figure className={ ` flex flex-col gap-4 ${breakout ? 'breakout-content' : ''}`} >
      {frame ? (
        <div className={`relative overflow-hidden rounded-2xl border border-[#252525] bg-[#0E0E0E]`}>
          <div className="absolute top-0 left-0 h-full w-full -z-20"></div>
          {media}
        </div>
      ) : (
        <div >
          {media}
        </div>
      )}
      <figcaption>
        <h3 className="font-medium text-[1.75rem] leading-[200%] text-primary tracking-[-0.03em]">
          {heading}
        </h3>
        <p className="font-normal text-secondary text-base mt-2">{text}</p>
      </figcaption>
    </figure>
  );
};

{/* <svg
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
            </svg> */}