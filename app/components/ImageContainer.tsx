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
          className=" bg-white bg-opacity-[4%] p-4 md:p-12 border border-white border-opacity-[2%] rounded-[1rem] w-full"
        ></Image>
        
        <div className="flex flex-row mt-4 gap-4 ">
          <span className={`uppercase w-fit h-fit text-[12px] text-white/90 leading-[100%] bg-white/10 whitespace-nowrap p-2 border-white/10 border rounded-md  ${geistMono.className}`}>
            {tag}
          </span>
          <figcaption className={` w-fit text-sm text-white/80   `}>{caption} </figcaption>
        </div>
      </figure>
    </>
  );
};
