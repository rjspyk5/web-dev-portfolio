import { FaSchoolCircleExclamation, FaUpwork } from "react-icons/fa6";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Timeline.css";
import { IoMdSchool } from "react-icons/io";
import { BiSolidSchool } from "react-icons/bi";
import { LuSchool2 } from "react-icons/lu";
export const Timeline = () => {
  return (
    <div>
      <VerticalTimeline id="t ">
        <VerticalTimelineElement
          className="vertical-timeline-element--education "
          contentStyle={{
            background: "#0F0715", // Solid dark background color
            color: "#fff", // White text for contrast
            borderBottom: "1px solid #1E69FF",
            borderRight: "1px solid #1E69FF",

            borderRadius: "8px", // Rounded corners
            boxShadow: "-9px 0 50px -12px rgb(30 105 255 / 44%)", // Stronger shadow for depth
          }}
          contentArrowStyle={{
            borderRight: "13px solid #0F0715",
          }}
          iconStyle={{
            background: "#1e69ff", // Bright red icon background for contrast
            color: "#fff", // White icon color
            boxShadow: "0 0 15px rgba(107 107 107 / 70%)", // Subtle glow around the icon
          }}
          icon={<IoMdSchool />} // Example icon
        >
          <h3 className="vertical-timeline-element-title text-lg font-black">
            BSS in Economics
          </h3>
          <h4 className="vertical-timeline-element-subtitle font-semibold">
            National University
          </h4>
          <h6 className="text-sm">
            Result: 2.88{" "}
            <span className="font-normal text-xs">(out of 4.00)</span>
          </h6>
          <time className="font-mono italic">2016-2020</time>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education "
          contentStyle={{
            background: "#0F0715", // Solid dark background color
            color: "#fff", // White text for contrast
            borderBottom: "2px solid #1E69FF",
            borderRight: "2px solid #1E69FF",

            borderRadius: "8px", // Rounded corners
            boxShadow: "-9px 0 50px -12px rgb(30 105 255 / 44%)", // Stronger shadow for depth
          }}
          contentArrowStyle={{
            borderRight: "13px solid #0F0715",
          }}
          iconStyle={{
            background: "#1e69ff", // Bright red icon background for contrast
            color: "#fff", // White icon color
            boxShadow: "0 0 15px rgba(107 107 107 / 70%)", // Subtle glow around the icon
          }}
          icon={<IoMdSchool />} // Example icon
        >
          <h3 className="vertical-timeline-element-title text-lg font-black">
            BSS in Economics
          </h3>
          <h4 className="vertical-timeline-element-subtitle font-semibold">
            National University
          </h4>
          <h6 className="text-sm">
            Result: 2.88{" "}
            <span className="font-normal text-xs">(out of 4.00)</span>
          </h6>
          <time className="font-mono italic">2016-2020</time>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education "
          contentStyle={{
            background: "#0F0715", // Solid dark background color
            color: "#fff", // White text for contrast
            borderBottom: "2px solid #1E69FF",
            borderRight: "2px solid #1E69FF",

            borderRadius: "8px", // Rounded corners
            boxShadow: "-9px 0 50px -12px rgb(30 105 255 / 44%)", // Stronger shadow for depth
          }}
          contentArrowStyle={{
            borderRight: "13px solid #0F0715",
          }}
          iconStyle={{
            background: "#1e69ff", // Bright red icon background for contrast
            color: "#fff", // White icon color
            boxShadow: "0 0 15px rgba(107 107 107 / 70%)", // Subtle glow around the icon
          }}
          icon={<IoMdSchool />} // Example icon
        >
          <h3 className="vertical-timeline-element-title text-lg font-black">
            BSS in Economics
          </h3>
          <h4 className="vertical-timeline-element-subtitle font-semibold">
            National University
          </h4>
          <h6 className="text-sm">
            Result: 2.88{" "}
            <span className="font-normal text-xs">(out of 4.00)</span>
          </h6>
          <time className="font-mono italic">2016-2020</time>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};
