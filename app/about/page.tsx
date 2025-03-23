import Image from "next/image";
import portait from "@/public/aboutme.png";
import { geistMono } from "@/app/fonts";
import {svgIcons} from "@/app/fonts"
import {svgIconsInfo} from "@/app/fonts"
import {Concentrations} from "@/app/fonts"

export default function About() {

  const icons = Object.entries(svgIcons);




  return (
    <div className="px-4 pb-6 flex justify-center  ">
      <div className="flex flex-col sm:max-w-[40rem] lg:flex-row lg:max-w-[55rem]  2xl:max-w-[75rem] gap-4">
        <div className="flex flex-col gap-4 w-full ">
          <div className="aspect-square  overflow-hidden grayscale rounded-xl outline-1 outline-foreground/10">

          <Image
            src={portait}
            alt=""
            className="w-full object-cover object-top aspect-square scale-120"
          />

          </div>
         
          <div className="p-6 bg-foreground/5 rounded-xl outline-1 outline-foreground/10">
            <h1 className="text-text-primary text-2xl md:text-[2.5rem] font-semibold tracking-tighter mb-5">
              Michael Dresler
            </h1>
            <h2 className="text-white/70 text-lg tracking-normal mb-6">
              Designer & developer driven by curiousity. Always looking to add to my toolbox by exploring how things are made and how others work.
            </h2>
            <div className="flex gap-3 text-text-secondary">
            {icons.map(([key, value]) => {
              return (
                <a href="/" key={key} className="text-text-secondary hover:text-text-primary duration-150">
                  {value}
                </a>
              );
            })}
            </div>
          </div>
        </div>

          <div className="p-6 w-full bg-foreground/5 rounded-xl outline-1 outline-foreground/10">
            <h3
              className={`${geistMono.className} text-sm mb-4 font-semibold text-text-secondary/80 uppercase`}
            >
              About me
            </h3>
            <p className="text-text-secondary text-base text-pretty">
              In university, I discovered UX/UI Design as the ideal way to
              combine creativity with meaningful impact. My journey began with
              self-driven learning, developing empathy for users, mastering
              design processes, and creatively solving problems.<br /><br /> As I delved
              into XR through Immersive Media Design, I explored innovative
              approaches, integrating spatial awareness and audio to
              revolutionize how we design and interact with everyday technology.
              Noticing how everything we touch, see, and feel is shaped by
              design inspires me to continually challenge my thinking and
              explore new perspectives.
            </p>
            <ul className="mt-8 mb-16">
            {svgIconsInfo.map((item, index) => {
              return (
                <li key={index} className="flex flex-row text-text-secondary max-w-[25ch] \">
                  <div className="mr-2 mb-4">{item.icon}</div>
                  {item.label}
                </li>
              );
            })}
            </ul>


            <h3
              className={`${geistMono.className} text-sm mb-4 font-semibold tracking-wider text-text-secondary/80 uppercase`}
            >
              Concentrations
            </h3>
            <ul className="">
            {Concentrations.map((item, index) => {
              return (
                <li key={index} className="flex flex-row text-text-secondary pb-1 max-w-[25ch] ">
                  <div className="mr-2 mb-4">{item.icon}</div>
                  {item.label}
                </li>
              );
            })}
            </ul>

          </div>
      </div>
    </div>
  );
}
