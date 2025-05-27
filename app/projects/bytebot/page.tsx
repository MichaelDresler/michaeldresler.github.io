import { ProjectHero } from "../../components/ProjectHero";
import * as bytebot from "@/content/bytebotContent";
import Image from "next/image";
import { ImageContainer } from "@/app/components/ImageContainer";
import img1 from "@/public/bytebot0.png"
import img2 from "@/public/bytebot1.png"

import homenew from "/public/bytebot.png";
import { TextBlock } from "@/app/components/TextBlock";

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

        <TextBlock
          heading="Designing and Developing"
          text="As the Lead Designer and Developer, I was responsible for defining the project specifications, including selecting the necessary sensors, enabling wireless communication, and determining the dimensions and assembly of the form. Additionally, I created wiring diagrams, wrote the Arduino code, and assembled the prototype. Check out the final form below."
        />

        <div className="medium-content rounded-2xl aspect-[1.4519/1]  mb-24 gap-4 p-8 flex  ">

          <div className="bg-green-700/10 aspect-[9/16] w-auto h-full rounded-2xl   ">
          <Image 
          src={img1}
          alt=""
          className="rounded-2xl h-full"
          />
          </div>

          <div className=" h-full w-full rounded-2xl flex flex-col gap-4">
            <div className="bg-green-700/10  w-full h-full rounded-2xl overflow-hidden">
                      <Image 
          src={img2}
          alt=""
          className="rounded-2xl w-full"
          />
            </div>
            <div className="bg-green-700/10  w-full h-full  rounded-2xl overflow-hidden">
                      <Image 
          src={img2}
          alt=""
          className="rounded-2xl w-full"
          />
            </div>
          </div>

        </div>


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