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
        className={`${className} flex w-full  gap-4 justify-center uppercase bg-white/25 rounded-md text-text-primary/80 py-4 px-4 text-center font-medium tracking-wider group hover:bg-foreground/15 transition-all duration-300 border-1 border-white/10`}
      >
        <div>{title}</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          className="size-6 rotate-180 stroke-foreground/80  "
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
