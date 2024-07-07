import React from "react";

export const SkillIteam = ({ icon, name }) => {
  return (
    <div className="p-4 flex hover:shadow-2xl duration-1000 hover:scale-105 flex-col shadow-lg border rounded-md  justify-center items-center space-y-2">
      {icon}
      <p>{name}</p>
    </div>
  );
};
