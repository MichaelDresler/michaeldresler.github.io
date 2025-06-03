import { Button } from "./Button";
import Image, { StaticImageData } from "next/image";

type ProjectHeroProps = {
  title: string;
  subtitle: string;
  image: StaticImageData;
  deliverable:string;
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

    
      <div className="relative  bg-[#141414] p-12 -mt-24 full-content overflow-hidden ">
        <Image
      src={image}
      alt="hello"
      sizes="100vw"
      className=" rounded-xl w-[70%] mx-auto h-full object-cover"
        />
      </div>

      <div className="text-text-secondary mt-12 ">
        <div className="flex flex-col gap-4  ">
          <div className="font-semibold text-5xl tracking-[-0.05em] text-text-primary">
            {title}
          </div>
          <div className="font-medium text-xl tracking-[-0.03em] text-text-secondary/70">
            {subtitle}
          </div>
        </div>
        <p className=" font-normal text-[1rem] text-white/70 leading-[150%] text-pretty py-8 border-y-2 border-white/10 mt-12">
          {about}
        </p>
        <div className="my-8">
          <ul className="flex flex-col gap-4 sm:gap-0 sm:flex-row justify-between">
            <div className="  ">
              <li className="text-text-primary/90 font-medium ">
                Deliverable
              </li>
              <li className="">{deliverable}</li>
            </div>
            <div className="  ">
              <li className="text-text-primary/90 font-medium ">
                Year
              </li>
              <li className="">{timeline}</li>
            </div>
            <div className="  ">
              <li className="text-text-primary/90 font-medium ">
                Role{" "}
              </li>
              <li className="max-w-[20ch]   ">
                {roles.map((role, index) => (
                  <div key={index}>{role}</div>
                ))}
              </li>
            </div>
            <div className="  ">
              <li className="text-text-primary/90 font-medium ">
                Team{" "}
              </li>
              <li className="max-w-[20ch]   ">
                {names.map((name, index) => (
                  <div key={index}>{name}</div>
                ))}
              </li>
            </div>
            {link && (
              <Button
                className=" mt-12"
                title="View Site"
                link={link}
              />
            )}
          </ul>
        </div>
      </div>
    </>
  );
};
