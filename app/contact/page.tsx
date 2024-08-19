import type { Metadata } from "next";

import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import MailForm from "@/components/MailForm";

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
        <div className="flex-col px-4 lg:px-28">
          <h1 className="my-8 text-center text-5xl font-extrabold tracking-tight text-primary">
            Contact Me
          </h1>

          <MailForm />
        </div>
      </div>
    </div>
  );
}
