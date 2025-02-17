import { StaticImageData } from "next/image";
// import images here, also makes it easier for the next Image component


export const heroContent = {
  title: "Bonding Cards",
  client: "some client",
  year: "2024",
  Role: "UI Designer",
  names: ["Michael Dresler","Simon Chung","Madeline Ho", "Christina Ranganit"]
};

export type CompetitionData = {
  title: string;
  description: string;
  winner: string;
  img: StaticImageData;
};



export const imgButtons = [
  {
    img: "/imgs/2024_OC.PNG",
    alt: "2024 OC team pic",
    text: "2024 RECAP",
    link: "/history/recap/",
  },
  {
    img: "/imgs/CaseIT_On3.PNG",
    alt: "2024 OC team pic",
    text: "2024 MEDIA GALLERY",
    link: "/history/media/",
  },
];
