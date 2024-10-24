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
    title: "Count of Sports Games by Publisher",

    data: {
      name: "videogames",
      url: "/data/videogames_wide.csv", // Replace with the correct path
      format: { type: "csv" },
    },

    transform: [
      {
        filter: "datum.Genre === 'Sports'", // Only include sports games
      },
      // {
      //   aggregate: [
      //     { op: "count", as: "Game_Count" }, // Count number of games per publisher
      //   ],
      //   groupby: ["Publisher"],
      // },
      // // Filter publishers with more than 10 sports games
      // { filter: "datum.Game_Count > 10" },
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
        axis: {
          labelAngle: 90, // Keep labels horizontal
        },
      },
      y: {
        aggregate: "count", // Count the number of games per publisher
        field: "Genre",
        type: "quantitative",
        title: "Number of Sports Games Released",
      },
      color: {
        value: "lightblue", // Optional: color for bars
      },
      tooltip: [
        { field: "Publisher", title: "Publisher" },
        {
          aggregate: "count",
          field: "Genre",
          title: "Number of Sports Games",
        },
      ],
    },

    config: config.configTemplate,
  },
});
