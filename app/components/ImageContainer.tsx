import Image, { StaticImageData } from "next/image";
import { geistMono } from "../fonts";

type ImageContainerProps = {
  img: StaticImageData;
  tag: string;
  caption: string;
};
export const ImageContainer = ({ img, tag, caption }: ImageContainerProps) => {
  return (
    <>
      <figure >
        <div>

        </div>
        <Image
          src={img}
          alt=""
          sizes="80vw"
          quality={100}
          className=" bg-foreground/4  p-4 md:p-8 border border-foreground/10 rounded-sm md:rounded-lg w-full"
        ></Image>
        
        <div className="flex flex-row mt-4 gap-4 ">
          <span className={`uppercase w-fit h-fit text-[12px] text-text-secondary leading-[100%] bg-foreground/10 whitespace-nowrap p-2 border-foreground/10 border rounded-sm  ${geistMono.className}`}>
            {tag}
          </span>
          <figcaption className={` w-fit text-sm text-foreground/80   `}>{caption} </figcaption>
        </div>
      </figure>
    </>
  );
};
