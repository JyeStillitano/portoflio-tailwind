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
import Header from "@/components/Header";

// Credit https://storyset.com/ for illustrations.

export default function Home() {
  return (
    // Outer Container
    <div className="h-full max-w-5xl m-auto">
      <Header />

      {/* Body */}

      {/* NavBar Container */}
      <div className="sticky top-0 bg-gray-100 p-1 px-4 lg:fixed lg:top-1/4 lg:m-auto">
        <NavBar />
      </div>

      {/* Content Container */}
      <div className="bg-white flex-grow rounded-xl shadow-lg mx-4 p-4 mb-8 md:mx-24 lg:mx-36">
        {/* Content */}
        <div className="flex-col px-4">
          <h1 className="text-6xl font-extrabold text-center my-8 text-blue-600 tracking-tight">
            Who Am I?
          </h1>
          <p className="text-center my-4 max-w-96 mx-auto leading-7">
            Hi there, I&apos;m Jye, a Melbourne based programmer with a
            Bachelors of Computer Science, majoring in Software Development.
          </p>
          <Image
            src={programming_image}
            alt="Programming illustration."
            className="mx-auto"
          />
          <p className="text-center my-4 max-w-96 mx-auto leading-7">
            I have created this website as a hobby project and as a place to
            showcase my personal work. <br />
            It has been built using the following tools and frameworks...
          </p>
          {/* Tech Stack */}
          <div className="flex flex-row justify-evenly my-12">
            <Image
              className="m-auto size-16 md:size-20 lg:size-24"
              src={reactjs_icon}
              alt="React JS"
            />
            <Image
              className="m-auto size-16 md:size-20 lg:size-24"
              src={nextjs_icon}
              alt="Next JS"
            />
            <Image
              className="m-auto size-16 md:size-20 lg:size-24 sm:size-16 "
              src={nodejs_icon}
              alt="Node JS"
            />
            <Image
              className="m-auto size-16 md:size-20 lg:size-24"
              src={tailwind_icon}
              alt="Tailwind CSS"
            />
            <Image
              className="m-auto size-16 md:size-20 lg:size-24"
              src={figma_icon}
              alt="Figma"
            />
          </div>
          <p className="text-center max-w-96 mx-auto leading-7">
            The project is completely open source and available on my{" "}
            <a
              href="https://github.com/JyeStillitano/jyestillitano.github.io"
              className="text-blue-600 font-bold hover:text-blue-700"
            >
              GitHub
            </a>
            .
          </p>
          <Image
            src={programming_guy_image}
            alt="Programming guy illustration."
            className="mx-auto"
          />
          <p className="text-center mb-4 leading-7">
            Want to find out more of <b>what I do?</b>
          </p>
          <div className="flex justify-center">
            <div className="relative left-[236px] top-3 h-3 w-3  bg-blue-600 rounded-full animate-ping opacity-70" />
            <div className="relative left-[224px] top-3 h-3 w-3 bg-blue-200 rounded-full" />
            <a
              href="/projects"
              className="bg-blue-600 rounded-full py-2 px-6 m-4 text-white font-semibold hover:shadow-lg hover:bg-blue-700"
            >
              Check Out My Projects
            </a>
          </div>
          {/* Contact Information */}
          <div className="flex justify-evenly flex-wrap my-4">
            <div className=" whitespace-nowrap">
              <Image
                src={github_icon}
                alt="Github Icon"
                className="inline mx-4"
              />
              <p className="inline text-nowrap">@JyeStillitano</p>
            </div>
            <div className=" whitespace-nowrap">
              <Image
                src={linkedin_icon}
                alt="LinkedIn Icon"
                className="inline mx-4"
              />
              <p className="inline text-nowrap">@Jye Stillitano</p>
            </div>
            <div className=" whitespace-nowrap">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 inline mx-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              <p className="inline text-nowrap">jyestillitano@hotmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
