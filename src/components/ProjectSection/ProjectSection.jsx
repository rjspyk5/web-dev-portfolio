import { ProjectCard } from "./ProjectCard";
import p1 from "../../assets/p1.jpg";
import p2 from "../../assets/p2.jpg";
import p3 from "../../assets/p3.jpg";

export const ProjectSection = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <ProjectCard img={p1} />
        <ProjectCard img={p2} />
        <ProjectCard img={p3} />
      </div>
      <div className="flex justify-end">
        <button className="btn ">See All</button>
      </div>
    </div>
  );
};
