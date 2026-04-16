"use client";

import { useState } from "react";
import ProjectModal from "./ProjectModal";

export interface ProjectCardProps {
  name: string;
  image: string;
  content: string;
  github?: string;
  link?: string;
}

export default function ProjectCard({
  name,
  image,
  content,
  github,
  link,
}: ProjectCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      {modalOpen && (
        <ProjectModal
          name={name}
          image={image}
          content={content}
          github={github ?? null}
          link={link}
          onClose={() => setModalOpen(false)}
        />
      )}
      <div
        className="group mx-2 w-72 cursor-pointer py-1 sm:mx-4 sm:py-2"
        onClick={() => setModalOpen(true)}
      >
        <div className="border-brand-primary h-48 w-full overflow-hidden rounded-lg border-2 transition-all group-hover:border-white">
          <img
            src={image}
            alt={name}
            className="bg-brand-primary h-full w-full object-cover"
          />
        </div>
        <p className="mt-2 text-left text-sm font-bold break-words text-white">
          {name}
        </p>
      </div>
    </div>
  );
}
