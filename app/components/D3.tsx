// "use client"
// import React, { useEffect } from 'react';
// import * as d3 from 'd3';
// import { DSVRowString } from 'd3';

// // type Data = {
// //     Country: string;
// //     Value: number;
// // }
// type Data = {
//     Name: string;       // Title of the game
//     Platform: string;   // Gaming platform (e.g., PS4, Xbox One)
//     Year: number;       // Release year of the game
//     Genre: string;      // Genre of the game (e.g., Action, Adventure)
//     Publisher: string;  // Publisher of the game
//     NA_Sales: number;   // Sales in North America (in millions)
//     EU_Sales: number;   // Sales in Europe (in millions)
//     JP_Sales: number;   // Sales in Japan (in millions)
//     Other_Sales: number; // Sales in other regions (in millions)
//     Global_Sales: number; // Total global sales (in millions)
// }

// const D3Component = () => {
//     useEffect(() => {
//         d3.select("#chart").select("svg").remove();
//         // set the dimensions and margins of the graph
//         var margin = { top: 30, right: 30, bottom: 70, left: 60},
//             width = 460 - margin.left - margin.right,
//             height = 400 - margin.top - margin.bottom;

//         // append the svg object to the body of the page
//         var svg = d3.select("#chart")
//             .append("svg")
//             .attr("width", width + margin.left + margin.right)
//             .attr("height", height + margin.top + margin.bottom)
//             .append("g")
//             .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
//             .attr("fill", "white");



//         // Parse the Data
//         d3.csv<Data>("/data/videogames_wide.csv", 
//             function(data: DSVRowString<string>): Data | null {
//                 if (!data) return null;

//                 return {
//                     Name: data.Name,
//                     Platform: data.Platform,
//                     Year: +data.Year,              // Convert to number
//                     Genre: data.Genre,
//                     Publisher: data.Publisher,
//                     NA_Sales: +data.NA_Sales,      // Convert to number
//                     EU_Sales: +data.EU_Sales,      // Convert to number
//                     JP_Sales: +data.JP_Sales,      // Convert to number
//                     Other_Sales: +data.Other_Sales, // Convert to number
//                     Global_Sales: +data.Global_Sales // Convert to number
//                 };
//             }).then(function(data: Data[]) {
//                 // X axis
//                 console.log(data)
//                 var maxGlobalSales = d3.max(data.map(d => d.Global_Sales).filter((value): value is number => value !== undefined));
//                 const yDomainMax = maxGlobalSales !== undefined ? maxGlobalSales : 0;

//                 var x = d3.scaleBand()
//                     .range([ 0, width ])
//                     .domain(data.map(function(d:Data) { return d.Genre; }))
//                     .padding(0.2);
//                 svg.append("g")
//                     .attr("transform", "translate(0," + height + ")")
//                     .call(d3.axisBottom(x))
//                     .selectAll("text")
//                     .attr("transform", "translate(-10,0)rotate(-45)")
//                     .style("text-anchor", "end")

//                 // Add Y axis
//                 var y = d3.scaleLinear()
//                     .domain([0, yDomainMax]) // Set domain based on data
//                     .range([ height, 0]);
//                 svg.append("g")
//                     .call(d3.axisLeft(y))

//                 svg.selectAll("text")
//                     .style("fill","white")


//                 // Bars
//                 svg.selectAll("rect")
//                 .data(data)
//                 .enter()
//                 .append("rect")
//                 .attr("x", function(d) { return x(d.Genre) ?? 0; })
//                 .attr("y", function(d) { return y(d.Global_Sales) ?? 0; })
//                 .attr("width", x.bandwidth())
//                 .attr("height", function(d) { return height - (y(d.Global_Sales) ?? 0); })
//                 .attr("fill", "white")
//             });
//     }, []);

//     return <div id="chart" ></div>;
// };

// export default D3Component;