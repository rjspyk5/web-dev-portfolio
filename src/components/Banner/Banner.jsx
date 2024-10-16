import profile from "../../assets/profile1.jpg";
import { Typewriter } from "react-simple-typewriter";

export const Banner = () => {
  return (
    <div className="flex shadow-xl   rounded-md flex-col md:flex-row justify-around p-10 my-5">
      <div className="md:w-2/5 flex ">
        <img
          className={`max-h-96 duration-300 transition-all shadow-[0px_0px_30px_15px_rgba(0,150,255,0.6)]  ease-linear outline outline-2 outline-transparent  rounded-md  hover:shadow-lg hover:shadow-primary `}
          src={profile}
        />
      </div>
      <div className="md:w-3/5 flex space-y-5 flex-col justify-center">
        <h1 className="text-2xl">Hi There</h1>
        <h1 className="text-5xl font-bold">I'm Rakibul Islam</h1>
        <span
          style={{
            textShadow: `0 0 5px #0d50b5, 0 0 10px #0d50b5, 0 0 20px #0d50b5, 0 0 40px #0d50b5, 0 0 80px #0d50b5`,
          }}
          className={`text-4xl  font-bold`}
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
