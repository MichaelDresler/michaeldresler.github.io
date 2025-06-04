
type ButtonProps = {
  title: string;
  link: string
  className?: string

};
export const Button = ({
  title,
  link,
  className

}: ButtonProps) => {
  return (
    (
      <a
        href={link}
        className={`${className} flex w-fit  gap-3 justify-center items-center bg-white/8 rounded-lg text-primary py-[10px] px-4  font-medium  group hover:bg-white/10 transition-all duration-300 border-1 border-primary/20`}
      >
        <div>{title} </div>
        <div className="group-hover:translate-x-1 duration-200 text-lg"> {`->`}</div>
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          className="size-6 rotate-180 stroke-white/60 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25"
          />
        </svg> */}
      </a>
    )

  );
};


