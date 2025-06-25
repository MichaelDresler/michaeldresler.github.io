import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import React from "react";

type ThumbnailProps = {
  title: string;
  description: string;
  img: StaticImageData | React.ComponentType;
  width?: string;
  bgColor: string;
  textColor: string;
  link: string;
};
export const Thumbnail1 = ({
  title,
  description,
  img,
  width,
  bgColor,
  textColor,
  link,
}: ThumbnailProps) => {
  const isImage = (src: unknown): src is StaticImageData =>
    typeof src === "object" && src !== null && "src" in src;

  return (
    <>
      <Link
        href={link}
        className={` relative aspect-square sm:aspect-[1.38/1] flex flex-col  rounded-xl ${textColor} bg-white/5 duration-300 group overflow-hidden p-5 sm:p-8 border border-white/15 hover:bg-white/8`}
      >
        <div className="mb-5">
          <div
            className={` text-lg sm:text-xl font-semibold tracking-tight max-w-[15ch] `}
          >
            {title}
          </div>
          <span className="text-secondary text-base sm:text-lg">
            {description}
          </span>
        </div>

        <div
          className={` relative aspect-[1.45/1]   rounded-2xl ${bgColor} duration-300 group overflow-hidden shadow-2xl my-auto`}
        >
          {isImage(img) ? (
            <Image
              src={img}
              alt={"hello"}
              className="h-[80%] w-auto mx-auto my-auto object-cover group-hover:scale-[1.04] duration-300 relative"
            />
          ) : (
            // Render the component like <BytebotSVG />
            <div
              className={` relative ${width} mx-auto mt-[1.25rem] group-hover:scale-[1.04] duration-300  `}
            >
              {React.createElement(img)}
            </div>
          )}
        </div>
      </Link>
    </>
  );
};
