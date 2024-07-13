"use client";

import React, { useState } from "react";
import ProjectModal from "./ProjectModal";

export interface ProjectProps {
  name: string;
  image: string;
  content: string;
  github: string;
}

export default function Project({
  name,
  image,
  content,
  github,
}: ProjectProps) {
  const [modalOpen, toggleModal] = useState(false);

  function handleToggle() {
    toggleModal(!modalOpen);
  }

  return (
    <div>
      {modalOpen ? (
        <ProjectModal
          name={name}
          image={image}
          content={content}
          github={github}
          onClose={handleToggle}
        />
      ) : null}
      <div
        className="group mx-2 py-1 sm:mx-4 sm:py-2"
        onClick={() => handleToggle()}
      >
        <img
          className="max-w-72 rounded-lg border-2 border-accent transition-all group-hover:cursor-pointer group-hover:border-white"
          src={image}
          alt="Project Image"
        />
        <p className="bold text-md relative bottom-28 mx-12 rounded-full text-center font-bold text-white group-hover:cursor-pointer">
          {name}
        </p>
      </div>
    </div>
  );
}
