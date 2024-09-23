"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cubicBezier } from "framer-motion";
import { geistMono } from "../fonts";

type NavLink = {
  name: string,
  url: string,
  
}


export default function NavBar() {
  const easing = cubicBezier(.5,0,.3,1)
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeHover, setActiveHover] = useState<string>(pathname);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLDivElement>(null)

  const mouseEnterLink = (url:string) => {
    // Clear any previous timeout when hovering
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveHover(url);
  };

  const mouseLeaveLink = () => {
    // Set a delay before resetting hover state
    timeoutRef.current = setTimeout(() => {
      setActiveHover(pathname);
    }, 500);
  };




  const navlinks:NavLink [] = [
    {name:"Home", url: "/"},
    {name:"About", url: "/about"},
    {name:"Iat 355", url: "/IAT355"},
    {name:"Styleguide", url: "/styleguide"},

  ]


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    const newWidth: number = window.innerWidth;
    if (newWidth > 640) {
      setIsOpen(false);
    }
  };

  const handleClick = (e:MouseEvent) => {
    if(!navRef.current?.contains(e.target as Node)){
      setIsOpen(false)
    }
  }

  useEffect(() => {
    setIsOpen(false)
    // Add event listener to handle window resize
    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClick)
    setActiveHover(pathname)
    // Cleanup event listener on component unmount

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClick)
    };
  },[pathname]); 
  console.log(activeHover)

  return (
    <div className="fixed w-full left-0 top-0 text-sm px-4 lg:px-24  z-[1000]">
      {/* used for progressive blur behind navbar */}
      {/* <div className="w-screen h-full absolute top-0 left-0 bg-surface/20  [mask-image:linear-gradient(180deg,_rgba(0,0,0,1)_20%,_rgba(255,255,255,0)_80%)]  backdrop-blur-[8px]" ></div> */}

      <div
      ref={navRef}
        className={` ${
          isOpen ? " h-screen" : "h-[3.5rem]"
        } rounded-[4px]  mx-auto bg-surface transition-all duration-500 py-10 backdrop-blur-lg  overflow-hidden flex flex-col sm:flex-row px-12  z-[1000] max-w-[1840px]`}
      >
        <ul className={` flex w-full sm:w-auto items-center py-4 text-text-primary `}>
          {/* surge logo */}
          <li className="flex items-center ">
            <Link href="/">
             <div className="w-6 h-6 rounded-full bg-white"></div>
            </Link>
          </li>
          {/* hamburger and x buttons for nav toggle */}
          <li className="flex items-center ml-auto">
            <button className="sm:hidden relative ml-auto " onClick={toggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`size-6 ${isOpen ? "hidden" : "flex"} `}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={`size-6 ${isOpen ? "flex" : "hidden"} `}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </li>
        </ul>

        {/* content box for nav links */}
        <div className="flex sm:ml-auto justify-center ">
          <ul className="flex flex-col justify-center sm:flex-row gap-6 md:gap-8 mt-8 sm:mt-0 items-center ">
            {navlinks.map((link , index)=>(
              <li onMouseEnter={()=>mouseEnterLink(link.url)} onMouseLeave={mouseLeaveLink}  className="group relative flex gap-12" key={index}>
                <Link className={` link ${geistMono.className} uppercase ${pathname === link.url? "text-text-primary": "text-white/60"}`} href={link.url}>{link.name}</Link>
                <span className={`  absolute pointer-events-none inset-x-[-50px] inset-y-[-10px] sm:inset-[-8px] ${pathname === link.url && "  -z-10"}`}
                 >
                  {link.url === activeHover && (
                      <motion.div  
                      layoutId="active"
                      transition={{
                        ease:easing,
                        duration:0.6
                      
                     }} className={` w-full h-full `}>
                      <div className="absolute w-2 h-2 top-0 left-0  border-t border-l border-white"></div>
                      <div className="absolute w-2 h-2 top-0 right-0  border-t border-r border-white"></div>
                      <div className="absolute w-2 h-2 bottom-0 left-0  border-b border-l border-white"></div>
                      <div className="absolute w-2 h-2 bottom-0 right-0  border-b border-r border-white"></div>
                      </motion.div>

                  )} 
                </span>
              </li>
            
            ))}
           
            
          </ul>
        </div>
      </div>
    </div>
  );
 
}
