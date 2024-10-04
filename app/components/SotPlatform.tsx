import { createClassFromSpec } from "react-vega";
import * as config from "./configTemplate";

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

   params: [{
    "name": "platform",
    "select": {"type": "point", "fields": ["Platform"]},
    "bind":"legend"
  }],
    mark: {
      type: "line",
      point:true,
      strokeWidth:2,
      opacity: 1, // Ensures full opacity for all bars
      
    },
    encoding: {
      x: {
        field: "Year", // Assume you have a 'Year' column for time
        type: "temporal", // Use 'temporal' type for time data
        title: "Year",
      },
      y: {
        field: "Global_Sales", // Use your sales field
        type: "quantitative",
        title: "Global Sales (in Millions)",
        aggregate: "sum", // Aggregate by sum if needed
      },
      color: {
        field: "Platform", // Use the platform field to differentiate lines
        type: "nominal", // Use 'nominal' for categorical data
        title: "Platform",

      },
      tooltip: [
        { field: "Year", type:"temporal", title: "Year" },
        {
          field: "Global_Sales", 
          title: "Total Sales (in Millions)", 
          aggregate: "sum",
          format: ",.2f" // Format the sales value (e.g., as a number)
        },
        { 
          field: "Platform", 
          title: "Platform",
          type: "nominal",
         
        },
        {
          field: "Global_Sales",
          title: "Sales per Platform",
          type: "quantitative",
          aggregate: "sum",
          
        }
      ],
      opacity: {
        "condition": {"param": "platform", "value": 1},
        "value": 0.1
      }
    },
    

    config: config.configTemplate
  },
});
