"use client"
import Link from "next/link";

export default function Home() {
  return (
    <div>
     
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2" id="projects">
        <Link href={"/projects/surge"} className="aspect-9/6 rounded-md bg-foreground/20"></Link>
        <div className="aspect-9/6 rounded-md bg-foreground/20"></div>
        <div className="aspect-9/6 rounded-md bg-foreground/20"></div>
        <div className="aspect-9/6 rounded-md bg-foreground/20"></div>
      </section>
    </div>
  );
}
