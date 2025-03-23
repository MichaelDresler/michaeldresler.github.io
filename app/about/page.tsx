import Image from "next/image";
import portait from "@/public/image.png";
import { geistMono } from "@/app/fonts";
import {svgIcons} from "@/app/fonts"
import {svgIconsInfo} from "@/app/fonts"

export default function About() {

  const icons = Object.entries(svgIcons);
  const info = [
    "Vancouver, BC",
    "Interactive Arts and Technology, Simon Fraser University",
  ];



  return (
    <div className="px-4 pb-6 flex justify-center ">
      <div className="flex flex-col sm:max-w-[40rem] lg:flex-row lg:max-w-[60rem] gap-4 ">
        <div className="flex flex-col gap-4 w-full ">
          <div className="aspect-square  overflow-hidden grayscale rounded-xl outline-1 outline-foreground/10">

          <Image
            src={portait}
            alt=""
            className="w-full object-cover object-top aspect-square scale-120"
          />

          </div>
         
          <div className="p-6 bg-foreground/5 rounded-xl outline-1 outline-foreground/10">
            <h1 className="text-text-primary text-2xl md:text-[2.5rem] font-semibold tracking-tighter mb-6">
              Michael Dresler
            </h1>
            <h2 className="text-text-secondary text-lg tracking-tight mb-6">
              Bridging design and development has given me a genuine excitement
              to learn new skills and bring my ideas to life.
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
            <ul className="mt-24">
            {info.map((item, index) => {
              return (
                <li key={index} className="flex flex-row text-text-secondary max-w-[25ch] \">
                  <div className="mr-2 mb-4">{svgIconsInfo[index]}</div>
                  {item}
                </li>
              );
            })}
            </ul>

          </div>
      </div>
    </div>
  );
}
