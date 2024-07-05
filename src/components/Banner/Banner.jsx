import profile from "../../assets/profile1.jpg";
export const Banner = () => {
  return (
    <div className="flex shadow-xl rounded-md flex-col md:flex-row justify-between p-10 my-5">
      <div className="md:w-2/5 flex justify-center items-center">
        <img className="max-h-96" src={profile} alt="" />
      </div>
      <div className="md:w-3/5 flex space-y-5 flex-col justify-center">
        <h1 className="text-2xl">Hi There</h1>
        <h1 className="text-5xl font-bold">I'm Rakibul Islam</h1>
        <h1 className="text-4xl">MERN Stack Devloper</h1>
        <p className="text-lg">
          I’m a Freelance UI/UX Designer and Developer based in London, England.
          I strives to build immersive and beautiful web applications through
          carefully crafted code and user-centric design.
        </p>
        <div className="flex gap-4">
          <button className="btn">
            <a href="/Rakibul.pdf" download="Rakibul.pdf">
              Download CV
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};
