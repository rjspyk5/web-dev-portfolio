import React from "react";
import { SkillIteam } from "./SkillIteam";
import {
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiReactquery,
  SiRedux,
  SiMongoosedotws,
  SiChakraui,
  SiMui,
  SiAxios,
  SiPreact,
  SiSass,
  SiReacthookform,
  SiJsonwebtokens,
  SiAntdesign,
  SiVercel,
  SiNetlify,
} from "react-icons/si";
import {
  FaHtml5,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaGitAlt,
  FaSave,
  FaAngular,
  FaVuejs,
  FaPython,
  FaBootstrap,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import { RiFlutterFill, RiJavascriptFill, RiNextjsLine } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoCss3 } from "react-icons/io5";
import { BsStripe } from "react-icons/bs";
import { GrMysql } from "react-icons/gr";

export const SkillSection = () => {
  const skillIcons = [
    { name: "HTML", icon: <FaHtml5 size={40} /> },
    { name: "CSS", icon: <IoLogoCss3 size={40} /> },
    { name: "JavaScript", icon: <RiJavascriptFill size={40} /> },
    { name: "React", icon: <FaReact size={40} /> },
    { name: "Express.js", icon: <SiExpress size={40} /> },
    { name: "TailwindCSS", icon: <SiTailwindcss size={40} /> },
    { name: "MongoDB", icon: <SiMongodb size={40} /> },
    { name: "Firebase", icon: <SiFirebase size={40} /> },
    { name: "Bootstrap", icon: <FaBootstrap size={40} /> },
    { name: "Git", icon: <FaGitAlt size={40} /> },
    { name: "ChakraUI", icon: <SiChakraui size={40} /> },
    { name: "Axios", icon: <SiAxios size={40} /> },
    { name: "MaterialUI", icon: <SiMui size={40} /> },
    { name: "Stripe", icon: <BsStripe size={40} /> },
    { name: "Figma", icon: <FaFigma size={40} /> },
    { name: "React Hook Form", icon: <SiReacthookform size={40} /> },
    { name: "JWT", icon: <SiJsonwebtokens size={40} /> },
    { name: "Ant Design", icon: <SiAntdesign size={40} /> },
    { name: "MySQL", icon: <GrMysql size={40} /> },
    { name: "Vercel CLI", icon: <SiVercel size={40} /> },
    { name: "Netlify", icon: <SiNetlify size={40} /> },
    { name: "TanStack Query", icon: <SiReactquery size={40} /> },
  ];

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 md:grid-cols-6 lg:grid-cols-8">
      {skillIcons.map((skill, idx) => (
        <SkillIteam key={idx} icon={skill.icon} name={skill.name} />
      ))}
    </div>
  );
};
