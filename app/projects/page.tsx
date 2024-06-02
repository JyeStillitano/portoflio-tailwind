import { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Personal Projects  | Jye Stillitano",
  description: "My personal project portfolio. Mostly learning hobby projects.",
};

export default function Home() {
  return (
    // Outer Container
    <div className="m-auto h-full max-w-5xl">
      <Header />

      {/* Body */}

      {/* NavBar Container */}
      <div className="sticky top-0 p-1 lg:fixed lg:top-1/4 lg:m-auto">
        <NavBar />
      </div>

      {/* Content Container */}
      <div className="border-accent mx-4 mb-4 flex-grow rounded-xl border-[2px] p-4 shadow-lg md:mx-24 lg:mx-36">
        {/* Content */}
        <div className="flex-col px-4">
          <h1 className="text-primary my-8 text-center text-4xl font-bold">
            My Projects
          </h1>
          <p className="text-content my-16 text-center">
            This website is a project I have been working on in order to develop
            my skills as a full stack web developer.
          </p>
          <p className="text-content my-16 text-center">
            Through this project I have primarily been interested in practicing
            UI/UX. By designing the website through the free prototyping tool
            <a
              href="https://www.figma.com/"
              target="_blank"
              className="text-primary mx-1 font-bold hover:text-blue-400"
            >
              Figma
            </a>
            and teaching myself
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              className="text-primary mx-1 font-bold hover:text-blue-400"
            >
              Tailwind CSS
            </a>
            I can create a fully customised design without relying on component
            libraries.
          </p>
          <p className="text-content my-16 text-center">
            I also intend to work with some public APIs to pull GitHub, Spotify
            and Steam profile data, creating a showcase of some of my interests
            and what I’ve been up to lately.
          </p>
        </div>
      </div>
    </div>
  );
}
