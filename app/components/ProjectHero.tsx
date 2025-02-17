import Image from "next/image";
import mike from "@/public/som.png"

type ProjectHeroProps = {
  title: string;
  Image?: null;
  timeline: string;
  role: string;
  names: string[];
};
export const ProjectHero = ({
  title,
  timeline,
  role,
  names,
}: ProjectHeroProps) => {
  return (
    <>
    
    <div className="relative aspect-square sm:aspect-[2.2/1] bg-indigo-700/20 rounded-3xl flex justify-center overflow-hidden ">
    <div className=" absolute w-full h-full  bg-opacity-10 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-40% from-indigo-600/30 to-indigo-400/10 to-80% backdrop-blur-sm "></div>
    {/* <Image
      src={mike}
      alt="hello"
      sizes="100vw"
      className=" w-full object-cover "
        /> */}

    </div>




      <div className="text-text-primary grid grid-cols-1 md:grid-cols-[0.5fr_0.6fr_1.25fr_0.5fr] mt-12">
        <div className="clamp2">{title}</div>
        <div className="md:col-start-3 md:col-span-full">
          <ul>
            <div className="flex flex-col md:flex-row justify-between gap-4 py-4 md:py-[1.5em] border-b border-foreground/20">
              <li>Client </li>
              <li className="clamp ">MoneyMaven </li>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-4 py-4 md:py-[1.5em] border-b border-foreground/20">
              <li>Year</li>
              <li className="clamp">{timeline}</li>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-4 py-4 md:py-[1.5em] border-b border-foreground/20">
              <li>Role </li>
              <li className="clamp">{role}</li>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-4 py-4 md:py-[1.5em] border-b border-foreground/20">
              <li>Team </li>
              <li className="max-w-[20ch] clamp text-left md:text-right">
                {names.map((name, index) => (
                  <div key={index}>{name}</div>
                ))}
              </li>
            </div>
          </ul>
          <p className="my-[3.5em] text-[26px] leading-[130%]">
            FundMate is a fintech platform that allows users to manage their
            finances in an intuitive and hassle-free manner. The platform offers
            a range of services including budget tracking, bill payments,
            investment management, and financial advice. Overall, the goal of
            the SavvyFin platform is to provide a user-friendly and customizable
            solution for managing personal finances, investments, and business
            finances. The platform aims to simplify financial management and
            empower users to make informed financial decisions.
          </p>
        </div>
      </div>
    </>
  );
};
