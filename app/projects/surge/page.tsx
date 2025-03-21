import { ProjectHero } from "../../components/ProjectHero";
import * as surge from "@/content/surgeContent";
import { ImageContainer } from "@/app/components/ImageContainer";

import homenew from "/public/surge/home-new.png";


export default function projects() {
  return (
    <div>
      <main className=" ">
        <ProjectHero
          title={surge.heroContent.title}
          timeline={surge.heroContent.year}
          roles={surge.heroContent.role}
          names={surge.heroContent.names}
          about={surge.heroContent.about}
          link="https://sfusurge.com"
        />
        <section className="pb-12 ">


          <div className="">
            <h2 className="text-[32px] font-semibold text-text-primary tracking-tight leading-[2em]">Hero Section</h2>
            <p className="text-[16px] font-normal text-text-secondary max-w-[55ch]">The goal was to create a more dynamic and intuitive online experience that better communicates the organization’s mission while maintaining an inclusive and welcoming tone. By refining the messaging and improving the overall user experience, the redesign helps SFU Surge inspire and support the next generation of tech innovators.</p>
          </div>
          


          <div className="grid grid-cols-1 gap-12 ">
            {/* <ImageContainer img={homeold} tag="Old Site" caption="this is a caption"/> */}
            <ImageContainer img={homenew} tag="New Site" caption="this is a caption"/>

          </div>
        </section>
      </main>
    </div>
  );
}
