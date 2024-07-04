import React from "react";
import { ProjectCard } from "./ProjectCard";

export const ProjectSection = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
      <div className="flex justify-end">
        <button className="btn ">See All</button>
      </div>
    </div>
  );
};
