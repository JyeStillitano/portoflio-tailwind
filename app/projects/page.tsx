import Image from "next/image";
import programming_image from "@/public/programming.svg";
import programming_guy_image from "@/public/programming-guy.svg";
import reactjs_icon from "@/public/reactjs.svg";
import nextjs_icon from "@/public/nextjs.svg";
import nodejs_icon from "@/public/nodejs.svg";
import tailwind_icon from "@/public/tailwind.svg";
import github_icon from "@/public/github.svg";
import linkedin_icon from "@/public/linkedin.svg";
import figma_icon from "@/public/figma.svg";

import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    // Outer Container
    <div className="h-full max-w-5xl m-auto">
      {/* Head */}
      <div className="flex justify-center mb-4">
        <div className="bg-black rounded-b-xl shadow-lg px-8 py-4 sticky top-0">
          <h1 className="text-3xl text-white font-thin tracking-wider">
            Jye Stillitano
          </h1>
        </div>
      </div>

      {/* Body */}

      {/* NavBar Container */}
      <div className="sticky top-0 bg-blue-200 p-1 lg:fixed lg:top-1/4 lg:m-auto">
        <NavBar />
      </div>

      {/* Content Container */}
      <div className="bg-white flex-grow rounded-xl shadow-lg mx-4 p-4 mb-4 md:mx-24 lg:mx-36">
        {/* Content */}
        <div className="flex-col px-4">
          <h1 className="text-4xl font-bold text-center my-8">My Projects</h1>
          <p className="text-center my-16">
            This website is a project I have been working on in order to develop
            my skills as a full stack web developer.
          </p>
          <p className="text-center my-16">
            Through this project I have primarily been interested in practicing
            UI/UX. By designing the website through the free prototyping tool
            <a
              href="https://www.figma.com/"
              target="_blank"
              className="text-blue-600 font-bold hover:text-blue-700 mx-1"
            >
              Figma
            </a>
            and teaching myself
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              className="text-blue-600 font-bold hover:text-blue-700 mx-1"
            >
              Tailwind CSS
            </a>
            I can create a fully customised design without relying on component
            libraries.
          </p>
          <p className="text-center my-16">
            I also intend to work with some public APIs to pull GitHub, Spotify
            and Steam profile data, creating a showcase of some of my interests
            and what I’ve been up to lately.
          </p>
        </div>
      </div>
    </div>
  );
}
