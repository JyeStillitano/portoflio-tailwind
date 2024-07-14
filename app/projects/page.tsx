import projectImage1 from "@/public/projects/jyestillitano.github.io.png";
import projectImage2 from "@/public/projects/SpaceShooter.png";
import projectImage3 from "@/public/projects/3DPlatformer.png";
import projectImage4 from "@/public/projects/Microraptor.png";

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

const projects = [
  {
    name: "jyestillitano.github.io",
    image: projectImage1.src,
    content:
      "Designed to be an online portofolio of projects I have worked on, this webpage has been a great tool for practicing my " +
      "skills using modern web development tool and frameworks. Particularly Next JS with TypeScript. " +
      'The web app is currently hosted with GitHub pages, using the default "github.io" domain. \n\n' +
      "This is my first project using Tailwind CSS over a component library. While I believe this has \n\n" +
      "lengthened development time significantly, it has been a great tool for creating this fully " +
      "customised web app.",
    github: "https://github.com/JyeStillitano/jyestillitano.github.io",
  },
  {
    name: "2D Space Shooter",
    image: projectImage2.src,
    content:
      "My first project using the open source game development engine, Godot. \n\n" +
      "Through this project I learnt about the Godot engine interface, it's node based " +
      "design structure and the GDScript language/API.",
    github: "https://github.com/JyeStillitano/BulletHell",
  },
  {
    name: "3D Platformer",
    image: projectImage3.src,
    content:
      "After completing a simple game within the 2D enviornment for Godot I decided to " +
      "step up to the 3D environment with this platformer project. \n\n" +
      "Growing up playing a lot of 3D platformers like Mario and Crash Bandicoot, I was very " +
      "interested in learning the mechanics of what makes platforming satisfying. \n\n" +
      "Through this project I have learnt a lot about vector math, physics engines and state management.",
    github: "https://github.com/JyeStillitano/Godot-3D-Platformer",
  },
  {
    name: "Project Microraptor",
    image: projectImage4.src,
    content:
      "A local business crowdfunding platform developed as part of my computer science capstone project. " +
      "Through this project I gained familiarity with React and its reactive and modular approach to web development.",
    github: "https://github.com/Project-MicroRaptor/microraptor",
  },
];

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
              />
            ))}
          </div>
          <h2 className="text-center text-xl font-bold tracking-tight text-primary transition-all sm:text-3xl">
            Web Development
          </h2>
          <p className="my-16 text-center text-content">
            This website is a project I have been working on in order to develop
            my skills as a full stack developer. The front end was designed
            using Figma. The design is publically available
            <Link
              href="https://www.figma.com/design/7CQBA0EwAEx7YvXiFRIskO/Website?node-id=0%3A1&t=2exI8fWz6AsemVWX-1"
              target="_blank"
              className="ml-1 font-bold text-primary hover:text-blue-400"
            >
              here
            </Link>
            .
          </p>
          <div className="flex flex-row">
            <img
              src={figmaSVG.src}
              alt="Figma SVG"
              className="transiiton-all m-auto size-32 sm:size-52"
            />
            <p className="my-16 text-content">
              Through this project I have primarily been interested in
              practicing UI/UX. By designing the website through the free
              prototyping tool
              <a
                href="https://www.figma.com/"
                target="_blank"
                className="mx-1 font-bold text-primary hover:text-blue-400"
              >
                Figma
              </a>
              and teaching myself
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                className="mx-1 font-bold text-primary hover:text-blue-400"
              >
                Tailwind CSS
              </a>
              I can create a fully customised design without relying on
              component libraries.
            </p>
          </div>
          <p className="my-16 text-center text-content">
            I also intend to work with some public APIs to pull GitHub, Spotify
            and Steam profile data, creating a showcase of some of my interests
            and what I’ve been up to lately.
          </p>
          <h2 className="text-center text-xl font-bold tracking-tight text-primary transition-all sm:text-3xl">
            Game Development
          </h2>
          <p className="my-16 text-center text-content">
            In the past year I have begun hobby game development with the open
            source platform Godot.
          </p>
          <div className="flex flex-row">
            <img
              src={godotSVG.src}
              alt="Godot Game Engine SVG"
              className="m-auto size-32 transition-all sm:size-52"
            />
            <p className="my-16 text-content">
              I started learning game development within the Unity game engine.
              After hearing about the Godot project and the great work being
              done by its open source community, I became interested in
              utilising it for my new projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
