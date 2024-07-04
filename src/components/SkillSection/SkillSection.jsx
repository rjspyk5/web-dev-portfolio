import { SkillIteam } from "./SkillIteam";

export const SkillSection = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-5">
      <SkillIteam />
      <SkillIteam />
      <SkillIteam />
      <SkillIteam />
      <SkillIteam />
      <SkillIteam />
    </div>
  );
};
