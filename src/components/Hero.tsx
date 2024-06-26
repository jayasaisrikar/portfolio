import React from "react";
import { cn } from "@/utils/cn";
import { Spotlight } from "./ui/hero-highlight";

export function Hero() {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-100">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Hello There! <br /> I'm Jaya Sai Srikar.
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
        I'm passionate about startups, software development, and leveraging technology to solve real-world problems. 
        With experience in Python development, machine learning, and a knack for innovation, 
        I thrive on creating impactful solutions and exploring new frontiers in tech.
        </p>
      </div>
    </div>
  );
}
export default Hero