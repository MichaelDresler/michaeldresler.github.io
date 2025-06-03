import Image, { StaticImageData } from "next/image";

type FigureCaptionProps = {
  heading: string;
  subheading?: string;
  text: string;
};
export const FigureCaption = ({
  heading,
  text,
  subheading,
}: FigureCaptionProps) => {
  return (
    <>
      <figure className="mt-12 flex flex-col gap-4  ">
        <div className="p-12 bg-white/5 rounded-2xl aspect-video border border-white/10 ">
          <Image src={""} alt={""}></Image>
        </div>

        <figcaption>
          <h3 className="font-medium text-[1.5rem] leading-[36px] text-white/100 tracking-[-0.03em]">
            {heading}
          </h3>
          <p className=" font-normal text-color-text-secondary text-base mt-2">{text}</p>
        </figcaption>
      </figure>
    </>
  );
};
