import { geistMono } from "../fonts";

type ProjectHeroProps = {
  title: string;
  Image?: null;
  timeline: string;
  roles: string[];
  names: string[];
  about: string;
  link?: string;
};
export const ProjectHero = ({
  title,
  timeline,
  roles,
  names,
  about,
  link,
}: ProjectHeroProps) => {
  return (
    <>
      <div className="relative aspect-square sm:aspect-[2.2/1] bg-indigo-700/20 rounded-xl flex justify-center overflow-hidden ">
        <div className=" absolute w-full h-full  bg-opacity-10 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-40% from-indigo-600/30 to-indigo-400/10 to-80% backdrop-blur-sm "></div>
        {/* <Image
      src={mike}
      alt="hello"
      sizes="100vw"
      className=" w-full object-cover "
        /> */}
      </div>

      <div className="text-text-secondary grid grid-cols-1 md:grid-cols-[0.5fr_0.6fr_1.25fr_0.5fr] mt-12">
        <div className="flex flex-col gap-6  mb-8">
          <div className="clamp2 font-medium text-text-primary">{title}</div>
          {link && (
            <a
              href={link}
              className={`${geistMono.className} hidden md:flex w-full justify-center gap-4 md:justify-between ring ring-white/30 uppercase bg-foreground/20 rounded-md text-white/80 p-3 text-center font-semibold tracking-tighter hover:bg-foreground/15 transition-all duration-300`}
            >
              <div> View Site</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25"
                />
              </svg>
            </a>
          )}
        </div>
        <div className="md:col-start-3 md:col-span-full">
          <ul>
            <div className="flex flex-col md:flex-row justify-between gap-4 py-4 md:py-[1.5em] border-b border-foreground/20">
              <li className="text-text-primary">Year</li>
              <li className="clamp">{timeline}</li>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-4 py-4 md:py-[1.5em] border-b border-foreground/20">
              <li className="text-text-primary">Role </li>
              <li className="max-w-[20ch] clamp text-left md:text-right">
                {roles.map((role, index) => (
                  <div key={index}>{role}</div>
                ))}
              </li>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-4 py-4 md:py-[1.5em] border-b border-foreground/20">
              <li className="text-text-primary">Team </li>
              <li className="max-w-[20ch] clamp text-left md:text-right">
                {names.map((name, index) => (
                  <div key={index}>{name}</div>
                ))}
              </li>
            </div>
            {link && (
            <a
              href={link}
              className={`${geistMono.className} md:hidden mt-10 flex w-full justify-center gap-4 md:justify-between ring ring-white/30 uppercase bg-foreground/20 rounded-md text-white/80 p-3 text-center font-semibold tracking-tighter hover:bg-foreground/15 transition-all duration-300`}
            >
              <div> View Site</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25"
                />
              </svg>
            </a>
          )}
          </ul>
          <p className="my-[3.5em] text-[26px] leading-[130%] text-pretty">
            {about}
          </p>
        </div>
      </div>
    </>
  );
};
