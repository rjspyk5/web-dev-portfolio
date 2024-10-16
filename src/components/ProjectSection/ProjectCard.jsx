import React from "react";
import { Link } from "react-router-dom";

export const ProjectCard = ({
  img,
  name,
  descreption,
  link,
  server,
  client,
}) => {
  return (
    <div>
      <div className="card card-compact bg-base-100  shadow-xl">
        <figure>
          <img className="max-h-[250px] w-full" src={img} />
        </figure>
        <div className="card-body">
          <h1 className="font-bold text-xl">{name}</h1>
          <p>{descreption}</p>
          <div className="flex gap-3">
            <Link
              className="btn bg-primary text-white"
              to={link}
              target="_blank"
            >
              Live
            </Link>
            <Link
              className="btn bg-primary text-white"
              to={client}
              target="_blank"
            >
              Client
            </Link>
            <Link
              className="btn bg-primary text-white"
              to={server}
              target="_blank"
            >
              Server
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
