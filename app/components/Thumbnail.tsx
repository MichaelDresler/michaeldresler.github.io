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
export const Thumbnail = ({
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
        className={` relative aspect-[1.45/1] flex flex-col py-8 rounded-3xl 2xl:rounded-4xl ${textColor} ${bgColor} duration-300 group overflow-hidden `}
      >
        <div className=" bg-[linear-gradient(180deg,rgba(0,0,0,0)_31%,rgba(0,0,0,0.6)_75%,rgba(0,0,0,0.9)_90%,rgba(0,0,0,0.95)_100%)] w-full h-full absolute top-0 left-0 z-0 opacity-70"></div>

        {isImage(img) ? (
          <Image
            src={img}
            alt={"hello"}
            className="h-[80%] w-auto mx-auto my-auto object-cover group-hover:scale-[1.04] duration-300 relative"
          />
        ) : (
          // Render the component like <BytebotSVG />
          <div
            className={` relative ${width} mx-auto mt-[2.5rem] group-hover:scale-[1.04] duration-300 `}
          >
            {React.createElement(img)}
          </div>
        )}

        <div className="absolute px-10 bottom-8">
          <div
            className={`  text-2xl font-semibold tracking-tight max-w-[15ch] `}
          >
            {title}
          </div>
          <span className="text-white/60 text-lg">{description}</span>
        </div>
      </Link>
    </>
  );
};
