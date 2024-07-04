import { Banner } from "../../components/Banner/Banner";
import { SectionHeading } from "./../../components/sectionHeading/SectionHeading";
export const Home = () => {
  return (
    <div>
      <Banner />
      <SectionHeading heading="Skills" id="#skills" />
      <SectionHeading heading="Projects" id="#projects" />
      <SectionHeading heading="Contact Info" id="#contact" />
    </div>
  );
};
