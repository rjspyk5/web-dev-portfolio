import { Banner } from "../../components/Banner/Banner";
import { Contact } from "../../components/Contact/Contact";
import { Education } from "../../components/Education/Education";
import { ProjectSection } from "../../components/ProjectSection/ProjectSection";
import { SkillSection } from "../../components/SkillSection/SkillSection";
import { SectionHeading } from "./../../components/sectionHeading/SectionHeading";
export const Home = () => {
  return (
    <div>
      <Banner />

      <Education />

      <SkillSection />

      <ProjectSection />

      <Contact />
    </div>
  );
};
