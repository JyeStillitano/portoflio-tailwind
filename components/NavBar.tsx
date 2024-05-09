import Image from "next/image";

export default function NavBar() {
  return (
    <div className="flex flex-col min-w-12 max-w-24 h-96 justify-evenly rounded-xl shadow-lg bg-white">
      <i className="flex justify-center">A</i>
      <i className="flex justify-center">B</i>
      <i className="flex justify-center">C</i>
      <i className="flex justify-center">D</i>
      <i className="flex justify-center">E</i>
    </div>
  );
}
