import { geistMono } from "../fonts";

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
        className={`${geistMono.className} ${className} flex w-full  gap-4 md:justify-between uppercase border-b border-foreground/20 text-text-primary/80 hover:text-inverse textxs py-4 px-2 text-center font-normal  hover:bg-foreground/90 transition-all duration-300 `}
      >
        <div>{title}</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          className="size-6 rotate-180 stroke-foreground/20"
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
