import { SectionHeading } from "../sectionHeading/SectionHeading";

export const Education = () => {
  return (
    <div>
      <SectionHeading heading="Education" />
      <div className=" h-full">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div
              data-aos="fade-right"
              className="timeline-start mb-10 md:text-end"
            >
              <time className="font-mono italic">2016-2020</time>
              <div className="text-lg font-black"> BSS in Economics</div>
              <p>National University</p>
              <div className="text-lg font-black">
                Result: 2.88{" "}
                <span className="font-normal text-xs">(out of 4.00)</span>
              </div>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div data-aos="fade-left" className="timeline-end mb-10">
              <time className="font-mono italic">2015</time>
              <div className="text-lg font-black">
                Higher Secondary School Certificate
              </div>
              <p>Barisal Model School and College</p>
              <div className="text-lg font-black">
                Result: 3.83{" "}
                <span className="font-normal text-xs">(out of 5.00)</span>
              </div>
            </div>
            <hr />
          </li>

          <li>
            <hr />
            <div className="timeline-middle ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div
              data-aos="fade-right"
              className="timeline-start mb-10 md:text-end"
            >
              <time className="font-mono italic">2013</time>
              <div className="text-lg font-black">
                Secondary School Certificate
              </div>
              <p>Patarhat Muslim Model High School</p>
              <div className="text-lg font-black">
                Result: 4.44{" "}
                <span className="font-normal text-xs">(out of 5.00)</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
