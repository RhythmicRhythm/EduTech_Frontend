import React from "react";

const Cta = () => {
  return (
    <div>
      <section className="py-20 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-16 sm:py-12 rounded-3xl bg-orange-800 overflow-hidden">
            <img
              className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full object-cover"
              src="saturn-assets/images/cta/circle-bg.svg"
              alt=""
            />
            <div className="relative text-center">
              <span className="block text-xl sm:text-3xl  font-semibold text-orange-400 mb-6">
                Start Your Learning Adventure
              </span>
              <h2 className="font-heading text-xl sm:text-4xl font-bold text-white mb-8">
                <span>Whether you're here to study or share knowledge, access all the tools you need </span>
                <span className="font-serif italic"> today!</span>
              </h2>
              <a
                className="relative group inline-block w-full sm:w-auto py-4 px-6 text-orange-900 hover:text-white font-semibold bg-white rounded-md overflow-hidden transition duration-300"
                href="#"
              >
                <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-110 transition duration-500" />
                <div className="relative flex items-center justify-center">
                  <span className="mr-4">Get Started</span>
                  <span>
                    <svg
                      width={8}
                      height={12}
                      viewBox="0 0 8 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.83 5.28999L2.59 1.04999C2.49704 0.956266 2.38644 0.881872 2.26458 0.831103C2.14272 0.780334 2.01202 0.754196 1.88 0.754196C1.74799 0.754196 1.61729 0.780334 1.49543 0.831103C1.37357 0.881872 1.26297 0.956266 1.17 1.04999C0.983753 1.23736 0.879211 1.49081 0.879211 1.75499C0.879211 2.01918 0.983753 2.27263 1.17 2.45999L4.71 5.99999L1.17 9.53999C0.983753 9.72736 0.879211 9.98081 0.879211 10.245C0.879211 10.5092 0.983753 10.7626 1.17 10.95C1.26344 11.0427 1.37426 11.116 1.4961 11.1658C1.61794 11.2155 1.7484 11.2408 1.88 11.24C2.01161 11.2408 2.14207 11.2155 2.26391 11.1658C2.38575 11.116 2.49656 11.0427 2.59 10.95L6.83 6.70999C6.92373 6.61703 6.99813 6.50643 7.04889 6.38457C7.09966 6.26271 7.1258 6.13201 7.1258 5.99999C7.1258 5.86798 7.09966 5.73728 7.04889 5.61542C6.99813 5.49356 6.92373 5.38296 6.83 5.28999Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cta;
