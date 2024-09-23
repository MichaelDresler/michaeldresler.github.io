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
      <main className=" w-full h-screen grid grid-cols-6 items-center  ">
        <div className=" lg:col-start-3 col-span-full flex gap-8 flex-col ">
        <h1 className="font-medium text-7xl xl:text-[8rem] text-text-primary tracking-tighter leading-[90%] ">Michael Dresler</h1>
        <h2 className="font-normal text-2xl text-text-secondary tracking-tighter max-w-[32rem] ">Multidisciplinary Designer & Developer based in Vancouver —  {usaTimeNow}</h2>
      
        </div>

      </main>
    </div>
  );
}
