import Image from "next/image";

export interface ProjectProps {
  name: string;
  image: string;
}

export default function Project({ name, image }: ProjectProps) {
  return (
    <div className="group mx-4 py-2">
      <Image
        className="m-auto rounded-lg border-2 border-accent opacity-60 transition-all group-hover:cursor-pointer group-hover:border-white"
        src={image}
        width={300}
        height={200}
        alt="Project Image"
      />
      <p className="bold text-md relative bottom-28 text-center font-bold text-white group-hover:cursor-pointer">
        {name}
      </p>
    </div>
  );
}
