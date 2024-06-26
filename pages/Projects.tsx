"use client";

import Image from "next/image";
import { Tabs } from "./ui/sticky-scroll-reveal";


export function Projects() {
  const tabs = [
    {
      title: "ResuCraft",
      value: "Resucraft",
      image: "/assets/img/resu.png",
      content: (
        <a href="https://resucraft.vercel.app">
            <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>ResuCraft</p>
          <DummyContent image="/assets/img/resu.png" />
        </div>
        </a>
      ),
    },
    {
      title: "Blog Generator",
      value: "Blog Generator",
      image: "/assets/img/blog.png",
      content: (
        <a href="https://github.com/jayasaisrikar/blog_gen">
            <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Blog Generator using Llama - 2</p>
          <DummyContent image="/assets/img/blog.png" />
        </div>
        </a>
      ),
    },
    {
      title: "Invoice Automation",
      value: "playground",
      image: "/assets/img/invoice.png",
      content: (
        <a href="https://github.com/jayasaisrikar/llm">
            <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Invoice Data Extraction and Processing using LLM</p>
          <DummyContent image="/assets/img/invoice.png" />
        </div>
        </a>
      ),
    },
    {
      title: "ITYUKTA 2K24",
      value: "content",
      image: "/assets/img/ityukta1.png",
      content: (
        <a href="https://ityukta2k24.jntugv.in">
            <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>ITYUKTA 2K24</p>
          <DummyContent image="/assets/img/ityukta1.png" />
        </div>
        </a>
      ),
    },
    {
      title: "NLQA",
      value: "random",
      image: "/assets/img/nlqa.png",
      content: (
        <a href="https://github.com/jayasaisrikar/Natural-Language-Query-Agent">
            <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Natural Language Query Agent</p>
          <DummyContent image="/assets/img/nlqa.png" />
        </div>
        </a>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] perspective:1000px relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = ({ image }: { image: string }) => {
  return (
    <Image
      src={image}
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};

export default Projects;
