import React from "react";

const About = () => {
  return (
    <div>
      <section className="overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="relative mb-32">
            <div className="hidden lg:block absolute top-0 left-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={500}
                height={500}
                viewBox="0 0 500 500"
                fill="none"
              >
                <path
                  d="M0.5 498.311V304.054C0.5 136.406 136.406 0.5 304.054 0.5H498.311C498.967 0.5 499.5 1.03289 499.5 1.68919V136.561C499.5 137.217 498.967 137.75 498.311 137.75H342.061C290.59 137.75 239.516 163.123 201.319 201.319C163.123 239.516 137.75 290.59 137.75 342.061V498.311C137.75 498.967 137.217 499.5 136.561 499.5H1.68919C1.03249 499.5 0.5 498.967 0.5 498.311Z"
                  fill="url(#paint0_linear_231_9230)"
                  stroke="#F0F0F0"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_231_9230"
                    x1={0}
                    y1={500}
                    x2={500}
                    y2={0}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#F8F8F8" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="hidden lg:block absolute top-0 right-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={500}
                height={500}
                viewBox="0 0 500 500"
                fill="none"
              >
                <path
                  d="M499.5 1.68919V195.946C499.5 363.594 363.594 499.5 195.946 499.5H1.68919C1.03289 499.5 0.5 498.967 0.5 498.311V363.439C0.5 362.783 1.03289 362.25 1.68919 362.25H157.939C209.41 362.25 260.484 336.877 298.681 298.681C336.877 260.484 362.25 209.41 362.25 157.939V1.68919C362.25 1.03289 362.783 0.5 363.439 0.5H498.311C498.967 0.5 499.5 1.03289 499.5 1.68919Z"
                  fill="url(#paint0_linear_231_9229)"
                  stroke="#F0F0F0"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_231_9229"
                    x1="499.998"
                    y1="2.85805e-05"
                    x2="8.49831"
                    y2={500}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#F8F8F8" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="relative z-10">
              <h1 className="text-center text-3xl lg:text-6xl font-bold font-heading max-w-lg lg:max-w-3xl mx-auto pt-14 pb-32">
                Transforming Education with Innovative Digital Solutions
              </h1>
              <div className="border border-gray-200 bg-white rounded-3xl flex flex-wrap">
                <div className="w-full md:w-1/2 lg:w-1/3 py-8">
                  <div className="md:border-r border-gray-200 px-12">
                    <p className="text-gray-600 mb-2 text-center">Founded</p>
                    <h2 className="text-4xl lg:text-5xl font-semibold text-center">
                      2024
                    </h2>
                  </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 py-8">
                  <div className="lg:border-r border-gray-200 px-12">
                    <p className="text-gray-600 mb-2 text-center">
                      Courses Available
                    </p>
                    <h2 className="text-4xl lg:text-5xl font-semibold text-center">
                      100+
                    </h2>
                  </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 py-8">
                  <div className="md:border-r border-gray-200 px-12">
                    <p className="text-gray-600 mb-2 text-center">
                      Supported Devices
                    </p>
                    <h2 className="text-2xl lg:text-xl font-semibold text-center">
                      Desktop, Tablet, Mobile
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-semibold text-center mb-14">
            Dedicated to Infusing Joy into Education
          </h2>
          <div className="flex flex-wrap mb-32 -mx-4">
            <div className="w-full lg:w-1/2 p-4">
              <p className="text-gray-600 text-sm">
                Our platform gives students the flexibility to access course
                materials anytime, anywhere, allowing them to learn at their own
                pace. With all subjects and assignments in one place, they can
                easily manage deadlines, download materials, and submit work.
                Interactive video lectures, quizzes, and dynamic content keep
                students engaged and help them build key skills.
              </p>
            </div>
            <div className="w-full lg:w-1/2 p-4">
              <p className="text-gray-600 text-sm">
                Lecturers can seamlessly manage courses, upload materials, and
                track student progress through a simple interface. By using
                automated tools for grading and submissions, they save time and
                can focus on creating engaging learning experiences and
                mentoring students effectively.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
