import Image from "next/image";
import portait from "@/public/image.png"
import Link from "next/link";
import { geistMono, svgIcons } from "../fonts";
export default function About() {


    return (
      <div>
        <main className="grid grid-cols-1 md:grid-cols-2 md:gap-24 mt-24  ">

          <div className="flex flex-col justify-end   ">
            <h1 className="text-text-primary text-[2.5rem] md:text-[4rem] xl:text-[7rem] font-medium tracking-tighter">About</h1>

            <p className="paragraph font-normal  md:text-lg text-pretty mb-16">Hi, I'm Michael, a designer and developer currently at Simon Fraser University’s Interactive Arts and Technology program. I'm passionate about merging my design and coding skills to create immersive experiences. I explore design history to inform my approach and understand the contextual evolution that shapes today's design landscape</p>
            
            <ul className="flex flex-col md:flex-row gap-4 md:gap-12 pb-12">
              <li ><Link className={`${geistMono.className} uppercase link md:text-lg flex flex-row items-center gap-2`} href={"/"}>{svgIcons.linkedin} LinkedIn</Link></li>
              <li ><Link className={`${geistMono.className} uppercase link md:text-lg flex flex-row items-center gap-2`} href={"/"}>{svgIcons.github} Github</Link></li>
              <li ><Link className={`${geistMono.className} uppercase link md:text-lg flex flex-row items-center gap-2`} href={"/"}>{svgIcons.email} Email</Link></li>
            </ul>

          </div>
          <Image className="md:max-h-[90%] md:w-[80%] object-[100%_10%] object-cover mx-auto row-start-1 overflow-hidden rounded-sm md:col-start-2" src={portait} quality={100} alt="hello"/>
           
          
        </main>
      </div>
    );
  }
  