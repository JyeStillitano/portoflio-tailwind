import Image from "next/image";
import programming_image from "@/public/programming.svg";
import programming_guy_image from "@/public/programming-guy.svg";
import reactjs_icon from "@/public/reactjs.svg";
import nextjs_icon from "@/public/nextjs.svg";
import nodejs_icon from "@/public/nodejs.svg";
import tailwind_icon from "@/public/tailwind.svg";
import figma_icon from "@/public/figma.svg";

import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    // Outer Container
    <div className="h-full max-w-5xl m-auto">
      {/* Head */}
      <div className="flex justify-center mb-4">
        <div className="bg-black rounded-b-xl shadow-xl px-8 py-4">
          <h1 className="text-3xl text-white font-thin tracking-wider">
            Jye Stillitano
          </h1>
        </div>
      </div>

      {/* Body */}

      {/* NavBar Container */}
      <div className="fixed top-1/4">
        <NavBar />
      </div>

      {/* Content Container */}
      <div className="bg-white flex-grow rounded-xl shadow-lg mx-36 p-4">
        {/* Content */}
        <div className="flex-col">
          <h1>Who Am I?</h1>
          <p>
            Hi there, I&apos;m Jye, a Melbourne based programmer with a
            Bachelors of Computer Science, majoring in Software Development.
          </p>
          <Image src={programming_image} alt="Programming illustration." />
          <p>
            I have created this website as a hobby project and as a place to
            showcase my personal work. <br />
            It has been built using the following tools and frameworks...
          </p>
          <div className="flex flex-row justify-evenly">
            <Image
              className="mx-4"
              src={reactjs_icon}
              alt="React JS"
              width="100"
              height="100"
            />
            <Image
              className="mx-4"
              src={nextjs_icon}
              alt="Next JS"
              width="100"
              height="100"
            />
            <Image
              className="mx-4"
              src={nodejs_icon}
              alt="Node JS"
              width="100"
              height="100"
            />
            <Image
              className="mx-4"
              src={tailwind_icon}
              alt="Tailwind CSS"
              width="100"
              height="100"
            />
            <Image
              className="mx-4"
              src={figma_icon}
              alt="Figma"
              width="100"
              height="100"
            />
          </div>
          <p>
            The project is completely open source and available on my{" "}
            <a href="https://github.com/JyeStillitano/jyestillitano.github.io">
              GitHub
            </a>
            .
          </p>
          <Image
            src={programming_guy_image}
            alt="Programming guy illustration."
          />
        </div>
      </div>
    </div>
  );
}
