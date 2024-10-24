"use client"
import { useState, useEffect } from "react";

export default function Home() {
  const [usaTimeNow, setUsaTimeNow] = useState('');

  useEffect(() => {
    const updateUsaTime = () => {
      const d = new Date();
      const localTime = d.getTime();
      const localOffset = d.getTimezoneOffset() * 60000;
      const utc = localTime + localOffset;
      const offset = -7; // UTC offset for USA Pacific Time Zone
      const vancouver = utc + 3600000 * offset;
      setUsaTimeNow(new Date(vancouver).toLocaleTimeString());
    };

    // Update time immediately and then every second
    updateUsaTime();
    const intervalId = setInterval(updateUsaTime, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <main className=" w-full h-screen flex items-end  ">
        <div className="pb-20">
        <h1 className="md:font-medium text-pretty  font-semibold text-[2.5rem] md:text-[4rem] xl:text-[7rem]  text-text-primary tracking-tighter leading-[120%] md:leading-[100%] ">Michael Dresler — <br /> Designer & Developer</h1>
        <h2 className=" mt-8 font-medium text-2xl text-text-secondary tracking-[-0.05em] max-w-[44rem] ">My passion for design, coupled with a background in development, has pushed me to expand my approach beyond just aesthetics.</h2>
      
        </div>

      </main>
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="aspect-[9/6] rounded-xl bg-white/10"></div>
          <div className="aspect-[9/6] rounded-xl bg-white/10"></div>
          <div className="aspect-[9/6] rounded-xl bg-white/10"></div>
          <div className="aspect-[9/6] rounded-xl bg-white/10"></div>

        </section>

    </div>
  );
}
