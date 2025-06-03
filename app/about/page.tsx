import Image from "next/image";
import portait from "@/public/aboutme.png";
import { geistMono } from "@/app/fonts";
import { svgIcons } from "@/app/fonts";
import { svgIconsInfo } from "@/app/fonts";
import { Concentrations } from "@/app/fonts";

export default function About() {
  const icons = Object.entries(svgIcons);

  return (
    <div className="px-4 pb-6 flex justify-center  ">
            <div className="fixed top-0 w-screen h-screen bg-radial-[at_50%_10%] from-[#ffffff] to-70% to-[#131313] opacity-8 -z-10 "></div>
       <div className="absolute w-full h-full top-0   -z-20">
        <svg
          viewBox="0 0 1804 1500"
          transform="translate(0, -1000)"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="901.998"
            cy="561.396"
            r="901.759"
            fill="url(#paint0_radial_2796_4719)"
            fillOpacity="0.05"
          />
          <defs>
            <radialGradient
              id="paint0_radial_2796_4719"
              cx="0"
              cy="0.0"
              r="0.9"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(901.998 561.396) rotate(90) scale(901.759)"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="flex flex-col sm:max-w-[40rem] lg:flex-row lg:max-w-[60rem]  2xl:max-w-[75rem] gap-4">
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
              Designer & developer driven by curiousity. Always looking to add
              to my toolbox by exploring how things are made and how others
              work.
            </h2>
            <ul className="mt-8 mb-4">
            {svgIconsInfo.map((item, index) => {
              return (
                <li
                  key={index}
                  className="flex flex-row text-white/70 max-w-[25ch] \"
                >
                  <div className="mr-2 mb-4">{item.icon}</div>
                  {item.label}
                </li>
              );
            })}
          </ul>



            
          </div>
        </div>

        <div className="p-6 w-full bg-foreground/5 rounded-xl outline-1 outline-foreground/10">
          <h3
            className={`${geistMono.className} text-sm mb-4 font-semibold text-text-secondary/80 uppercase`}
          >
            About me
          </h3>
          <p className="text-white/70 text-base text-pretty">
          Hi, I'm Michael! I started university as a computer science student because I gravitated toward the certainty that comes with logical, step-by-step problem-solving. That structure felt comfortable to me, but over time, I realized I had more of an urge to create — to take an idea, design it thoughtfully, and give it purpose.
            <br />
            <br />
            That’s when I decided I wanted to pursue design. My experiences in computer science gave me the tools to build and taught me how to break problems down, but design showed me how to use those tools more effectively and shape better solutions.
            <br />
            <br />
            Growing up, whenever I wanted to build something I always went to my dad for help. I’ve always admired his meticulous planning and his approach to problem-solving. He taught me that thoughtful planning and decision-making are just as important as execution. It's this balance between creativity and structure that drives my work.


            <br />
            <br />
            When I’m not designing or coding, you’ll find me hiking, snowboarding, camping, or playing video games.
            <br />
            <br />
            I'm always eager to learn and collaborate on projects. If my work resonates with you or you're working on something exciting, I'd love to connect!
          </p>

          <h3
            className={`${geistMono.className} text-sm mb-4 font-semibold text-text-secondary/80 uppercase mt-8`}
          >
            Contact
          </h3>

          <ul className="flex gap-3 text-text-secondary">
              {icons.map(([key, value]) => {
                return (
                  <a
                    href="/"
                    key={key}
                    className="text-text-secondary hover:text-text-primary duration-150"
                  >
                    {value}
                  </a>
                );
              })}
            </ul>
          

         
        </div>
      </div>
    </div>
  );
}
