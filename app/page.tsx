import Image from "next/image";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    // Outer Container
    <div className="h-full max-w-7xl">
      {/* Head */}
      <div className="flex justify-center mb-4">
        <div className="bg-white rounded-b-xl shadow-xl px-8 py-4">
          <h1 className="text-3xl">Jye Stillitano</h1>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-row">
        {/* NavBar Container */}
        <div className="m-4">
          <NavBar />
        </div>
        {/* Content Container */}
        <div className="bg-white rounded-xl shadow-lg m-4 flex-grow p-4"></div>
      </div>
    </div>
  );
}
