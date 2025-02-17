import Image from "next/image";
import portait from "@/public/image.png"
import Link from "next/link";
import { geistMono, svgIcons } from "../fonts";
import {ProjectHero} from "../components/ProjectHero";
import * as bbb from "@/content/bondingCards";
export default function projects() {



    return (
      <div>
        <main className=" ">
          <ProjectHero title={bbb.heroContent.title} timeline={bbb.heroContent.year} role={bbb.heroContent.Role} names={bbb.heroContent.names}/>

        </main>

       
      </div>
    );
  }
  