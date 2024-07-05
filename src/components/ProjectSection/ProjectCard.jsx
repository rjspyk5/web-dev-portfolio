import React from "react";

export const ProjectCard = ({ img }) => {
  return (
    <div>
      <div className="card card-compact bg-base-100  shadow-xl">
        <figure>
          <img className="max-h-[500px] w-full" src={img} />
        </figure>
        <div className="card-body"></div>
      </div>
    </div>
  );
};
