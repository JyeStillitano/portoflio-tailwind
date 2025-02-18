import type { Metadata } from "next";

import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import Charm from "@/components/Charm";
import MainContent from "@/components/MainContent";

export const metadata: Metadata = {
  title: "Full Stack Software Developer, Melbourne  | Jye Stillitano",
  description:
    "Melbourne based Software Developer. Computer Science undergraduate, majoring in Software Development.",
};

// Credit https://storyset.com/ for illustrations.

export default function Home() {
  // <div className="m-auto h-full max-w-5xl">
  return (
    // Outer Container
    <div className="">
      <Header />

      {/* Body */}
      <div className="absolute h-screen w-screen">
        <Charm />
      </div>

      {/* NavBar Container */}
      <div className="sticky top-0 p-1 px-4 lg:fixed lg:top-1/4 lg:m-auto">
        <NavBar selection={1} />
      </div>

      {/*<MainContent />*/}
    </div>
  );
}
