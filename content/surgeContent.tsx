import { StaticImageData } from "next/image";
// import images here, also makes it easier for the next Image component


export const heroContent = {
  title: "SFU Surge Website",
  subtitle: "Website Redesign",
  deliverable: "Website",
  year: "2024",
  role: ["Web Design", "Front-end Development"],
  names: ["Michael Dresler","Christina Ranganit"],
  about:"This redesign of the SFU Surge website aimed to modernize its visual identity and enhance user engagement. SFU Surge is a student-led organization that empowers students to thrive in technology by fostering curiosity, building essential skills, and guiding them toward career success. The goal was to create a more dynamic and intuitive online experience that better communicates the organization’s mission while maintaining an inclusive and welcoming tone. By refining the messaging and improving the overall user experience, the redesign helps SFU Surge inspire and support the next generation of tech innovators."
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
