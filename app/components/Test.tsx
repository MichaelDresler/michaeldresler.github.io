"use client";
import { createClassFromSpec } from "react-vega";

export default createClassFromSpec({
  spec: {
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",
    width: 900,
    height: 500,
    padding: 5,
    background: "transparent",
    title: "myGraph",

    data: {
      name: "videogames",
      url: "/data/videogames_wide.csv", // Replace with the correct path
      format: { type: "csv" },
      
    },

    mark: {
      type: "bar",
      opacity: 1, // Ensures full opacity for all bars
      
    },
    encoding: {
      x: { field: "Genre", type: "nominal", title: "Video Game Genre", sort: {
        field: "Genre",
        op: "count",      // Aggregate the global sales using sum
        order: "descending"  // Sort from highest to lowest
      } },
      y: {
        field: "total",
        type: "quantitative",
        title: "Global Sales (in Millions)",
        aggregate: "count",

      },
      color: { value: "gray" },
      tooltip: [
        {"field": "Genre", "title": "Genre" },
        {"field": "total",  "title": "Total Sales","aggregate":"count"}
      ]
      
    },
    
    

    config: {
      // Configure axis labels and title styles
      axis: {
        labelColor: "white", // Set axis label color to white
        titleColor: "white", // Set axis title color to white
        gridColor: "rgba(255, 255, 255, 0.1)", // Optional: Style the grid lines
      },
      // Configure legend text and title
      legend: {
        labelColor: "white", // Set legend label color to white
        titleColor: "white", // Set legend title color to white
      },
      view: {
        stroke: "white", // Set border color to white
        strokeWidth: 0, // Optional: Set border thickness
      },
    },
  },
});
