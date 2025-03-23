"use client"
import { motion } from "framer-motion";
import { Thumbnail } from "./components/Thumbnail";
import surge from "@/public/surge.png"
import test from "@/public/webpage.png"
import { useEffect } from "react";

//  Michael Dresler — <br /> Designer & Developer Based in Vancouver

export default function Home() {

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = ""; // Reset when leaving
    };
  }, []);
  
  return (
    <div className="content-box ">
      <main className=" w-full aspect-video  flex items-end mb-24 pb-8  ">
        <motion.div
         initial={{ opacity: 0, y:70  }}
         animate={{ opacity: 1 ,y:0 }}
         whileInView="visible"
         viewport={{ once: true }}
         transition={{  opacity: { duration: 1  }, 
         y: { duration: 1, ease: [0.25,0,0.20,1] }}}
        >
          <h1 className="text-pretty  font-medium text-[2.5rem] md:text-[4rem] 2xl:text-[rem]  text-text-primary tracking-[-0.05em] leading-[120%]  md:leading-[110%] max-w-[95%] ">
           Hi, I'm Michael, a Designer and developer based in Vancouver, Bc.   My passion for design, coupled with a background in development, has
            pushed me to expand my approach beyond just aesthetics.            My passion for design, coupled with a background in development, has
            pushed me to expand my approach beyond just aesthetics.      
          </h1>
        
        </motion.div>
      </main>
     
      <section className="grid grid-cols-1 xl:grid-cols-2 gap-6  pb-12" id="projects">
        <Thumbnail img={surge} textColor="text-text-secondary" bgColor="bg-foreground/5" title="Sfu Surge" tags={["web design","development"]}/>
        <Thumbnail img={test}  textColor="text-text-secondary" bgColor="bg-foreground/5" title="Siat data vis" tags={["web design","development"]}/>


      </section>
    </div>
  );
}
