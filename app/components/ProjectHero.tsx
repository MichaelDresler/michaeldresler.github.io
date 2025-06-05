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
          className=" rounded-xl w-full mx-auto h-full object-cover"
        />
      </div>

      <div className="mt-12 ">
        <div className="flex flex-col gap-6  ">
          <div className="font-medium text-7xl text-primary leading-[120%] tracking-[-0.03em] ">
            {title}
          </div>
          <div className="font-medium text-[2rem] tracking-[-0.02em] leading-[100%] text-secondary">
            {subtitle}
          </div>
        </div>
        <p className=" font-normal text-base text-secondary leading-[150%] text-pretty py-8 border-y-1 border-primary mt-[3.125rem]">
          {about.split("\n").map((line, i) => (
            <React.Fragment key={i}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
        <div className="my-8 text-secondary text-base">
          <ul className="flex flex-col gap-4 sm:gap-0 sm:flex-row justify-between">
            <div className="  ">
              <li className=" font-medium ">Deliverable</li>
              <li className="font-normal leading-[175%]">{deliverable}</li>
            </div>
            <div className="  ">
              <li className=" font-medium ">Year</li>
              <li className=" font-normal leading-[175%]">{timeline}</li>
            </div>
            <div className="  ">
              <li className=" font-medium ">Role</li>
              <li className="max-w-[20ch] leading-[175%] font-normal  ">
                {roles.map((role, index) => (
                  <div key={index}>{role}</div>
                ))}
              </li>
            </div>
            <div className="  ">
              <li className=" font-medium ">Team </li>
              <li className="max-w-[20ch] leading-[175%]  ">
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
