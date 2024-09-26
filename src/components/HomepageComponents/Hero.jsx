import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <section>
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap items-center -mx-3">
            <div className="w-full lg:w-1/2 px-3">
              <div className="py-12">
                <div className="max-w-lg lg:max-w-md mx-auto lg:mx-0 mb-8 text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl mb-4 font-bold font-heading">
                    <span>Learning Made Effortless: Anywhere, Anytime</span>
                  </h2>
                  <p className="text-blueGray-400 leading-relaxed">
                    Imagine having the tools and resources to fuel your academic
                    journey—all at your fingertips. Whether you’re a student
                    looking to excel in your studies or a lecturer aiming to
                    deliver impactful lessons, our platform provides the perfect
                    environment for knowledge to thrive.
                  </p>
                </div>
                <div className="text-center lg:text-left">
                  <Link
                    className="block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded"
                    to="/signup"
                  >
                    Start Now
                  </Link>
                  <a
                    className="block sm:inline-block py-4 px-8 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white border border-blueGray-200 hover:border-blueGray-300 rounded"
                    href="#"
                  >
                    Documentation
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-3 mb-12 lg:mb-0">
              <div className="lg:h-128 flex items-center justify-center">
                <img
                  className="lg:max-w-lg"
                  src="https://img.freepik.com/free-vector/flat-university-concept-background_23-2148192915.jpg?t=st=1727392412~exp=1727396012~hmac=a988910e5f643fb03a0747a618762743d0f0abc11b620a5276b431be9ad4e5dd&w=740"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
