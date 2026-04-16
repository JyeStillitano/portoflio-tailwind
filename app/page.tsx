"use client";

import Marquee, { type Direction } from "@/components/Marquee";
import ProjectCard from "@/components/ProjectCard";
import ProjectGallery from "@/components/ProjectGallery";
import ContactTab from "@/components/ContactTab";
import SocialLink from "@/components/SocialLink";
import projects from "@/app/data/projects.json";

export default function Home() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black">
      <div className="absolute inset-0 flex items-center">
        <ProjectGallery>
          {projects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </ProjectGallery>
      </div>
      <div className="absolute top-0 left-0">
        <Marquee
          text="Creative Developer"
          variant="h3"
          direction="right"
          speed={2}
          pauseOnHover
        />
      </div>
      <ContactTab />
      <div className="absolute bottom-0 left-0">
        <Marquee
          text="Jye Stillitano"
          variant="h1"
          direction="left"
          speed={0.4}
          pauseOnHover
        />
        <Marquee
          direction="right"
          speed={0.2}
          pauseOnHover
          className="bg-white"
        >
          <SocialLink
            platform="github"
            href="https://github.com/JyeStillitano"
            label="@JyeStillitano"
          />
          <SocialLink
            platform="linkedin"
            href="https://www.linkedin.com/in/jye-stillitano-26aa921b2/"
            label="@Jye Stillitano"
          />
          <SocialLink
            platform="email"
            href="mailto:jyestillitano@hotmail.com"
            label="jyestillitano@hotmail.com"
          />
        </Marquee>
      </div>
    </div>
  );
}
