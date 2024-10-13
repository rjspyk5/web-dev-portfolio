import profile from "../../assets/profile1.jpg";
import { Typewriter } from "react-simple-typewriter";
import { buttonBg } from "../../lib/colorPlate";

export const Banner = () => {
  return (
    <div className="flex shadow-xl border  rounded-md flex-col md:flex-row justify-between p-10 my-5">
      <div className="md:w-2/5 flex justify-center items-center ">
        <img
          className={`max-h-96 duration-300 transition-all ease-linear outline outline-2 outline-transparent  rounded-md  hover:shadow-lg hover:shadow-green-400 `}
          src={profile}
        />
      </div>
      <div className="md:w-3/5 flex space-y-5 flex-col justify-center">
        <h1 className="text-2xl">Hi There</h1>
        <h1 className="text-5xl font-bold">I'm Rakibul Islam</h1>
        <span className={`text-4xl text-[${buttonBg}] font-bold`}>
          <Typewriter
            words={[
              "MERN Stack Devloper",
              "Web Devloper",
              "React Devloper",
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
          I’m a Freelance UI/UX Designer and Developer based in London, England.
          I strives to build immersive and beautiful web applications through
          carefully crafted code and user-centric design.
        </p>
        <div className="flex gap-4">
          <button className={`btn bg-[${buttonBg}] text-white`}>
            <a href="/Rakibul.pdf" download="Rakibul.pdf">
              Download CV
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};
