import projectImage4 from "@/public/projects/Microraptor.png";
import Link from "next/link";

export interface ProjectModalProps {
  name: string;
  content: string;
  image: string;
  github: string;
  onClose: () => void;
}

export default function ProjectModal({
  name,
  image,
  content,
  github,
  onClose,
}: ProjectModalProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-40 flex overflow-scroll bg-background bg-opacity-50 px-2 py-36 sm:px-8">
      <div className="flex-grow overflow-scroll rounded-xl border-[2px] border-accent bg-background px-4 py-4 shadow-lg md:mx-24 lg:mx-36">
        {/* Exit Button */}
        <div className="flex justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="size-8 stroke-white hover:cursor-pointer"
            onClick={onClose}
          >
            <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm3.707,12.293a1,1,0,1,1-1.414,1.414L12,13.414,9.707,15.707a1,1,0,0,1-1.414-1.414L10.586,12,8.293,9.707A1,1,0,0,1,9.707,8.293L12,10.586l2.293-2.293a1,1,0,0,1,1.414,1.414L13.414,12Z" />
          </svg>
        </div>
        {/* Content */}
        <div className="mx-4 sm:mx-32">
          {/* Project Image */}
          <img src={image} className="mb-8 rounded-xl" />

          {/* Project Name */}
          <h1 className="m-4 my-8 text-4xl font-bold tracking-tight text-content">
            {name}
          </h1>
          {/* Project Description */}
          <p className="m-4 my-8 text-content">{content}</p>
          <div className="flex justify-center">
            <Link
              href={github}
              className="rounded-full bg-primary p-2 hover:cursor-pointer hover:bg-blue-400 hover:shadow-lg"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                className="mx-2 inline"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <p className="mx-2 inline font-semibold text-black">
                View on GitHub!
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
