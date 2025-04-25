import React from "react";
import { GiFastArrow } from "react-icons/gi";

const LandingPage = () => {
  return (
    <section className="py-16 overflow-hidden min-h-[85vh]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 pt-8">\
          {/* Background glow effect */}
          <div className="absolute -z-10 w-96 h-96 top-1/4 left-1/4 rounded-full bg-blue-600 opacity-20 blur-3xl"></div>
          
          {/* Left Side - Image with Glow Effect */}
          <div className="w-full lg:w-1/2 relative flex justify-center">
            <div className="relative z-10 w-full lg:w-[80%] xl:w-[90%]">
              <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-1 rounded-lg shadow-2xl">
                <div className="rounded-md">
                  <img
                    src="/image.png" // Remove /public (it's unnecessary)
                    alt="rackIt preview"
                    className="w-full h-auto rounded-md shadow-lg object-contain"
                  />
                </div>
              </div>
            </div>

            
          </div>

          {/* Right Side - Text Content */}
          <div className="w-full lg:w-1/2">
            <div className="max-w-lg mx-auto lg:mx-0">
              <h4 className="text-blue-300 font-medium mb-4">
                <span className="text-gray-400">What is _rackIt ?</span>
                <br />
                <p className="pt-2 flex items-center">
                  "CrackIt" → "TrackIt" → "StackIt" →{" "}
                  <span className="text-yellow-500 text-xl ml-1">
                    <GiFastArrow />
                  </span>
                </p>
              </h4>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Smartly Crack Your Resume Game
              </h2>
              <p className="text-gray-300 text-sm mb-8 max-w-lg">
                Whether you're building job-winning resumes, tailoring cover
                letters, organizing vital documents, or analyzing job posts —
                CrackIt helps you do it faster, smarter, and better.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href="#demo"
                  className="px-6 py-3 bg-yellow-600 hover:bg-yellow-500 text-white font-medium rounded-lg transition-colors duration-300"
                >
                  Get Started Free
                </a>
                <a
                  href="#learn"
                  className="px-6 py-3 border border-gray-300 hover:border-gray-200 text-gray-300 hover:text-gray-200 font-medium rounded-lg transition-colors duration-300"
                >
                  Learn More
                </a>
              </div>
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((item) => (
                    <div
                      key={item}
                      className="w-8 h-8 rounded-full bg-gray-300 border-2 border-slate-800 overflow-hidden"
                    >
                      <img
                        src={`/api/placeholder/50/50`}
                        alt={`User ${item}`}
                      />
                    </div>
                  ))}
                </div>
                <p className="ml-4 text-sm text-slate-200">
                  <span className="font-semibold text-blue-500">5,000+</span>{" "}
                  satisfied customers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
