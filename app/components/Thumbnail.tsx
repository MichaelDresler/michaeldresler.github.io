import { geistMono } from "../fonts";
import Image, { StaticImageData } from "next/image";

import Link from "next/link";

type ThumbnailProps = {
  title: string;
  tags: string[];
  img: StaticImageData;
  bgColor:string;
  textColor:string;

};
export const Thumbnail = ({
  title,
  tags,
  img,
  bgColor,
  textColor

}: ThumbnailProps) => {
  return (
    <>
      <Link href={"/projects/surge"} className={` aspect-[16/9] flex flex-col gap-8 p-5 rounded-md ${textColor} ${bgColor} outline-1 outline-foreground/7 hover:outline-foreground/10 duration-300 group`}>
      
      <div className=" grid grid-cols-2 w-full  ">
        <div className={`uppercase  text-sm ${geistMono.className} max-w-[15ch] `}>{title}</div>
          <div>
          {tags.map((tag, index)=>(
              <div key={index}className={`w-fit uppercase  text-sm ${geistMono.className} `} >{tag}</div>
            ))}
          </div>
        </div>

      <Image src={img} alt={"hello"} className="h-[80%] 2xl:h-[85%] mt-auto mx-auto object-cover w-auto group-hover:scale-[1.04] duration-300 "/>
      </Link>
    </>
  );
};
