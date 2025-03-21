import Image from "next/image";
import portait from "@/public/image.png";
import Link from "next/link";
import { geistMono } from "@/app/fonts";

export default function About() {
  return (
    <div>
      <main className=" w-screen  md:aspect-video  md:max-h-[calc(100dvh-var(--padding-top))] about-padding  pb-12 md:pb-0 xl:pt-4 grid gap-x-6 xl:gap-x-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-12   ">

        <div className=" h-full lg:col-start-8 lg:col-span-5  overflow-hidden">
          <Image
            className=" grayscale md:max-w-[400px]  lg:max-w-none object-cover object-[50%_10%] sm:object-center w-full h-full  rounded-none "
            src={portait}
            quality={100}
            alt="hello"
          />
        </div>

        <span className={`hidden lg:flex row-start-1 col-start-1 text-xl text-text-primary leading-[100%] ${geistMono.className}`}>01</span>

        <div className="mt-8 sm:mt-0 flex flex-col flex-1 justify-between lg:gap-0 gap-12 lg:col-start-3 xl:col-start-4 lg:col-span-4 lg:row-start-1  ">

          <div>
            <h1 className="text-text-primary text-2xl font-medium  leading-[100%]   tracking-[-0.05em] mb-4 md:mb-6">
              About me
            </h1>

            <p className="  text-text-secondary max-w-[41ch] 2xl:text-lg leading-[140%] text-pretty  tracking-[-0.02em]">
              Hi, I'm Michael, a designer and developer currently at Simon
              Fraser University’s Interactive Arts and Technology program. I'm
              passionate about merging my design and coding skills to create
              immersive experiences. I explore design history to inform my
              approach and understand the contextual evolution that shapes
              today's design landscape.             Hi, I'm Michael, a designer and developer currently at Simon
              Fraser University’s Interactive Arts and Technology program. I'm

            </p>
          </div>

          <ul className="flex flex-col gap-2  xl:pb-[2rem]  ">
            <h2 className="md:text-lg  font-medium text-text-primary tracking-[-0.02em] md:mb-6">Contact</h2>
            <li>
              <Link
                className={` ${geistMono.className} uppercase text-sm underline text-text-secondary/90 hover:text-text-primary duration-100  `}
                href={"/"}
              >
                Mail
              </Link>
            </li>
            <li>
              <Link
                className={` ${geistMono.className} uppercase text-sm underline text-text-secondary/90 hover:text-text-primary duration-100  `}
                href={"/"}
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                className={` ${geistMono.className} uppercase text-sm underline text-text-secondary/90 hover:text-text-primary duration-100  `}
                href={"/"}
              >
                {" "}
                Github
              </Link>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
