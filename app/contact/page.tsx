import type { Metadata } from "next";
import Link from "next/link";

import NavBar from "@/components/NavBar";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Contact Me  | Jye Stillitano",
  description: "Fill out some information to get in contact with me.",
};

export default function Home() {
  return (
    // Outer Container
    <div className="m-auto h-full max-w-5xl">
      <Header />

      {/* Body */}

      {/* NavBar Container */}
      <div className="sticky top-0 p-1 px-4 lg:fixed lg:top-1/4 lg:m-auto">
        <NavBar selection={2} />
      </div>

      {/* Content Container */}
      <div className="mx-4 mb-8 flex-grow rounded-xl border-[2px] border-accent p-4 shadow-lg sm:mx-12 md:mx-24 lg:mx-36">
        {/* Content */}
        <div className="flex-col px-28">
          <p className="my-8 text-center text-warning-500">
            ** Work In Progress: Mail functionality not yet implemented... **
          </p>
          <h1 className="my-8 text-center text-5xl font-extrabold tracking-tight text-primary">
            Contact Me
          </h1>
          <div className="my-8">
            <label className="ml-2 text-content">Name: *</label>
            <input
              type="text"
              className="mt-2 w-full rounded-xl border-2 border-accent bg-background p-2 text-content"
            />
          </div>
          <div className="my-8">
            <label className="mb-2 ml-2 text-content">Email: *</label>
            <input
              type="text"
              className="mt-2 w-full rounded-xl border-2 border-accent bg-background p-2 text-content"
            />
          </div>
          <div className="my-8">
            <label className="mb-2 ml-2 text-content">Subject: *</label>
            <input
              type="text"
              className="mt-2 w-full rounded-xl border-2 border-accent bg-background p-2 text-content"
            />
          </div>
          <div className="my-8">
            <label className="mb-2 ml-2 text-content">Message: *</label>
            <input
              type="text"
              className="mt-2 h-48 w-full text-wrap rounded-xl border-2 border-accent bg-background p-2 text-content"
            />
          </div>
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="m-4 rounded-full bg-primary px-6 py-2 font-semibold text-content hover:bg-blue-400 hover:shadow-lg"
            >
              Send
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
