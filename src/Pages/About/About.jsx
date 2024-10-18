import { Typewriter } from "react-simple-typewriter";
import profile from "../../assets/profile1.jpg";
import { SectionHeading } from "./../../components/sectionHeading/SectionHeading";

export const About = () => {
  return (
    <div>
      <SectionHeading heading="About Me" />
      <div className="flex flex-col-reverse md:flex-row gap-10">
        <div className="md:w-4/6 flex space-y-5 flex-col ">
          <div>
            <h1 className="text-2xl font-bold mb-5">Who Am I?</h1>
            <p className="text-lg">
              I’m a Freelance Web Developer based in Dhaka, Bangladesh. I
              strives to build immersive and beautiful web applications through
              carefully crafted code and user-centric design.
            </p>
          </div>

          <div className="flex space-y-5 flex-col ">
            <h1 className="text-2xl font-bold">Personal Info</h1>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-3 mb-5">
              <div className="flex items-center gap-2">
                <div>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 320 512"
                    className="text-2xl text-blue-500"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-xs">Mobile</p>
                  <p>+8801684883865</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 576 512"
                    className="text-2xl text-violet-500"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M160 448c-25.6 0-51.2-22.4-64-32-64-44.8-83.2-60.8-96-70.4V480c0 17.67 14.33 32 32 32h256c17.67 0 32-14.33 32-32V345.6c-12.8 9.6-32 25.6-96 70.4-12.8 9.6-38.4 32-64 32zm128-192H32c-17.67 0-32 14.33-32 32v16c25.6 19.2 22.4 19.2 115.2 86.4 9.6 6.4 28.8 25.6 44.8 25.6s35.2-19.2 44.8-22.4c92.8-67.2 89.6-67.2 115.2-86.4V288c0-17.67-14.33-32-32-32zm256-96H224c-17.67 0-32 14.33-32 32v32h96c33.21 0 60.59 25.42 63.71 57.82l.29-.22V416h192c17.67 0 32-14.33 32-32V192c0-17.67-14.33-32-32-32zm-32 128h-64v-64h64v64zm-352-96c0-35.29 28.71-64 64-64h224V32c0-17.67-14.33-32-32-32H96C78.33 0 64 14.33 64 32v192h96v-32z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-xs">Email</p>
                  <p>imrakibul9@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="text-2xl text-green-500"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M444.52 3.52L28.74 195.42c-47.97 22.39-31.98 92.75 19.19 92.75h175.91v175.91c0 51.17 70.36 67.17 92.75 19.19l191.9-415.78c15.99-38.39-25.59-79.97-63.97-63.97z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-xs">Location</p>
                  <p>Dhaka, Bangladesh</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    className="text-2xl text-pink-500"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-xs">Birthday</p>
                  <p>26 June 1997</p>
                </div>
              </div>
            </div>
          </div>
          <button className="btn bg-primary inline w-44 ">
            More About Info
          </button>
        </div>
        <div className="md:w-2/6 flex justify-center items-center">
          {" "}
          <img
            className={`max-h-96 duration-300 transition-all shadow-[0px_0px_30px_15px_rgba(0,150,255,0.6)]  ease-linear outline outline-2 outline-transparent  rounded-md  hover:shadow-lg hover:shadow-primary `}
            src={profile}
          />
        </div>
      </div>
    </div>
  );
};
