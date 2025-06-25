import { ProjectHero } from "../../components/ProjectHero";
import * as surge from "@/content/surgeContent";
import homenew from "/public/webpage.png";
import { TextBlock } from "@/app/components/TextBlock";
import { InteractiveCardList } from "@/app/components/IconCard/InteractiveCard";

export default function Surge() {
  return (
    <div>
      <main className=" constrain">
        <ProjectHero
          title={surge.heroContent.title}
          image={homenew}
          subtitle={surge.heroContent.subtitle}
          deliverable={surge.heroContent.deliverable}
          timeline={surge.heroContent.year}
          roles={surge.heroContent.role}
          names={surge.heroContent.names}
          about={surge.heroContent.about}
          link="https://sfusurge.com"
        />

        <div className="mt-32"></div>

        <TextBlock
          subheading="Contribution"
          heading="Designing and Developing"
          text="As the Lead Designer and Developer, I was responsible for defining the project specifications, including selecting the necessary sensors, enabling wireless communication, and determining the dimensions and assembly of the form. Additionally, I created wiring diagrams, wrote the Arduino code, and assembled the prototype. Check out the final form below."
        />

        <div className="grid grid-cols-1 gap-12 medium-content  ">
          {/* <ImageContainer img={homeold} tag="Old Site" caption="this is a caption"/> */}
          {/* <ImageContainer img={homenew} tag="New Site" caption="this is a caption"/> */}
        </div>
        <InteractiveCardList />
      </main>
    </div>
  );
}
