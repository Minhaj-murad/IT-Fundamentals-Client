import React from 'react';
import img from '../images/home1.webp'
const Home = () => {
    return (
        <div className="relative">
        <img
          src={img}
          className="absolute inset-0 object-cover w-full h-auto"
          alt=""
        />
        <div className="relative ">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <h2 className="max-w-lg mb-6 mt-12 font-sans text-3xl font-bold tracking-tight text-amber-600 sm:text-4xl sm:leading-none">
                  Fundamental Courses for <br className="hidden md:block" />
                 Information Technology  {' '}
                  <span className="text-teal-accent-400">Based Students</span>
                </h2>
                <p className="max-w-xl mb-4 text-base text-lime-100 md:text-lg">
                A Computer Engineer is a professional who manages and designs computer hardware systems. They often specialize in either software or hardware. Still, they must be able to program because their tasks include developing new programs for computers as well as updating old ones as needed..
                </p>
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
                >
                  Learn more
                  <svg
                    className="inline-block w-3 ml-2"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                  </svg>
                </a>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Home;