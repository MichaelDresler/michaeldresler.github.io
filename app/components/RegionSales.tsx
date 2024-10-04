import { configTemplate } from "./configTemplate";
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
      url: "/data/videogames_wide.csv", // Replace with the correct path to your CSV
      format: { type: "csv" },
    },

    transform: [
      {
        fold: ["NA_Sales", "EU_Sales", "JP_Sales"], // Fold sales columns into a single 'Region' and 'Sales' field
        as: ["Region", "Sales"],
      },
    ],

    mark: {
      type: "bar",
      opacity: 1,
    },
    
    encoding: {
      x: {
        field: "Platform",
        type: "nominal",
        title: "Platform",
        axis: { labelAngle: 0 }, // To keep the platform labels horizontal
      },
      y: {
        field: "Sales",
        type: "quantitative",
        title: "Total Sales (in Millions)",
        aggregate: "sum", // Summing the sales across regions for each platform
        stack: "zero", // Stacks the bars
      },
      color: {
        field: "Region", // Region (NA_Sales, EU_Sales, JP_Sales) as the color
        type: "nominal",
        title: "Region",
        scale: {
          range: ["#FF5733", "#33FFBD", "#337BFF"], // Custom colors for regions
        },
      },
      tooltip: [
        { field: "Platform", title: "Platform" },
        { field: "Region", title: "Region" },
        {
          field: "Sales",
          title: "Sales (in Millions)",
          aggregate: "sum",
          format: ".2f", // Format to two decimal places
        },
        {field:"Global_Sales", title:"Total Sales", aggregate:"sum"},
      ],
    },
    
    config: configTemplate
  },
});