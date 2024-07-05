import React from "react";

export const SkillIteam = ({ icon, name }) => {
  return (
    <div className="p-4 flex flex-col  justify-center items-center space-y-2">
      {icon}
      <p>{name}</p>
    </div>
  );
};
