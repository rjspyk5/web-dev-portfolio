import { ContactDetailsIteam } from "./ContactDetailsIteam";
import { BsEnvelope, BsTelephone } from "react-icons/bs";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { SlLocationPin } from "react-icons/sl";
import { SectionHeading } from "../sectionHeading/SectionHeading";

export const Contact = () => {
  return (
    <>
      {" "}
      <SectionHeading heading="Contact Info" />{" "}
      <div className="grid grid-cols-1 gap-16 md:gap-8 md:grid-cols-12">
        <div className=" md:col-span-4">
          <p className="mb-10 font-semibold text-xl ">Contact info</p>
          <div>
            <div className="space-y-14">
              <ContactDetailsIteam
                text="Email"
                logo={<BsEnvelope size={36} />}
                contactDetails={["imrakibul9@gmail.com"]}
              />
              <ContactDetailsIteam
                text="Mobile"
                logo={<BsTelephone size={36} />}
                contactDetails={["+8801684883865"]}
              />
              <ContactDetailsIteam
                text="Location"
                logo={<SlLocationPin size={36} />}
                contactDetails={["mail", "mail"]}
              />
            </div>

            <p className="mt-14 mb-6 font-semibold text-xl ">Social info</p>
            <div className="flex  gap-5">
              <div className="flex justify-center items-center p-6 rounded-full bg-base-100 shadow-2xl">
                <a
                  href="https://www.linkedin.com/in/rakibulweb/"
                  target="_blank"
                >
                  <FaLinkedin size={36} />
                </a>
              </div>
              <div className="flex justify-center items-center p-6 rounded-full bg-base-100 shadow-2xl">
                <a href="https://github.com/rjspyk5" target="_blank">
                  <FaSquareGithub size={36} />
                </a>
              </div>
              <div className="flex justify-center items-center p-6 rounded-full bg-base-100 shadow-2xl">
                <a href="https://www.facebook.com/rjspyk2" target="_blank">
                  {" "}
                  <FaFacebookSquare size={36} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className=" md:col-span-8  rounded-lg">
          <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
            <form className="card-body">
              <h1 className="text-4xl font-bold">Let’s work together.</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Subject</span>
                </label>
                <input placeholder="Subject" className="input input-bordered" />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>

                <textarea
                  placeholder="Your Message"
                  className="textarea textarea-bordered textarea-lg  w-full"
                ></textarea>
              </div>

              <div className="form-control mt-6">
                <button className="btn text-white bg-[green]">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
