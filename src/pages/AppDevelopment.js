import React from "react";
import { Link } from "react-router-dom";
import google from "../Assets/google-logo-png-google-sva-scholarship-20.png";

const AppDevelopment = () => {
  return (
    <div>
      <div className="md:w-[90%] mx-auto bg-background rounded-lg flex flex-col lg:flex-row lg:items-center">
        <div className="lg:w-1/2 sm:px-2 md:px-4 lg:px-6">
          <h1 className="sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Best App Development Company in Noida
          </h1>
          <p className="mt-4 text-[18px] text-justify">
            Mobile applications have become an essential part of every business.
            Whether you are a startup looking to launch your first app or an
            established business aiming to enhance customer engagement, having a
            well-designed and functional mobile app is crucial. At Maxify
            Solution, we pride ourselves on being the best app development
            company in Noida, offering top-notch mobile app solutions that cater
            to your business needs.
          </p>
          <div className="mt-6 flex space-x-4">
            <Link
              to=""
              className="bg-[#2334de] text-white py-3 px-5 rounded-full hover:bg-[#2334de]/80"
            >
              Learn More
            </Link>
            <Link
              to=""
              className="bg-[#d5d8fa] text-[#2334de] py-3 px-5 rounded-full hover:bg-[#d5d8fa]/80"
            >
              Let's Talk <span undefinedhidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 p-4 mt-8 lg:mt-0 relative">
          <div className="bg-card  rounded-lg">
            <img
              src="https://placehold.co/600x400"
              alt="App Development"
              className="rounded-lg"
            />
          </div>
          <div className="mt-8 flex flex-col gap-3 absolute bottom-0 ">
            <div className="bg-card p-3 rounded-lg shadow-md  lg:mb-0 w-1/2 bg-white">
              <span className="bg-[#44b88c] text-white  rounded-sm px-2 text-xs">
                Exclusive
              </span>
              <h2 className="mt-2 text-xl font-bold">Success Stories</h2>
            </div>
            <div className="flex gap-3 w-full ">
              <div className="bg-card w-1/2 py-6 px-4 rounded-lg shadow-md mb-4 lg:mb-0 flex  justify-center items-center bg-white">
                <div className="flex items-center">
                  <img
                    src="https://placehold.co/40x40"
                    alt="Expert 1"
                    className="rounded-full relative z-10"
                  />
                  <img
                    src="https://placehold.co/40x40"
                    alt="Expert 2"
                    className="rounded-full relative -ml-3 z-20"
                  />
                  <img
                    src="https://placehold.co/40x40"
                    alt="Expert 3"
                    className="rounded-full relative -ml-3 z-30 mr-2"
                  />
                </div>
                <span className="text-sm">Meet Our Experts</span>
              </div>

              <div className="bg-card w-1/2 flex justify-around items-center p-4 rounded-lg shadow-md bg-white">
                <div>
                  <span className="text-[5px]">Verified by Google</span>
                  <img src={google} alt="" className="w-[80px] h-auto" />
                </div>
                <div>
                  <span className="ml-2 text-yellow-500">★★★★★</span>
                  <p className="ml-2 sm:text-[10px] md:text-sm">100+ Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDevelopment;
