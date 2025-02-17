"use client"
import { useState, } from "react";
import Image from "next/image";
import { animate, motion, useMotionValue } from "framer-motion";
import React from "react";
import { image } from "framer-motion/client";



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
  "https://images.pexels.com/photos/30442348/pexels-photo-30442348/free-photo-of-historic-cityscape-of-catania-sicily.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/30474533/pexels-photo-30474533/free-photo-of-rustic-italian-architecture-with-terra-cotta-rooftops.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/30129937/pexels-photo-30129937/free-photo-of-scenic-coastal-gazebo-overlooking-ocean-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/30157461/pexels-photo-30157461/free-photo-of-elegant-interior-of-markgrafliches-opernhaus.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/30415724/pexels-photo-30415724/free-photo-of-chicago-skyline-with-modern-architecture.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/30149581/pexels-photo-30149581/free-photo-of-exciting-rally-car-racing-in-beynam-ankara.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/30537410/pexels-photo-30537410/free-photo-of-abstract-aerial-view-of-ocean-water-texture.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/30688446/pexels-photo-30688446/free-photo-of-misty-mountain-peak-in-the-swiss-alps.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/30385824/pexels-photo-30385824/free-photo-of-lonely-commuter-waiting-in-a-subway-station.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
];

const transition = {
  
  type: 'spring',
  duration:0.1,
  bounce:0,

}

const RandomImages = () => {
  const [selectedImage, setSelectedImage] = useState<string>(images[0]);
  const [imageIndex, setImageIndex] = useState<number>(0);
  const [dragging, setDragging] = useState<boolean>(false);
  const dragX = useMotionValue(0)
  
  const dragStart = ()=>{
    setDragging(true)
  }
  const dragEnd = () => {
    setDragging(false);
    const xValue = dragX.get();
    const imageWidth = 60;  // The width of each image
    const imagesDragged = Math.round(xValue / imageWidth);  // Calculate how many images were dragged

    if(Math.abs(imagesDragged) >= images.length ){
      setSelectedImage(images[images.length-1])
      setImageIndex(images.length-1)
    }
    else{
      setSelectedImage(images[Math.abs(imagesDragged)])
      setImageIndex(Math.abs(imagesDragged))
    }

  

    console.log(imagesDragged)
  };

  const changeOnClick = (index:number)=>{
    setImageIndex(index)
    setSelectedImage(images[index])
    animate(dragX, -index * 60, { type: "spring", stiffness: 300, damping: 30 });

  }


  return (
    <div className="relative w-screen  h-screen overflow-hidden bg-amber-50 box-content">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-3/4 overflow-hidden">
      <img
          src={selectedImage}
          alt="reando"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  object-contain"
        />
      </div>
    
    {/* minimap */}
    <div  className="absolute md:top-1/2 md:right-[8em] md:w-[88px] md:left-auto md:bottom-auto top-auto right-auto bottom-[5em] left-1/2 w-auto h-[88px] ">
      {/* indicator */}
      <div className="absolute top-0 left-0 md:w-full md:h-[60px] border-black border z-10 w-[60px] h-full pointer-events-none"></div>

      {/* items */}
      <motion.div
      drag="x"
      dragConstraints = {{
        left:-(images.length-1) *60,  // Allow dragging out to the left
        right: 0,  // Allow dragging out to the right (for the initial position)
      }}

      dragTransition={{
        power: 0,
        timeConstant:100,
        modifyTarget: target => Math.round(target / 60) *60 
      }}

      style={{
        x:dragX
      }}
      onDragStart={dragStart}
      // onDragEnd={dragEnd}
      onDrag={dragEnd}
       className=" flex flex-row md:flex-col w-full h-full will-change-transform ">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`alt`}
          className={`w-[60px]  md:w-full md:h-[60px] cursor-pointer p-[4px] object-cover transition duration-300 ${index === imageIndex? "opacity-40": "opacity-100"}`}
          onClick={()=> changeOnClick(index)}
        />
      ))}

      </motion.div>
    
    </div>
    </div>
  );
};

export default RandomImages;
