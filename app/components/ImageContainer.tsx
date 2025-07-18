import Image, { StaticImageData } from "next/image";

type ImageContainerProps = {
  img: StaticImageData;
  tag: string;
  caption: string;
};
export const ImageContainer = ({ img, tag, caption }: ImageContainerProps) => {
  return (
    <>
      <figure>
        <div></div>
        <Image
          src={img}
          alt=""
          sizes="80vw"
          quality={100}
          className=" bg-foreground/3  p-4 md:p-12 rounded-3xl w-full"
        ></Image>

        <div className="flex flex-row mt-4 gap-4 ">
          <span
            className={`uppercase w-fit h-fit text-[12px] text-text-secondary leading-[100%] bg-foreground/10 whitespace-nowrap p-2 border-foreground/10 border rounded-sm `}
          >
            {tag}
          </span>
          <figcaption className={` w-fit text-sm text-foreground/80   `}>
            {caption}{" "}
          </figcaption>
        </div>
      </figure>
    </>
  );
};
