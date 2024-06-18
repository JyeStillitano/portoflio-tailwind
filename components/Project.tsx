export interface ProjectProps {
  name: string;
  image: string;
}

export default function Project({ name, image }: ProjectProps) {
  return (
    <div className="group mx-4 py-2">
      <img
        className="max-w-72 rounded-lg border-2 border-accent transition-all group-hover:cursor-pointer group-hover:border-white"
        src={image}
        alt="Project Image"
      />
      <p className="bold text-md relative bottom-28 z-0 text-center font-bold text-white group-hover:cursor-pointer">
        {name}
      </p>
    </div>
  );
}
