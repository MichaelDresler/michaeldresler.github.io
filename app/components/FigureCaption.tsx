type FigureCaptionProps = {
  heading: string;
  text: string;
  media?: React.ReactNode;
  frame?: boolean; // Optional prop; default to true
};

export const FigureCaption = ({
  heading,
  text,
  media,
  frame = true, // default to true so legacy components work as expected
}: FigureCaptionProps) => {
  return (
    <figure className="flex flex-col gap-4">
      {frame ? (
        <div className="relative  overflow-hidden rounded-2xl  border border-[#252525] drop-shadow-[-2px_3px_10px_rgba(3,3,3,0.80)]">
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
          {media}
        </div>
      ) : (
        media
      )}
      <figcaption>
        <h3 className="font-medium text-[1.5rem] leading-[36px] text-primary tracking-[-0.03em]">
          {heading}
        </h3>
        <p className="font-normal text-secondary text-base mt-2">{text}</p>
      </figcaption>
    </figure>
  );
};
