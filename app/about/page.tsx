import Image from "next/image";
import portait from "@/public/portrait.png"
import Link from "next/link";
import { svgIcons } from "../fonts";
export default function About() {


    return (
      <div>
        <main className=" w-full h-screen mt-48  mb-32">

          <div className="flex flex-col w-full justify-center items-center  ">
          <Image
            src={portait}
            alt="portait"
            className="  w-[40%] h-[50rem] object-cover "
            quality={100}
            />
            <p className="paragraph font-normal max-w-[1500px] text-4xl text-center text-pretty mb-16">Hi, I'm Michael, a designer and developer currently at Simon Fraser University’s Interactive Arts and Technology program. I'm passionate about merging my design and coding skills to create immersive experiences. I explore design history to inform my approach and understand the contextual evolution that shapes today's design landscape</p>
            <ul className="flex  gap-32">
              <li ><Link className="link text-xl flex flex-row items-center gap-2" href={"/"}>{svgIcons.linkedin} LinkedIn</Link></li>
              <li ><Link className="link text-xl flex flex-row items-center gap-2" href={"/"}>{svgIcons.github} Github</Link></li>
              <li ><Link className="link text-xl flex flex-row items-center gap-2" href={"/"}>{svgIcons.email} Email</Link></li>
            </ul>

          </div>
           
          
        </main>
      </div>
    );
  }
  