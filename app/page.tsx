import Image from "next/image";
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
      <div className="flex">
        {/* NavBar Container */}
        <div className="m-4">
          <NavBar />
        </div>

        {/* Content Container */}
        <div className="bg-white flex-grow rounded-xl shadow-lg m-4 p-4 content-center align-middle">
          <div className="flex justify-center">
            <p className="text-xl text-gray-400">Work in progress...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
