"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";

export function Contact() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          I will reach you back ;)
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Thank you for navigating through my portfolio and trying to reach me. Please enter your mail address and I will reach you back.
        </p>
        <input
          type="text"
          placeholder="Enter you mail here"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
        />
        <div className="flex justify-center py-5">
  <button className="px-2 py-1 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
    Submit
  </button>
</div>


      </div>
      <BackgroundBeams />
    </div>
  );
}
 export default Contact