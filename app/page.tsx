"use client"
import { motion } from "framer-motion";
import { Thumbnail } from "./components/Thumbnail";
import surge from "@/public/surge.png"
import test from "@/public/webpage.png"

export default function Home() {
  return (
    <div className="px-4">
      <main className=" w-full h-[calc(50vh-var(--padding-top))] xl:h-[calc(100vh-var(--padding-top))] flex items-end mb-24  ">
        <motion.div
         initial={{ opacity: 0, y:70  }}
         animate={{ opacity: 1 ,y:0 }}
         whileInView="visible"
         viewport={{ once: true }}
         transition={{  opacity: { duration: 1  }, 
         y: { duration: 1, ease: [0.25,0,0.20,1] }}}
        >
          <h1 className="md:font-normal text-pretty  font-normal text-[2.5rem] md:text-[4rem] xl:text-[9rem]  text-text-primary tracking-[-0.06em] leading-[120%] md:leading-[95%] max-w-[15ch] ">
            Michael Dresler — <br /> Designer & Developer Based in Vancouver
          </h1>
          <h2 className=" mt-8 font-normal text-lg text-text-secondary tracking-[-0.02em] max-w-[37ch] ">
            My passion for design, coupled with a background in development, has
            pushed me to expand my approach beyond just aesthetics.
          </h2>
        </motion.div>
      </main>
     
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 pb-8" id="projects">
        <Thumbnail img={surge} textColor="text-white/80" bgColor="bg-[#0D0E13]" title="Sfu Surge" tags={["web design","development"]}/>
        <Thumbnail img={test}  textColor="text-white/80" bgColor="bg-[#293027]" title="Siat data vis" tags={["web design","development"]}/>


      </section>
    </div>
  );
}
