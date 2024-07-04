import React from "react";

export const Contact = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12">
      <div className=" md:col-span-5"></div>
      <div className=" md:col-span-7 p-6 rounded-lg">
        <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
          <form className="card-body">
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
                className="textarea textarea-bordered textarea-lg w-full"
              ></textarea>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
