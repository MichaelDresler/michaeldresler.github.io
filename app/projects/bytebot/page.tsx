import { ProjectHero } from "../../components/ProjectHero";
import * as bytebot from "@/content/bytebotContent";
import homenew from "/public/bytebot.png";
import { TextBlock } from "@/app/components/TextBlock";
import { FigureCaption } from "@/app/components/FigureCaption";
import { TextSquare } from "@/app/components/TextSquare";
import Table from "@/app/components/Table";
import CarTable from "@/app/components/CarTable";
import Flow from "@/public/flow.svg";
import Blockdimensions from "@/public/block-dimensions.svg";
import Consoledimensions from "@/public/console-dimensions.svg";
import WiringDiagram from "@/public/wiring-diagram.svg";
import CarAnimation from "@/app/components/caranimation";

export default function Bytebot() {
  return (
    <main className="constrain flex flex-col gap-10">
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

      <section className="medium-content w-full flex flex-col lg:flex-row gap-2 ">
        <div className="h-full w-full flex flex-col lg:flex-row gap-2">
          {/* Vertical video - left side on desktop, top on mobile - 50% width on desktop */}
          <div className="bg-[#0E0E0E] border border-white/10 p-8 rounded-2xl h-[80%] aspect-[9/16] lg:h-full lg:w-2/5">
            <CarAnimation />
          </div>

          {/* Horizontal videos container - right side on desktop, bottom on mobile - 50% width on desktop */}
          <div className="lg:w-3/5 flex flex-col gap-2">
            <div className="bg-[#0E0E0E] border border-white/10 p-20 rounded-2xl flex-1 min-h-64 overflow-hidden">
              <WiringDiagram />
            </div>
            <div className="bg-[#0E0E0E] border border-white/10 p-20 rounded-2xl flex-1 min-h-64 overflow-hidden">
              <WiringDiagram />
            </div>
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
          {bytebot.steps.map((step, index) => (
            <TextSquare
              key={index}
              icon={step.icon}
              heading={step.heading}
              text={step.text}
            />
          ))}
        </div>
      </section>

      <section className="py-20 border-t border-primary">
        <TextBlock
          className="mb-14"
          heading="Exploring Modularity options"
          subheading="Exploration & Iteration"
          text="During the research phase, our team got excited about the idea of using physical blocks as modular inputs and began exploring ways to detect different placements. We were particularly interested in how tangible interactions could enhance engagement, and brainstormed various low-cost methods to distinguish between block types such as weight, shape, or embedded patterns"
        />
        <div className="flex flex-col gap-25">
          <FigureCaption
            media={
              <video
                src="/sensor-trimmed.mp4"
                controls
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-lg"
              />
            }
            heading="Home-made Pressure Sensors"
            text="The first idea that came to mind for distinguishing between blocks was using their weight. While browsing Arduino communities, I came across a tutorial that demonstrated how to create a DIY pressure sensor using just foam, graphite, cardboard, and wire. The low cost and accessibility of the materials made this approach especially appealing. However, after building and testing the sensor, I found the output to be far too noisy and inconsistent to provide reliable readings."
          />
          <FigureCaption
            media={
              <video
                src="/tape.mp4"
                controls
                autoPlay
                loop
                muted
                playsInline
                className=" my-12 max-h-[80vh] mx-auto  rounded-xl overflow-hidden  "
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
          heading="Defining the unknowns"
          subheading="Technical Scoping & System Design"
          text="With the modularity concept in place, I needed to ensure the system could function reliably and scale as needed. This part of the process involved diving deeper into technical planning and mapping out how each component would work together"
        />
        <div className="flex flex-col gap-25 ">
          <FigureCaption
            breakout={true}
            media={<Flow className="2xl:max-w-[70%] mx-auto" />}
            heading="Mapping Interaction Flow"
            text="To better understand the technical requirements, I created an interaction flow. This helped define how the system would respond to user inputs and guided the selection of necessary components."
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

      <section className="pb-10">
        <TextBlock
          className="mb-14 pt-10 border-t border-primary"
          heading="Limited pins to work with"
          subheading="Challenge"
          text="After breaking down the requirements, I was left with only 8 pins for the block logic. I was going to have to figure out how I could allow each slot to send one of three commands: forwards, left, or right while not interfering with the inputs from other slots"
        />
        <div className="flex flex-col gap-25 ">
          <FigureCaption
            media={<WiringDiagram className="w-full" />}
            heading="Debugging signal interference"
            text="I started by imagining a system where each direction was mapped to a single Arduino pin. The challenge with this approach was figuring out how to check each slot individually without interference. Since each slot shared the same output, I needed a way to detect each slots individual output without signals from the others affecting the reading."
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
            frame={false}
            heading="Isolating input readings"
            text="To reliably detect which slot was active without signal interference from others, I implemented a sequential scanning approach in the Arduino code. Initially, all slots are set to an inactive state. Then, I cycle through each slot one at a time, temporarily activating a slot, reading and storing its input state, and then deactivating it before moving to the next."
          />
        </div>
      </section>
      <section>
        <TextBlock
          className="mb-14 pt-10 border-t border-primary"
          heading="Sketching and dimensioning"
          subheading="Challenge"
          text="Before I began building, I made it a priority to establish clear measurements and plan everything out on paper. In the past, I’ve jumped into physical builds too quickly and ended up running into avoidable issues. This time, I wanted assembly to feel less like problem-solving and more like following a well-thought-out set of instructions."
        />
        {/* <FigureCaption
            media={
              <div className="px-64 ">
            <CarAnimation />
              </div>

            }
            breakout={true}
            heading="Isolating input readings"
            text="To reliably detect which slot was active without signal interference from others, I implemented a sequential scanning approach in the Arduino code. Initially, all slots are set to an inactive state. Then, I cycle through each slot one at a time, temporarily activating a slot, reading and storing its input state, and then deactivating it before moving to the next."
          /> */}
      </section>
      <section className="medium-content w-full flex flex-col lg:flex-row gap-2 ">
        <div className="h-full w-full flex flex-col lg:flex-row gap-2">
          {/* Vertical video - left side on desktop, top on mobile - 50% width on desktop */}
          <div className="bg-[#0E0E0E] border border-white/10 p-8 rounded-2xl h-[80%] aspect-[9/16] lg:h-full lg:w-2/5">
            <CarAnimation />
          </div>

          {/* Horizontal videos container - right side on desktop, bottom on mobile - 50% width on desktop */}
          <div className="lg:w-3/5 flex flex-col gap-2">
            <div className="bg-[#0E0E0E] border border-white/10 rounded-2xl flex-1 overflow-hidden">
              <Blockdimensions className="h-full" />
            </div>
            <div className="bg-[#0E0E0E] border border-white/10 rounded-2xl flex-1 overflow-hidden">
              <Consoledimensions  />
            </div>
          </div>
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
