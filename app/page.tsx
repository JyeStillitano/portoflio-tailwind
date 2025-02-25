import Image from "next/image";
import type { Metadata } from "next";
import programming_image from "@/public/programming.svg";
import programming_guy_image from "@/public/programming-guy.svg";
import reactjs_icon from "@/public/reactjs.svg";
import nextjs_icon from "@/public/nextjs.svg";
import nodejs_icon from "@/public/nodejs.svg";
import tailwind_icon from "@/public/tailwind.svg";
import figma_icon from "@/public/figma.svg";

import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Full Stack Software Developer, Melbourne  | Jye Stillitano",
  description:
    "Melbourne based Software Developer. Computer Science undergraduate, majoring in Software Development.",
};

// Credit https://storyset.com/ for illustrations.

export default function Home() {
  return (
    // Outer Container
    <div className="m-auto h-full max-w-5xl">
      <Header />

      {/* Body */}

      {/* NavBar Container */}
      <div className="sticky top-0 p-1 px-4 lg:fixed lg:top-1/4 lg:m-auto">
        <NavBar selection={1} />
      </div>

      {/* Content Container */}
      <div className="mx-4 mb-8 flex-grow rounded-xl border-[2px] border-accent p-4 shadow-lg sm:mx-12 md:mx-24 lg:mx-36">
        {/* Content */}
        <div className="flex-col px-4">
          <h1 className="my-8 text-center text-5xl font-extrabold tracking-tight text-primary">
            Full Stack Dev.
          </h1>
          <p className="mx-auto my-4 max-w-96 text-center leading-7 text-content">
            I&apos;m Jye, a Melbourne based programmer with a Bachelors of
            Computer Science, majoring in Software Development.
          </p>
          <Image
            src={programming_image}
            alt="Programming illustration."
            className="mx-auto"
          />
          <p className="mx-auto my-4 max-w-96 text-center leading-7 text-content">
            I have created this website as a hobby project and as a place to
            showcase my portoflio of personal work. <br />
            <br />
            It has been built using the following tools and frameworks...
          </p>
          {/* Tech Stack */}
          <div className="my-12 flex flex-row justify-evenly">
            <Image
              className="m-auto size-12 transition-all sm:size-16 md:size-20 lg:size-24"
              src={reactjs_icon}
              alt="React JS"
            />
            <Image
              className="m-auto size-12 transition-all sm:size-16 md:size-20 lg:size-24"
              src={nextjs_icon}
              alt="Next JS"
            />
            <Image
              className="m-auto size-12 transition-all sm:size-16 md:size-20 lg:size-24"
              src={nodejs_icon}
              alt="Node JS"
            />
            <Image
              className="m-auto size-12 transition-all sm:size-16 md:size-20 lg:size-24"
              src={tailwind_icon}
              alt="Tailwind CSS"
            />
            <Image
              className="m-auto size-12 transition-all sm:size-16 md:size-20 lg:size-24"
              src={figma_icon}
              alt="Figma"
            />
          </div>
          <p className="mx-auto max-w-96 text-center leading-7 text-content">
            The project is completely open source and available on my{" "}
            <Link
              href="https://github.com/JyeStillitano/jyestillitano.github.io"
              className="font-bold text-primary hover:text-white"
              target="_blank"
            >
              GitHub
            </Link>
            .
          </p>
          <Image
            src={programming_guy_image}
            alt="Programming guy illustration."
            className="mx-auto my-4"
            width={480}
            height={480}
          />
          <p className="mb-4 text-center leading-7 text-content">
            Want to find out more of <b>what I do?</b>
          </p>
          <div className="flex justify-center">
            <div className="relative left-[236px] top-3 h-3 w-3  animate-ping rounded-full bg-primary opacity-70" />
            <div className="relative left-[224px] top-3 h-3 w-3 rounded-full bg-content" />
            <Link
              href="/projects"
              className="m-4 rounded-full bg-primary px-6 py-2 font-semibold text-content hover:bg-black hover:shadow-lg"
            >
              Check Out My Projects
            </Link>
          </div>
          {/* Contact Information */}
          <div className="my-4 flex flex-wrap justify-evenly">
            <div className=" whitespace-nowrap">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                className="mx-4 inline fill-white stroke-white"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <Link
                href="https://github.com/JyeStillitano"
                target="_blank"
                className="inline text-nowrap text-content hover:underline"
              >
                @JyeStillitano
              </Link>
            </div>
            <div className=" whitespace-nowrap">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 50 50"
                strokeWidth={1.5}
                className="mx-4 inline h-8 w-8 fill-white stroke-white"
              >
                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
              </svg>
              <Link
                href="https://www.linkedin.com/in/jye-stillitano-26aa921b2/"
                target="_blank"
                className="inline text-nowrap text-content hover:underline"
              >
                @Jye Stillitano
              </Link>
            </div>
            <div className=" whitespace-nowrap">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                className="mx-4 inline h-8 w-8 stroke-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              <Link
                href="/contact"
                className="inline text-nowrap text-content hover:underline"
              >
                jyestillitano@hotmail.com
              </Link>
            </div>
            <a
              href="https://storyset.com/work"
              className="mt-4 text-center leading-7 text-content hover:underline"
            >
              Work illustrations by Storyset
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
