"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";

export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Professional Summary
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
          I am a Junior Python Developer at One Paper Lane and a Machine Learning Engineer at Teckybot, with a strong background in OCR solutions and ML algorithms. I hold a B.Tech in Information Technology from JNTU GV with an outstanding CGPA of 8.1.
          </p>
        </div>
        <Image
          src="/assets/img/resu.png"
          width={500}
          height={500}
          alt="GitHub logo"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Skills
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
        My skills include Python scripting, MySQL database management, and API integration. I excel in Generative AI, Machine Learning with TensorFlow and Sci-kit Learn, and web development using ReactJS. Proficient in HTML5, CSS, JavaScript, and Java.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            My Achivements
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
          I led a team to the Smart India Hackathon 2023 Grand Finale, showcasing innovative ML solutions. At One Paper Lane, I enhanced data extraction accuracy by 95% through OCR implementations, managed 20+ AWS applications with 99.99% uptime, and developed 15+ Python scripts, optimizing efficiency by 30%.
          </p>
        </div>
        <Image
          src="/assets/img/github.png"
          width={500}
          height={500}
          alt="Linear demo image"
          className="absolute -right-0 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}

export default WobbleCardDemo;
