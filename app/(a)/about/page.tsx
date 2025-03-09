import Image from "next/image";
import portait from "@/public/image.png"
import Link from "next/link";
import { geistMono, svgIcons } from "../../fonts";
export default function About() {


    return (
      <div>
        <main className="flex flex-row font-normal max-w-[1400px] h-[90vh] pt-24 gap-12 xl:gap-24 mx-auto overflow-hidden ">
          <div className=" h-full ">
          <Image className="grayscale  w-fit h-[80%]  object-cover   rounded-none " src={portait} quality={100} alt="hello"/>

          </div>
       
          <div className="flex flex-col   ">
            <h1 className="text-text-primary md:text-[2rem] leading-[100%]   tracking-[-0.05em] mb-6">About me</h1>

            <p className="  text-text-secondary max-w-[41ch] md:text-lg leading-[140%] text-pretty mb-64 tracking-[-0.02em]">Hi, I'm Michael, a designer and developer currently at Simon Fraser University’s Interactive Arts and Technology program. I'm passionate about merging my design and coding skills to create immersive experiences. I explore design history to inform my approach and understand the contextual evolution that shapes today's design landscape</p>
            
            <ul className="flex flex-col gap-2 tracking-[-0.04em] ">
              <h2 className="md:text-lg text-text-primary  mb-6">Contact</h2>
            <li ><Link className={` underline text-text-secondary/90 hover:text-text-primary duration-100 md:text-lg `} href={"/"}>Mail</Link></li>
              <li ><Link className={` underline text-text-secondary/90 hover:text-text-primary duration-100 md:text-lg `} href={"/"}>LinkedIn</Link></li>
              <li ><Link className={` underline text-text-secondary/90 hover:text-text-primary duration-100 md:text-lg `} href={"/"}> Github</Link></li>

            </ul>

          </div>
        
           
          
        </main>
      </div>
    );
  }
  