import { ProjectHero } from "../../../components/ProjectHero";
import * as surge from "@/content/surgeContent";
import { ImageContainer } from "@/app/components/ImageContainer";

import homenew from "/public/surge/home-new.png";
import homeold from "/public/surge/home-old.png";

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
        <section className="pb-12">


          <div className="py-12">
            <h2 className="clamp2 font-medium text-text-primary leading-[2em]">Hero Section</h2>
            <p className="text-lg text-text-secondary max-w-[64ch]">The goal was to create a more dynamic and intuitive online experience that better communicates the organization’s mission while maintaining an inclusive and welcoming tone. By refining the messaging and improving the overall user experience, the redesign helps SFU Surge inspire and support the next generation of tech innovators.</p>
          </div>
          
          



          <div className="grid grid-cols-1 gap-12 ">
            <ImageContainer img={homeold} tag="Old Site" caption="this is a caption"/>
            <ImageContainer img={homenew} tag="New Site" caption="this is a caption"/>

          </div>
        </section>
      </main>
    </div>
  );
}
