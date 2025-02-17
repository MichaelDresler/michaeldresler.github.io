import Image from "next/image";
import portait from "@/public/image.png"
import Link from "next/link";

import * as surge from "@/content/surge";
import { ProjectHero } from "@/app/components/ProjectHero";


export default function projects() {



    return (
      <div>
        <main className="relative overflow-hidden ">
          <ProjectHero title={surge.heroContent.title} timeline={surge.heroContent.year} role={surge.heroContent.Role} names={surge.heroContent.names}/>

        </main>

       
      </div>
    );
  }
  