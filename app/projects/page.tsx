import godotSVG from "@/public/godot.svg";
import figmaSVG from "@/public/figma.svg";

import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import Project from "@/components/Project";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personal Projects  | Jye Stillitano",
  description: "My personal project portfolio. Mostly learning hobby projects.",
};

import projects from "../data/projects.json";

export default function Home() {
  return (
    // Outer Container
    <div className="m-auto h-full max-w-5xl">
      <Header />

      {/* Body */}

      {/* NavBar Container */}
      <div className="sticky top-0 p-1 px-4 lg:fixed lg:top-1/4 lg:m-auto">
        <NavBar selection={3} />
      </div>

      {/* Content Container */}
      <div className="mx-4 mb-4 flex-grow rounded-xl border-[2px] border-accent p-4 shadow-lg lg:mx-36">
        {/* Content */}
        <div className="flex-col px-4">
          <h1 className="my-8 text-center text-4xl font-extrabold tracking-tight text-primary transition-all sm:text-5xl">
            My Projects
          </h1>
          {/* Project Gallery */}
          <div className="my-16 flex flex-row flex-wrap justify-center">
            {projects.map((project) => (
              <Project
                key={project.name}
                name={project.name}
                image={project.image}
                content={project.content}
                github={project.github}
                link={project.link && project.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
