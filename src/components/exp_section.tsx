"use client";
import React from "react";
import { StickyScroll } from "./ui/experience";
import Image from "next/image";

const content = [
  {
    title: "Jr Python Developer",
    description:
      "I implemented OCR solutions for Accounts Payable, enhancing data extraction accuracy by 95% and reducing manual input time by 60%. I deployed 20+ cloud apps on AWS with 99.99% uptime. I developed 15+ Python scripts, improving efficiency by 30%, and designed MySQL databases with 100,000+ records, cutting query times by 40%.",
    content: (
      
        <Image
          src="/assets/img/opl.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
    ),
  },
  {
    title: "Machine Learning Intern",
    description:
      "I applied ML algorithms, enhancing predictive accuracy by 85%, and implemented clustering/classification models, improving data insights by 70%. I developed and deployed 20+ mini projects, increasing efficiency by 40% through optimization. I conducted model evaluation, achieving a 90% success rate. I wrote 1000+ lines of Python code, optimizing runtime by 35%, and created visualizations to interpret results, improving stakeholder understanding by 60%.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/assets/img/tecky.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "AI FullStack Engineer",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
        <Image
        src="/assets/img/SIH.webp"
        width={300}
        height={300}
        className="h-full w-full object-cover"
        alt="linear board demo"
      />
    ),
  },
  {
    title: "FullStack Developer",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
        <Image
        src="/assets/img/festlogo.png"
        width={300}
        height={300}
        className="h-full w-full object-cover"
        alt="linear board demo"
      />
    ),
  },
];
export function Expsec() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}

export default Expsec