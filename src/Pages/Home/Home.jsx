import { Banner } from "../../components/Banner/Banner";
import { Contact } from "../../components/Contact/Contact";
import { ProjectSection } from "../../components/ProjectSection/ProjectSection";
import { SkillSection } from "../../components/SkillSection/SkillSection";
import { SectionHeading } from "./../../components/sectionHeading/SectionHeading";
export const Home = () => {
  return (
    <div>
      <Banner />
      <div id="#skills">
        <SectionHeading heading="Skills" />
        <SkillSection />
      </div>
      <div id="#projects">
        <SectionHeading heading="Projects" />
        <ProjectSection />
      </div>
      <div id="#contact">
        <SectionHeading heading="Contact Info" />
        <Contact />
      </div>
    </div>
  );
};
