import React from "react";
import { FlipWords } from "./ui/text-generate-effect";

export function Text() {
  const words = ["Software Developer", "Designer", "Entrepreneur", "AI Enthusiast"];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4 bg-black">
      <div className="text-4xl mx-auto font-normal text-white dark:text-neutral-400">
        I'm a
        <FlipWords words={words} /> <br />
        and many more...
      </div>
    </div>
  );
}
export default Text