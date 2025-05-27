import Image, { StaticImageData } from "next/image";
import { geistMono } from "../fonts";

type TextBlockProps = {
  heading: string;
  text: string;
};
export const TextBlock = ({ heading, text }: TextBlockProps) => {
  return (
    <>
      <div className="pt-24 pb-12 flex flex-col gap-3 ">
        <h3 className="font-semibold text-xl text-white tracking-tight">{heading}</h3>
        <p className="text-text-secondary text-[1.125rem]">{text}</p>
        
      </div>
    </>
  );
};
