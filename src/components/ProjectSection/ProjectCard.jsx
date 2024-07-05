import React from "react";

export const ProjectCard = ({ img, name, descreption }) => {
  return (
    <div>
      <div className="card card-compact bg-base-100  shadow-xl">
        <figure>
          <img className="max-h-[500px] w-full" src={img} />
        </figure>
        <div className="card-body">
          <h1 className="font-bold text-xl">{name}</h1>
          <p>{descreption}</p>
        </div>
        <div className="flex gap-3">
          <button className="btn">Live</button>
          <button className="btn">Client code</button>
          <button className="btn">Server Code</button>
        </div>
      </div>
    </div>
  );
};
