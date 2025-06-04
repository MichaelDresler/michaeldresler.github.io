import Image, { StaticImageData } from "next/image";

type TextBlockProps = {
  heading: string;
  subheading?:string;
  text: string;
};
export const TextBlock = ({ heading, text,subheading, }: TextBlockProps) => {
  return (
    <>
      <div className="mb-12 flex flex-col gap-4  ">
        {subheading && <span className="text-sm uppercase tracking-[2px] leading-[100%] text-secondary/70 font-normal">{subheading}</span>}
        <h3 className="font-medium text-[2rem] leading-[36px] text-primary tracking-[-0.01em]">{heading}</h3>
        <p className="text-secondary font-normal text-base">{text}</p>
        
      </div>
    </>
  );
};
