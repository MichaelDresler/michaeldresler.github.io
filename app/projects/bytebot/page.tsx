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
import { TextSquare } from "@/app/components/TextSquare";
import Table from "@/app/components/Table";
import CarTable from "@/app/components/CarTable";

export default function Bytebot() {
  return (
    <main className="myclass flex flex-col gap-10">
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

      <section className="full-content rounded-2xl aspect-[1.4519/1] h-screen flex gap-2 w-auto py-6 overflow-hidden">
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
      </section>

      <section className="pb-10 pt-4">
        <TextBlock
          heading="From Sketch to Prototype"
          subheading="Contribution Breakdown"
          className="mb-14"
          text="I took on multiple roles throughout the project, from early design sketches to hands-on assembly. Here's how my contributions broke down across each phase:"
        />
        <div className="flex flex-col md:flex-row w-full md:justify-between gap-8">
          <TextSquare
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                className="size-9 stroke-white/60"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
            }
            heading="Design & Planning"
            text="Sketched the prototype, selected sensors, and defined dimensions and form. Planned how components would fit and function together."
          />
          <TextSquare
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                className="size-9 stroke-white/60"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
                />
              </svg>
            }
            heading="Arduino Development"
            text="Wrote Arduino code to handle sensor input and wireless communication. Created wiring diagrams to map out the circuit logic"
          />
          <TextSquare
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                className="size-9 stroke-white/60"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z"
                />
              </svg>
            }
            heading="Hardware Assembly"
            text="Assembled the physical prototype, integrating components and troubleshooting hardware to match the planned design."
          />
        </div>
      </section>

      <section className="py-20 border-t border-primary">
        <TextBlock
          className="mb-14"
          heading="Exploring Modularity options"
          subheading="Exploration & Iteration"
          text="During the research phase, our team got excited about the idea of using physical blocks as modular inputs and began exploring ways to detect different placements. We were particularly interested in how tangible interactions could enhance engagement, and brainstormed various low-cost methods to distinguish between block types—such as weight, shape, or embedded patterns"
        />
        <div className="flex flex-col gap-25">
          <FigureCaption
            heading="Home-made Pressure Sensors"
            text="The first idea that came to mind for distinguishing between blocks was using their weight. While browsing Arduino communities, I came across a tutorial that demonstrated how to create a DIY pressure sensor using just foam, graphite, cardboard, and wire. The low cost and accessibility of the materials made this approach especially appealing. However, after building and testing the sensor, I found the output to be far too noisy and inconsistent to provide reliable readings. Additionally, high-precision scales required to accurately measure such weights were well beyond our budget."
          />
          <FigureCaption
            media={
              <video
                src="/flow.mp4"
                controls
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-lg"
              />
            }
            heading="Copper Tape"
            text="We explored other options and came across a previous year's project that used copper tape to enable modularity. I built a small prototype to test how well it worked. The results were promising. Copper tape was reliable enough for our needs, cost less than other options, and was easy to find at craft stores like Michaels. Based on these factors, we decided to move forward with the copper tape approach."
          />
        </div>
      </section>
      <section className="pb-10">
        <TextBlock
          className="mb-14 pt-10 border-t border-primary"
          heading="Planning for Modularity"
          subheading="Technical Scoping & System Design"
          text="With the modularity concept in place, I needed to ensure the system could function reliably and scale as needed. This part of the process involved diving deeper into technical planning and mapping out how each component would work together"
        />
        <div className="flex flex-col gap-25">
          <FigureCaption
            heading="Mapping Interaction Flow"
            text="To better understand the technical requirements, I created a detailed interaction flow. This helped define how the system would respond to user inputs and guided the selection of necessary components."
          />

          <FigureCaption
            media={
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 pb-4">
                <div>
                  <Table />
                </div>
                <div>
                  <CarTable />
                </div>
              </div>
            }
            frame={false}
            heading="Planning for Hardware Constraints"
            text="I calculated how many Arduino pins each component would require to ensure the system could handle our desired functionality. Since the block sequencing logic hadn’t been finalized yet, I focused on calculating the hardware requirements based on the components I knew we would need. The total came out to 12, meaning I had 8 pins left to make the block logic work."
          />
        </div>
      </section>
    </main>
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
