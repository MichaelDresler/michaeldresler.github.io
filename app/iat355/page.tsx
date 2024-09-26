const yValues: number[] = [60, 260, 310, 260, 230, 30];
const scale: number[] = [0, 50, 100, 150, 200, 250, 300];
const years: string[] = ["1970", "1980", "1990", "2000", "2010", "2020"];

export default function Styleguide() {
  return (
    <div>
      <main className="w-full h-[46rem] ">
        <svg width="fill" height="fill" xmlns="http://www.w3.org/2000/svg">
          <line
          className="opacity-70"
            x1="150" // The x-coordinate of the starting point
            y1="0" // The y-coordinate of the starting point
            x2="150" // The x-coordinate of the ending point
            y2="750" // The y-coordinate of the ending point
            stroke="white" // Color of the line
            strokeWidth="1" // Thickness of the line
          />
          {scale.map((nums: number, index) => (
            <g className="opacity-60"  key={index}>
              <text
               
                x={100} // Centering text in the middle of the rect
                y={nums * 2 + 100} // Position text slightly below the bars
                textAnchor="middle" // Centers the text horizontally
                style={{ fill: "white", fontSize: "16px" }}
              >
                {scale.reverse()[index]}
              </text>

              <line
                x1="140"
                y1={nums * 2 + 100}
                x2="800"
                y2={nums * 2 + 100}
                stroke="white"
                strokeWidth="1"
              />
            </g>
          ))}
          {yValues.map((mydata: number, index) => (
            <g key={index}>
              {" "}
              {/* Grouping rect and text together */}
              <rect
                x={index * 90 + 200}
                y={700 - mydata * 2} // Adjusting y to grow upwards
                width={75}
                height={mydata * 2}
                style={{ fill: "orangered", strokeWidth: 3, stroke: "" }}
              />
              <text
              className="opacity-70"
                x={index * 90 + 37.5 + 200} // Centering text in the middle of the rect
                y={720} // Position text slightly below the bars
                textAnchor="middle" // Centers the text horizontally
                style={{ fill: "white", fontSize: "16px" }}
              >
                {years[index]} {/* Display the corresponding year */}
              </text>
            </g>
          ))}
        </svg>
      </main>
    </div>
  );
}
