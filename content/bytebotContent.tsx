import { StaticImageData } from "next/image";
// import images here, also makes it easier for the next Image component

export const heroContent = {
  title: "Bytebot",
  subtitle: "Arduino Interaction project",
  deliverable: "Arduino prototype",
  year: "2023",
  role: ["Lead Designer", "Lead Developer", "Hardware Prototyper"],
  names: [
    "Michael Dresler",
    "Jessica Chen",
    "Simon Wong Chung",
    "Karanjit Singh",
  ],
  about:
    "ByteBot is a game designed to teach children basic sequential logic. The player uses a modular block system to navigate a dog-themed car through a map while collecting rewards and avoiding obstacles. The project stemmed from the team’s interest in creating something that introduced basic programming concepts to kids not through screens, but through tangible interaction. The idea was to create a low-pressure way for kids to explore coding logic like sequencing and modularity, while also getting immediate feedback through physical movement.",
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
