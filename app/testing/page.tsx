
"use client"
// import RandomImages from "../components/RandomImages";

// export default function testing() {

//     return (
//         <>
//         hello
//         </>

//         //     <RandomImages />

//     );
//   }
import { useState } from "react";
import { deltaCorpsPriest1, soft,georgia11,caligraphy2, useAsciiText } from "react-ascii-text";

export default function Testing() {
  const texts = ["Designer", "Developer"];
  const [isPaused, setIsPaused] = useState(false);

  const asciiTextRef = useAsciiText({
    animationCharacters: "#*+",
    animationDirection: "horizontal",
    animationInterval: 1000,
    animationLoop: true,
    animationSpeed: 100,

    font:georgia11,
    text: texts,
    isPaused
  });

  return (
    <div>
      <div className="text-white font-bold text-sm">
        <pre ref={asciiTextRef} />
      </div>
      <button onClick={() => setIsPaused(!isPaused)}>
        {isPaused ? "play" : "pause"}{" "}
      </button>
    </div>
  );
}
