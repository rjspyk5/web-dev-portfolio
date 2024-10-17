import { Button } from "@mui/material";
import { AboutTab } from "../../components/AboutTab/AboutTab";
import { Banner } from "../../components/Banner/Banner";
import { Contact } from "../../components/Contact/Contact";
import { Education } from "../../components/Education/Education";
import { ProjectSection } from "../../components/ProjectSection/ProjectSection";
import { SkillSection } from "../../components/SkillSection/SkillSection";
import { About } from "../About/About";
import { Timeline } from "../../components/Timeline/Timeline";

export const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Timeline />
      <Education />
      <SkillSection />
      <ProjectSection />

      <Contact />
    </div>
  );
};
