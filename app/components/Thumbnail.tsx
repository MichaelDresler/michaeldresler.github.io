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
      <Link href={"/projects/surge"} className={` flex flex-col gap-4 py-4 rounded-xl ${textColor} ${bgColor} outline-2 outline-foreground/7 hover:outline-foreground/10 duration-300 group`}>
      
      <div className=" grid grid-cols-2 w-full  px-8">
        <div className={`uppercase  text-sm ${geistMono.className} `}>{title}</div>
          <div>
          {tags.map((tag, index)=>(
              <div key={index}className={`w-fit uppercase  text-sm ${geistMono.className} `} >{tag}</div>
            ))}
          </div>
        </div>

      <Image src={img} alt={"hello"} className="h-[80%] 2xl:h-[80%] mt-auto mx-auto object-cover w-auto group-hover:scale-[1.04] duration-300 px-4"/>
      </Link>
    </>
  );
};
