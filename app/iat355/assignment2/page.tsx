"use client"
import GBSales from "@/app/components/GBSales";
import SotPlatform from "@/app/components/SotPlatform";
import GBSalesPlatform from "@/app/components/GBSalesPlatform";
import SotGenre from "@/app/components/SotGenre";
import RegionSales from "@/app/components/RegionSales";
import PlatformSports from "@/app/components/PlatformSports";
import PublisherSports from "@/app/components/PublisherSports";
import PublisherSportsCount from "@/app/components/PublisherSportsCount";



export default function iat355() {
  return (
    <div>
      <main className="flex flex-col gap-16">
       {/* <Graph /> */}
       <div>
        <h2 className="text-text-primary text-2xl font-medium p-8">Global Video Game Sales by Genre</h2>
       <GBSales/>
       </div>

       <div>
        <h2 className="text-text-primary text-2xl font-medium p-8">Global Video Game Sales by Platform</h2>
       <GBSalesPlatform/>
       </div>

       <div>
        <h2 className="text-text-primary text-2xl font-medium p-8">Video Game Sales by platform over time</h2>
       <SotPlatform/>
       </div>

       <div>
        <h2 className="text-text-primary text-2xl font-medium p-8">Video Game Sales by Genre over time</h2>
       <SotGenre/>
       </div>

       <div>
        <h2 className="text-text-primary text-2xl font-medium p-8">Video Game Sales by Platform and Region</h2>
       <RegionSales/>
       </div>

       <div>
        <h2 className="text-text-primary text-2xl font-medium p-8">Sports Games sales by platform</h2>
       <PlatformSports/>
       </div>

       <div>
        <h2 className="text-text-primary text-2xl font-medium p-8">Count of Sports games released by</h2>
       <PublisherSportsCount/>
       </div>

       <div>
        <h2 className="text-text-primary text-2xl font-medium p-8">Sports Games sales by Publisher</h2>
       <PublisherSports/>
       </div>


      </main>
    </div>
  );
}

