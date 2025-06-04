import React from "react";
import { Button } from "./Button";
import Image, { StaticImageData } from "next/image";

type ProjectHeroProps = {
  title: string;
  subtitle: string;
  image: StaticImageData;
  deliverable: string;
  timeline: string;
  roles: string[];
  names: string[];
  about: string;
  link?: string;
};
export const ProjectHero = ({
  title,
  subtitle,
  image,
  deliverable,
  timeline,
  roles,
  names,
  about,
  link,
}: ProjectHeroProps) => {
  return (
    <>
      <div className="relative  p-12 -mt-24 full-content overflow-hidden ">
        <Image
          src={image}
          alt="hello"
          sizes="100vw"
          className=" rounded-xl w-[70%] mx-auto h-full object-cover"
        />
      </div>

      <div className="mt-12 ">
        <div className="flex flex-col gap-5  ">
          <div className="font-medium text-5xl text-primary leading-[100%] tracking-[-0.03em] ">
            {title}
          </div>
          <div className="font-medium text-2xl tracking-[-0.02em] leading-[100%] text-secondary">
            {subtitle}
          </div>
        </div>
        <p className=" font-normal text-[1rem] text-secondary leading-[150%] text-pretty py-8 border-y-1 border-primary/20 mt-10">
          {about.split("\n").map((line, i) => (
            <React.Fragment key={i}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
        <div className="my-8 text-secondary">
          <ul className="flex flex-col gap-4 sm:gap-0 sm:flex-row justify-between">
            <div className="  ">
              <li className=" font-medium ">Deliverable</li>
              <li className="font-normal">{deliverable}</li>
            </div>
            <div className="  ">
              <li className=" font-medium ">Year</li>
              <li className=" font-normal">{timeline}</li>
            </div>
            <div className="  ">
              <li className=" font-medium ">Role</li>
              <li className="max-w-[20ch] font-normal  ">
                {roles.map((role, index) => (
                  <div key={index}>{role}</div>
                ))}
              </li>
            </div>
            <div className="  ">
              <li className=" font-medium ">Team </li>
              <li className="max-w-[20ch]   ">
                {names.map((name, index) => (
                  <div key={index}>{name}</div>
                ))}
              </li>
            </div>
          </ul>
          {link && (
            <Button className=" mt-12" title="View Live Site" link={link} />
          )}
        </div>
      </div>
    </>
  );
};
