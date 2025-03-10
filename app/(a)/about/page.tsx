import Image from "next/image";
import portait from "@/public/image.png";
import Link from "next/link";

export default function About() {
  return (
    <div>
      <main className="flex flex-col lg:flex-row font-normal max-w-[1400px] pt-12 gap-8 lg:gap-12 xl:gap-24 mx-auto  ">
        <div className=" h-full max-w-[500px] ">
          <Image
            className="  w-fit h-[80%]  object-cover   rounded-none "
            src={portait}
            quality={100}
            alt="hello"
          />
        </div>

        <div className="flex flex-col flex-1 justify-between lg:gap-0 gap-12 ">

          <div>
            <h1 className="text-text-primary md:text-[2rem] leading-[100%]   tracking-[-0.05em] mb-6">
              About me
            </h1>

            <p className="  text-text-secondary max-w-[41ch] md:text-lg leading-[140%] text-pretty  tracking-[-0.02em]">
              Hi, I'm Michael, a designer and developer currently at Simon
              Fraser University’s Interactive Arts and Technology program. I'm
              passionate about merging my design and coding skills to create
              immersive experiences. I explore design history to inform my
              approach and understand the contextual evolution that shapes
              today's design landscape
            </p>
          </div>

          <ul className="flex flex-col gap-2 tracking-[-0.04em] pb-12 ">
            <h2 className="md:text-lg text-text-primary  md:mb-6">Contact</h2>
            <li>
              <Link
                className={` underline text-text-secondary/90 hover:text-text-primary duration-100 md:text-lg `}
                href={"/"}
              >
                Mail
              </Link>
            </li>
            <li>
              <Link
                className={` underline text-text-secondary/90 hover:text-text-primary duration-100 md:text-lg `}
                href={"/"}
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                className={` underline text-text-secondary/90 hover:text-text-primary duration-100 md:text-lg `}
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
