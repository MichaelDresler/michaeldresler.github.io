import { ProjectHero } from "../../components/ProjectHero";
import * as bytebot from "@/content/bytebotContent";
import Image from "next/image";
import { ImageContainer } from "@/app/components/ImageContainer";
import img1 from "@/public/bytebot0.png";
import img2 from "@/public/bytebot1.png";

import homenew from "/public/bytebot.png";
import { TextBlock } from "@/app/components/TextBlock";
import { FigureCaption } from "@/app/components/FigureCaption";
import { div } from "framer-motion/client";

export default function Bytebot() {
  return (
    <div>
      <main className=" myclass">
        <ProjectHero
          title={bytebot.heroContent.title}
          image={homenew}
          subtitle={bytebot.heroContent.subtitle}
          deliverable={bytebot.heroContent.deliverable}
          timeline={bytebot.heroContent.year}
          roles={bytebot.heroContent.role}
          names={bytebot.heroContent.names}
          about={bytebot.heroContent.about}
        />

        <div className="full-content rounded-2xl aspect-[1.4519/1] gap-2 p-2 flex  ">
          <div className="bg-white/5 border border-white/10 p-20 aspect-[9/16] w-auto h-full rounded-2xl   ">
            {/* <Image src={img1} alt="" className="rounded-2xl h-full" /> */}
          </div>

          <div className=" h-full w-full rounded-2xl flex flex-col gap-2">
            <div className="bg-white/5 border border-white/10 p-20  w-full h-full rounded-2xl overflow-hidden">
              {/* <Image src={img2} alt="" className="rounded-2xl w-full h-full object-cover" /> */}
            </div>
            <div className="bg-white/5 border border-white/10 p-20  w-full h-full  rounded-2xl overflow-hidden">
              {/* <Image src={img2} alt="" className="rounded-2xl w-full h-full object-cover" /> */}
            </div>
          </div>
        </div>

        <section className="mt-24">
          <TextBlock
            heading="Designing and Developing"
            subheading="Contribution"
            text="As the Lead Designer and Developer, I was responsible for defining the project specifications, including selecting the necessary sensors, enabling wireless communication, and determining the dimensions and assembly of the form. Additionally, I created wiring diagrams, wrote the Arduino code, and assembled the prototype. Check out the final form below."
          />
        </section>
        <FigureCaption
          heading="Home-made Pressure Sensors"
          text="The first idea that came to mind for distinguishing between blocks was using their weight. While browsing Arduino communities, I came across a tutorial that demonstrated how to create a DIY pressure sensor using just foam, graphite, cardboard, and wire. The low cost and accessibility of the materials made this approach especially appealing. However, after building and testing the sensor, I found the output to be far too noisy and inconsistent to provide reliable readings. Additionally, high-precision scales required to accurately measure such weights were well beyond our budget."
        />
        <FigureCaption
          media={<video
            src="/flow.mp4"
            controls
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-lg"
          />} 
          heading="Copper Tape"
          text="Exploring other options, we came across a previous year's project that used copper tape to enable modularity. Piquing my interest, I created a small prototype to test its reliability.."
        />
      </main>
    </div>
  );
}

// <div className="grid grid-cols-1 gap-12 medium-content  ">
//   {/* <ImageContainer img={homeold} tag="Old Site" caption="this is a caption"/> */}
//   <ImageContainer
//     img={homenew}
//     tag="New Site"
//     caption="this is a caption"
//   />
// </div>
