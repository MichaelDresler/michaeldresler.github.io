
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
        className={`${className} flex w-fit  gap-4 justify-center  bg-white/2 rounded-lg text-secondary py-[10px] px-4  font-medium tracking-tight group hover:bg-white/60 transition-all duration-300 border-1 border-primary/30`}
      >
        <div>{title}</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          className="size-6 rotate-180 stroke-white/60 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25"
          />
        </svg>
      </a>
    )

  );
};


