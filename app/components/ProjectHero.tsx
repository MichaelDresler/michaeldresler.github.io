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

    
      <div className="relative full-content -mt-24 aspect-square sm:aspect-[2.2/1] bg-white/10 rounded-xl flex justify-center overflow-hidden z-30">
        <Image
      src={image}
      alt="hello"
      sizes="100vw"
      className=" w-full object-cover "
        />
      </div>

      <div className="text-text-secondary ">
        <div className="flex flex-col gap-4  my-16">
          <div className="font-semibold text-center text-4xl tracking-[-0.05em] text-text-primary">
            {title}
          </div>
          <div className="font-normal text-center text-2xl tracking-[-0.04em] text-text-secondary">
            {subtitle}
          </div>
        </div>
        <h3 className="text-xl text-white font-semibold mb-4 tracking-tight">Description</h3>
        <p className=" font-normal text-[1.125rem] text-white/50 leading-[160%] text-pretty pb-8 border-b-2 border-white/15">
          {about}
        </p>
        <div className=" font-normal my-8">
          <ul>
            <div className="grid grid-cols-2 gap-4 py-4 md:py-[1.5em] border-b border-foreground/10">
              <li className="text-text-primary/60 font-medium uppercase tracking-wider">
                Deliverable
              </li>
              <li className="text-[18px]">{deliverable}</li>
            </div>
            <div className="grid grid-cols-2 gap-4 py-4 md:py-[1.5em] border-b border-foreground/10">
              <li className="text-text-primary/60 font-medium uppercase tracking-wider">
                Year
              </li>
              <li className="text-[18px]">{timeline}</li>
            </div>
            <div className="grid grid-cols-2 gap-4 py-4 md:py-[1.5em] border-b border-foreground/10">
              <li className="text-text-primary/60 font-medium uppercase tracking-wider">
                Role{" "}
              </li>
              <li className="max-w-[20ch] text-[18px]  ">
                {roles.map((role, index) => (
                  <div key={index}>{role}</div>
                ))}
              </li>
            </div>
            <div className="grid grid-cols-2 gap-4 py-4 md:py-[1.5em] border-b border-foreground/10">
              <li className="text-text-primary/60 font-medium uppercase tracking-wider">
                Team{" "}
              </li>
              <li className="max-w-[20ch] text-[18px]  ">
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
