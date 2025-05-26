import { ProjectHero } from "../../components/ProjectHero";
import * as surge from "@/content/surgeContent";
import { ImageContainer } from "@/app/components/ImageContainer";

import homenew from "/public/surge/home-new.png";
import { geistMono } from "@/app/fonts";


export default function projects() {
  return (
    <div>
      <main className=" myclass">
        <ProjectHero
          title={surge.heroContent.title}
          subtitle={surge.heroContent.subtitle}
          deliverable={surge.heroContent.deliverable}
          timeline={surge.heroContent.year}
          roles={surge.heroContent.role}
          names={surge.heroContent.names}
          about={surge.heroContent.about}
          link="https://sfusurge.com"
        />

          <div className="pt-24">
            <span className={`text-text-secondary text-base uppercase  pb-12 tracking-wider ${geistMono.className}`}>Landing Page</span>
            <h2 className="text-[40px] font-semibold text-text-primary tracking-tight mt-2  leading-[100%] mb-6">First Impressions</h2>
            <p className="text-[16px] font-normal text-white/70 max-w-[50ch] 2xl:text-lg mb-12">The goal was to create a more dynamic and intuitive online experience that better communicates the organization’s mission while maintaining an inclusive and welcoming tone. By refining the messaging and improving the overall user experience, the redesign helps SFU Surge inspire and support the next generation of tech innovators.</p>
          </div>
          


          <div className="grid grid-cols-1 gap-12 medium ">
            {/* <ImageContainer img={homeold} tag="Old Site" caption="this is a caption"/> */}
            <ImageContainer img={homenew} tag="New Site" caption="this is a caption"/>

          </div>

      </main>
    </div>
  );
}
