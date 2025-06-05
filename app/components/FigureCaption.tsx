type FigureCaptionProps = {
  heading: string;
  text: string;
  media?: React.ReactNode; // This lets you pass in <img />, <video />, or any JSX
};

export const FigureCaption = ({
  heading,
  text,
  media,
}: FigureCaptionProps) => {
  return (
    <figure className=" flex flex-col gap-4">
      <div className="px-22 py-20 bg-white/5 rounded-lg aspect-video border border-white/10 drop-shadow-[-2px_3px_20px_rgba(3,3,3,1)]">
        {media}
      </div>
      <figcaption>
        <h3 className="font-medium text-[1.5rem] leading-[36px] text-primary tracking-[-0.03em]">
          {heading}
        </h3>
        <p className="font-normal text-secondary text-base mt-2">{text}</p>
      </figcaption>
    </figure>
  );
};
