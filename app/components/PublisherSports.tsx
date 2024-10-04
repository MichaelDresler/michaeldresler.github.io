"use client";
import * as config from "./configTemplate";
import { createClassFromSpec } from "react-vega";


// Create the chart component
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
      url: "/data/videogames_wide.csv", // Replace with the correct path to your CSV
      format: { type: "csv" },
    },

    transform: [
        // Filter for Sports genre
        { filter: "datum.Genre === 'Sports'" },

        // Aggregate global sales by platform
        {
          aggregate: [{ op: "sum", field: "Global_Sales", as: "Total_Global_Sales" }],
          groupby: ["Publisher"],
        },
        // Filter platforms with total global sales above 20 million
        { filter: "datum.Total_Global_Sales > 5" },
      ],

    mark: {
      type: "bar",
      opacity: 1,
    },

    encoding: {
      x: {
        field: "Publisher",
        type: "nominal",
        title: "Publisher",
        axis: { labelAngle: 45,
          labelLimit: 80,
         }, // To keep the platform labels horizontal
        sort:{
            field:"Total_Global_Sales",
            op:"sum",
            order:"descending"
        }
      },
      y: {
        field: "Total_Global_Sales",
        type: "quantitative",
        title: "Global Sales (in Millions)",
        aggregate: "sum", // Summing the sales across all sports games for each platform
      },
      color: {
        value: "gray", // Optional: Set the bar color

      },
      tooltip: [
        { field: "Publisher", title: "Publisher" },
        { field: "Year", title: "Year" },
        {
          field: "Total_Global_Sales",
          title: "Total Sales (in Millions)",
          aggregate: "sum",
          format: ".2f", // Format to two decimal places
        },
      ],
    },

    config: config.configTemplate, // Reuse the config template
  },
});