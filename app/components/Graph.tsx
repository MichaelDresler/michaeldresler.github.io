"use client"
import { createClassFromSpec } from 'react-vega';

export default createClassFromSpec({
    spec: {
        "$schema": "https://vega.github.io/schema/vega/v5.json",
        "description": "A bar chart showing global video game sales by genre and platform.",
        "width": 800,
        "height": 400,
        "padding": 5,
    
        "data": [
          {
            "name": "videogames",
            "url": "/data/videogames_wide.csv",  // Replace with the correct path
            "format": {"type": "csv"}
          }
        ],
        "signals": [
          {
            "name": "tooltip",
            "value": {},
            "on": [
              {"events": "rect:pointerover", "update": "datum"},
              {"events": "rect:pointerout",  "update": "{}"}
            ]
          }
        ],
    
        "scales": [
          {
            "name": "xscale",
            "type": "band",
            "domain": {"data": "videogames", "field": "Genre"},
            "range": "width",
            "padding": 0.1,
            "round": true
          },
          {
            "name": "yscale",
            "type": "linear",
            "domain": {"data": "videogames", "field": "Global_Sales"},
            "nice": true,
            "range": "height"
          },
          {
            "name": "color",
            "type": "ordinal",
            "domain": {"data": "videogames", "field": "Platform"},
            "range": {"scheme": "category10"}
          }
        ],
    
        "axes": [
          { "orient": "bottom", "scale": "xscale", "labelColor": "white", "title": "Genre", "titleColor":"white", "titlePadding":24 },
          { "orient": "left", "scale": "yscale", "labelColor": "white", "title": "Global Sales (in millions)", "titleColor":"white", "titlePadding":24 }
        ],
    
        "marks": [
          {
            "type": "rect",
            "from": {"data": "videogames"},
            "encode": {
              "enter": {
                "x": {"scale": "xscale", "field": "Genre"},
                "width": {"scale": "xscale", "band": 1},
                "y": {"scale": "yscale", "field": "Global_Sales"},
                "y2": {"scale": "yscale", "value": 0},
                "fill": {"scale": "color", "field": "Platform"}
              },
            }
          },
          {
            "type": "text",
            "encode": {
              "enter": {
                "align": {"value": "center"},
                "baseline": {"value": "bottom"},
                "fill": {"value": "white"}
              },
              "update": {
                "x": {"scale": "xscale", "signal": "tooltip.Genre", "band": 0.5},
                "y": {"scale": "yscale", "signal": "tooltip.Global_Sales", "offset": -2},
                "text": {"signal": "tooltip.Global_Sales"},
                "fillOpacity": [
                  {"test": "datum === tooltip", "value": 0},
                  {"value": 1}
                ]
              }
            }
          }
        ]
      }
    });