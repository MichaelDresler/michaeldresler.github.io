import * as config from "./configTemplate";
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
          x: {
            field: "Genre",
            type: "nominal",
            title: "Video Game Genre",
            axis: {
              labelAngle: 0, // Set the x-axis labels to horizontal
            },
            sort: {
              field: "Global_Sales",
              op: "sum", // Aggregate the global sales using sum
              order: "ascending", // Sort from highest to lowest
            },
          },
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
          x: {
            field: "Genre",
            type: "nominal",
            sort: {
              field: "Global_Sales",
              op: "sum", // Aggregate the global sales using sum
              order: "ascending", // Sort from highest to lowest
            },
          },
          y: {
            field: "Global_Sales",
            type: "quantitative",
            aggregate: "sum",
          },
          text: {
            field: "Global_Sales",
            aggregate: "sum",
            type: "quantitative",
          }, // Show total sales
          color: { value: config.textColor }, // Color of the text
        },
      },
    ],

    config: config.configTemplate
  },
});
