"use client"
import GBSales from "@/app/components/GBSales";
import Graph from "@/app/components/Graph";
import Test from "@/app/components/Test";



export default function iat355() {
  return (
    <div>
      <main className="flex flex-col gap-16">
       <Graph />
       <GBSales/>
       <Test/>
      </main>
    </div>
  );
}

