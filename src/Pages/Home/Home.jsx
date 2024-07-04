import { Banner } from "../../components/Banner/Banner";
import { Contact } from "../../components/Contact/Contact";
import { ProjectSection } from "../../components/ProjectSection/ProjectSection";
import { SkillSection } from "../../components/SkillSection/SkillSection";
import { SectionHeading } from "./../../components/sectionHeading/SectionHeading";
export const Home = () => {
  return (
    <div>
      <Banner />
      <SectionHeading heading="Skills" id="#skills" />
      <SkillSection />
      <SectionHeading heading="Projects" id="#projects" />
      <ProjectSection />
      <SectionHeading heading="Contact Info" id="#contact" />
      <Contact />
    </div>
  );
};
