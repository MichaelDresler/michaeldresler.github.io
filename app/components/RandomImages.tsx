"use client"
import { useState, useEffect } from "react";
import Image from "next/image";

const getRandomSize = () => ({
  width: Math.floor(Math.random() * (1000 - 400) + 400), // Random width between 100-400
  height: Math.floor(Math.random() * (1000 - 500) + 500), // Random height between 150-500
});

const images: string[] = [
  "https://images.pexels.com/photos/30442348/pexels-photo-30442348/free-photo-of-historic-cityscape-of-catania-sicily.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/30474533/pexels-photo-30474533/free-photo-of-rustic-italian-architecture-with-terra-cotta-rooftops.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/30129937/pexels-photo-30129937/free-photo-of-scenic-coastal-gazebo-overlooking-ocean-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/30157461/pexels-photo-30157461/free-photo-of-elegant-interior-of-markgrafliches-opernhaus.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/30415724/pexels-photo-30415724/free-photo-of-chicago-skyline-with-modern-architecture.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/30149581/pexels-photo-30149581/free-photo-of-exciting-rally-car-racing-in-beynam-ankara.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/30537410/pexels-photo-30537410/free-photo-of-abstract-aerial-view-of-ocean-water-texture.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/30688446/pexels-photo-30688446/free-photo-of-misty-mountain-peak-in-the-swiss-alps.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/30385824/pexels-photo-30385824/free-photo-of-lonely-commuter-waiting-in-a-subway-station.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/30678884/pexels-photo-30678884/free-photo-of-traditional-japanese-temple-rooftop-architecture.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/30361132/pexels-photo-30361132/free-photo-of-woman-standing-on-rocky-shoreline-in-floral-dress.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
];

const RandomImages = () => {
  // const [images, setImages] = useState<{ width: number; height: number }[]>([]);

  // useEffect(() => {
  //   const newImages = Array.from({ length: 15 }, () => getRandomSize());
  //   setImages(newImages);
  // }, []);

  return (
    <div className="relative w-screen  h-screen overflow-hidden bg-amber-50 box-content">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-3/4 overflow-hidden">
      <img
          src={images[0]}
          alt="reando"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  object-contain"
        />
      </div>
    
    {/* minimap */}
    <div className="absolute md:top-1/2 md:right-[8em] md:w-[88px] md:left-auto md:bottom-auto top-auto right-auto bottom-[5em] left-1/2 w-auto h-[80px]">
      {/* indicator */}
      <div className="absolute top-0 left-0 md:w-full md:h-[60px] border-red-600 border z-10 w-[60px] h-full "></div>

      {/* items */}
      <div className=" flex flex-row md:flex-col w-full h-full will-change-transform ">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`alt`}
          className=" w-[60px]  md:w-full md:h-[60px] cursor-pointer p-[4px] "
        />
      ))}

      </div>
    
    </div>
    </div>
  );
};

export default RandomImages;
