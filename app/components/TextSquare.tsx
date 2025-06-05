type TextSquareProps = {
  heading: string;
  icon: React.ReactNode;
  text: string;
};
export const TextSquare = ({ heading, text,icon, }: TextSquareProps) => {
  return (
    <>
      <div className=" flex flex-col gap-3 max-w-[320px]  ">
        <div className="flex items-center gap-2">
          {icon}
          <h3 className="font-medium text-base  text-primary ">{heading}</h3>

        </div>

        <p className="text-secondary font-normal text-base">{text}</p>
      </div>
    </>
  );
};
