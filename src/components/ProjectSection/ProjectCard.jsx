import React from "react";

export const ProjectCard = ({ img }) => {
  return (
    <div>
      <div className="card card-compact bg-base-100  shadow-xl">
        <figure>
          <img className="max-h-[500px] w-full" src={img} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};
