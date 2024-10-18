import profile from "../../assets/profile1.jpg";
import { Typewriter } from "react-simple-typewriter";
import "./Banner.css";
import { MdFrontHand } from "react-icons/md";

export const Banner = () => {
  return (
    <div className="flex gap-10 shadow-2xl shadow-[#070508fc]  rounded-md flex-col md:flex-row justify-around p-10 my-5">
      <div className="md:w-2/5 flex justify-center items-center">
        <img
          className="max-h-96 duration-300 transition-all shadow-[0px_0px_30px_3px_rgba(0,150,255,0.6)]  ease-linear outline outline-2 outline-transparent  rounded-lg  hover:shadow-lg hover:shadow-primary "
          src={profile}
        />
      </div>
      <div className="md:w-3/5 flex space-y-5 flex-col justify-center">
        <h1 className="text-2xl">
          {" "}
          Hi there{" "}
          <span className="hand ml-3 text-[white]">
            <MdFrontHand />
          </span>
          {/* <span className="hand2">👋</span> */}
        </h1>
        <h1 className="lg:text-5xl text-3xl xs:text-4xl font-bold flex items-center ">
          I'm{" "}
          <span className="bg-clip-text pl-2 pr-2 text-transparent bg-gradient-to-l  from-[#ffffff] to-[#1e69ff]">
            Rakibul Islam
          </span>
        </h1>
        <span
          style={{
            textShadow: `0 0 2px rgba(0,150,255,0.6), 0 0 5px rgba(0,150,255,0.6), 0 0 8px rgba(0,150,255,0.6), 0 0 10px #0515f7, 0 0 20px #1e69ff`,
          }}
          className={`text-4xl  font-bold `}
        >
          <Typewriter
            words={[
              "MERN Stack Developer",
              "Web Developer",
              "React Developer",
              "Web Designer",
            ]}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
        <p className="text-lg">
          I’m a Freelance Web Developer based in Dhaka, Bangladesh. I strives to
          build immersive and beautiful web applications through carefully
          crafted code and user-centric design.
        </p>
        <div className="flex gap-4">
          <button className={`btn bg-primary text-white`}>
            <a href="/Rakibul.pdf" download="Rakibul.pdf">
              Download CV
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};
