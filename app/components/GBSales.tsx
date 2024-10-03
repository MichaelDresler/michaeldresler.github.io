"use client";
import { createClassFromSpec } from "react-vega";

export default createClassFromSpec({
  spec: {
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",
    width: 900,
    height: 500,
    padding: 5,
    background: "transparent",
    title: "",

    data: {
      name: "videogames",
      url: "/data/videogames_wide.csv", // Replace with the correct path
      format: { type: "csv" },
      
    },

    mark: {
      type: "bar",
      opacity: 1, // Ensures full opacity for all bars
      
    },
    layer: [
      {
        mark: {
          type: "bar",
          opacity: 1, // Ensures full opacity for all bars
        },
        encoding: {
          x: { field: "Genre", type: "nominal", title: "Video Game Genre" },
          y: {
            field: "Global_Sales",
            type: "quantitative",
            title: "Global Sales (in Millions)",
            aggregate: "sum",
          },
          color: { value: "gray" },
        },
      },
      {
        mark: {
          type: "text",
          dy: -10, // Adjust this to position the label above the bar
        },
        encoding: {
          x: { field: "Genre", type: "nominal" },
          y: {
            field: "Global_Sales",
            type: "quantitative",
            aggregate: "sum",
          },
          text: { field: "Global_Sales", aggregate: "sum", type: "quantitative" }, // Show total sales
          color: { value: "white" }, // Color of the text
        },
      },
    ],
    
    
    

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
