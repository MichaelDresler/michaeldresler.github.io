import Image, { StaticImageData } from "next/image";
import { geistMono } from "../fonts";

type TextBlockProps = {
  heading: string;
  subheading?:string;
  text: string;
};
export const TextBlock = ({ heading, text,subheading, }: TextBlockProps) => {
  return (
    <>
      <div className="mb-12 flex flex-col gap-4  ">
        {subheading && <span className="text-sm uppercase tracking-[2px] leading-[100%] text-white/50 font-normal">{subheading}</span>}
        <h3 className="font-medium text-[2rem] leading-[36px] text-white/100 tracking-[-0.03em]">{heading}</h3>
        <p className="text-white/70 text-base">{text}</p>
        
      </div>
    </>
  );
};
