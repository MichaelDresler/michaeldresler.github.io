"use client"
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <main className=" w-full xl:h-[calc(100vh-200px)] flex items-end mb-24 ">
        <motion.div
         initial={{ opacity: 0, y:70  }}
         animate={{ opacity: 1 ,y:0 }}
         whileInView="visible"
         viewport={{ once: true }}
         transition={{  opacity: { duration: 1  }, 
         y: { duration: 1, ease: [0.25,0,0.20,1] }}}
        >
          <h1 className="md:font-semibold text-pretty  font-semibold text-[2.5rem] md:text-[4rem] xl:text-[6.5rem]  text-text-primary tracking-[-0.09em] leading-[120%] md:leading-[100%] ">
            Michael Dresler — <br /> Designer & Developer
          </h1>
          <h2 className=" mt-8 font-medium text-2xl text-text-secondary tracking-[-0.05em] max-w-[32ch] ">
            My passion for design, coupled with a background in development, has
            pushed me to expand my approach beyond just aesthetics.
          </h2>
        </motion.div>
      </main>
     
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2" id="projects">
        <div className="aspect-9/6 rounded-md bg-foreground/20"></div>
        <div className="aspect-9/6 rounded-md bg-foreground/20"></div>
        <div className="aspect-9/6 rounded-md bg-foreground/20"></div>
        <div className="aspect-9/6 rounded-md bg-foreground/20"></div>
      </section>
    </div>
  );
}
