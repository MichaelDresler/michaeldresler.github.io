import { geistMono } from "../fonts";
import { Button } from "./Button";

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

      <div className="text-text-secondary grid grid-cols-1 md:grid-cols-[0.52fr_0.6fr_1.25fr_0.5fr] mt-12">
        <div className="flex flex-col gap-6  mb-8">
          <div className="font-semibold text-3xl tracking-tighter text-text-primary">{title}</div>
          {link && <Button className="hidden md:flex" title="View Site" link="https://sfusurge.com/"/> }
        </div>
        <div className="md:col-start-3 md:col-span-full font-normal">
          <ul>
            <div className="flex flex-col md:flex-row justify-between gap-4 py-4 md:py-[1.5em] border-b border-foreground/20">
              <li className="text-text-primary/90 font-medium">Year</li>
              <li className="clamp">{timeline}</li>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-4 py-4 md:py-[1.5em] border-b border-foreground/20">
              <li className="text-text-primary/90 font-medium">Role </li>
              <li className="max-w-[20ch] clamp text-left md:text-right">
                {roles.map((role, index) => (
                  <div key={index}>{role}</div>
                ))}
              </li>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-4 py-4 md:py-[1.5em] border-b border-foreground/20">
              <li className="text-text-primary/90 font-medium">Team </li>
              <li className="max-w-[20ch] clamp text-left md:text-right">
                {names.map((name, index) => (
                  <div key={index}>{name}</div>
                ))}
              </li>
            </div>
            {link && <Button className="md:hidden" title="View Site" link="https://sfusurge.com/"/>}
          </ul>
          <p className="my-[3.5em] font-normal text-[20px] leading-[145%] text-pretty">
            {about}
          </p>
        </div>
      </div>
    </>
  );
};
