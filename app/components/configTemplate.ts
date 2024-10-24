export const textColor = "white"
export const configTemplate = {
    // Configure axis labels and title styles
    axis: {
      labelColor: textColor, // Set axis label color to textColor
      titleColor: textColor, // Set axis title color to white
      titlePadding:20,
      titleFontSize: 16,
      gridColor: "rgba(255, 255, 255, 0.1)", // Optional: Style the grid lines
    },
    // Configure legend text and title
    legend: {
      labelColor: textColor, // Set legend label color to white
      titleColor: textColor, // Set legend title color to textColor
    },
    view: {
      stroke: textColor, // Set border color to textColor
      strokeWidth: 0, // Optional: Set border thickness
    },
  }
