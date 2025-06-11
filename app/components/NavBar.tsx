"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cubicBezier } from "framer-motion";

type NavLink = {
  name: string;
  url: string;
};

export default function NavBar() {
  const easing = cubicBezier(0.6, 0, 0.4, 1.1);
  const pathname = "/" + usePathname().split("/")[1];
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [scrollingDown, setScrollingDown] = useState(false);

  console.log("pathname:", pathname);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeHover, setActiveHover] = useState<string>(pathname);
  const navRef = useRef<HTMLDivElement>(null);

  // console.log("active hover: ", activeHover)

  const navlinks: NavLink[] = [
    { name: "home", url: "/" },
    { name: "about", url: "/about" },
    { name: "projects", url: "/#projects" },
    { name: "resume", url: "/files/resume.pdf" },
    // { name: "gallery", url: "/testing" },

    // {name:"styleguide", url: "/styleguide"},
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    const newWidth: number = window.innerWidth;
    if (newWidth > 640) {
      setIsOpen(false);
    }
  };

  const handleClick = (e: MouseEvent) => {
    if (!navRef.current?.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      // scrolling down
      setScrollingDown(true);
    } else {
      // scrolling up
      setScrollingDown(false);
    }
    setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop); // Ensure scroll position is non-negative
  };

  useEffect(() => {
    // Add event listener to handle window resize
    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClick);

    setActiveHover(pathname);
    // Cleanup event listener on component unmount

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClick);
    };
  }, [pathname]);

  useEffect(() => {
    setIsOpen(false);
    // Add event listener to handle window resize
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <div className="fixed w-full left-0 top-0  px-3 sm:px-12  z-1000 ">
      {/* used for progressive blur behind navbar */}
      {/* <div className="w-screen absolute top-0 left-0 bg-surface/20 h-full [mask-image:linear-gradient(180deg,_rgba(0,0,0,1)_20%,_rgba(255,255,255,0)_80%)]  backdrop-blur-[8px]"></div> */}

      <div
        ref={navRef}
        style={{
          height: isOpen ? `${56 * navlinks.length + 56}px` : "2.75rem",
        }}
        className={` ${
          isOpen
            ? `rounded-[12px] `
            : " rounded-[32px]"
        }   mx-auto   ${
          scrollingDown && "opacity-0 blur-[10px]"
        }   bg-[rgba(60,60,60,0.85)] transition-all duration-400 will-change-auto   mt-4 backdrop-blur-md  overflow-hidden flex flex-col sm:flex-row px-4 sm:px-1  sm:w-fit z-1000 outline-1 outline-[rgb(70,70,70)]`}
      >
        <ul className={` flex w-full sm:w-auto items-center py-3 `}>
          {/* surge logo
          <li className="flex items-center link ">
            <Link href="/">MD</Link>
          </li> */}
          {/* hamburger and x buttons for nav toggle */}
          <li className="flex items-center ml-auto text-primary">
            <button
              className="sm:hidden relative ml-auto "
              onClick={toggleMenu}
            >
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
        <div className="flex justify-center ">
          <ul className="flex flex-col justify-center sm:flex-row  mt-4 sm:mt-0 items-center ">
            {navlinks.map((link, index) => (
              <li
                onMouseDown={() => setActiveHover(link.url.replace("/#", "/"))}
                className={`group relative flex `}
                key={index}
              >
                <Link
                  className={`  link font-medium  sm:py-0 sm:px-5 px-0 py-[14px] ${
                    (pathname === link.url || (link.url === '/#projects' && pathname.startsWith('/projects')))
    ? 'text-primary'
    : 'text-primary/60'
                  }`}
                  href={link.url}
                >
                  {link.name}
                </Link>
                <span
                  className={`  text-sm absolute pointer-events-none inset-x-[-48px] inset-y-[0px] sm:inset-y-[-8px] sm:inset-x-[0px] ${
                    pathname === activeHover && "-z-10"
                  }`}
                >
                  {link.url.replace("/#", "/") === activeHover && (
                    <motion.div
                      layoutId="active"
                      style={{ originY: "0px" }}
                      transition={{
                        ease: easing,
                        duration: 0.5,
                      }}
                      className={` shadow-[0px_0px_2px_2px_rgba(0,0,0,0.09)] bg-white/15 overflow-hidden w-full h-full rounded-full  `}
                    >
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
