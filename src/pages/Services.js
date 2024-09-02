import React from "react";
import img1 from "../Assets/services/1.webp";
import img4 from "../Assets/services/4.webp";
import img5 from "../Assets/services/5.webp";

const Services = () => {
  return (
    <div>
      {/* hero section */}
      <div className="flex flex-col md:flex-row items-center bg-gray-50 min-h-screen">
        {/* Left Section */}
        <div className="md:w-1/2 mb-8 md:mb-0 px-10">
          <div className="bg-blue-700 uppercase text-white tracking-wider mb-4 text-[10px] flex text-center w-32 px-2 py-[2px] justify-between">
            <span>Why Your </span>
            <span className="w-10 text-red-600 mt-2">
              <hr />
            </span>
          </div>
          <h1 className="text-2xl md:text-[40px] font-semibold text-gray-900 leading-tight mb-4">
            <p>Business Needs The Best</p>
            <p className="text-blue-600">Website Development</p>
          </h1>
          <h2 className="text-lg md:text-xl text-gray-700 mb-6 font-bold">
            Company In Noida
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed text-sm">
            In today’s digital era, your website is more than just an online
            brochure—it’s the face of your business, a powerful tool that can
            attract customers, build credibility, and drive growth. Whether
            you’re a startup or a well-known company, maintaining an optimized
            website is important. This is where finding the best website
            development company in Noida becomes essential. Maxify Solutions,
            recognized as a leading website development company in Noida, is
            here to help you create a website that not only looks great but also
            delivers outstanding performance.
          </p>
          <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
            Get Started Now
          </button>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={img1}
            alt="Team Planning"
            className="rounded-lg shadow-md w-full h-auto"
          />
        </div>
      </div>
      {/* second section */}

      <div className="bg-white min-h-screen">
        <div className="flex flex-col md:flex-row items-center  p-8 md:p-16 w-[80%] mx-auto">
          {/* Left Section */}
          <div className="md:w-[50%] relative flex ml-10 md:mb-0">
            <div className="absolute left-0 top-0 bg-blue-600 w-2 h-full"></div>
            <div className="relative">
              <img
                src={img5}
                alt="Main"
                className="rounded-lg shadow-md w-full h-[25rem] mb-4 ml-2"
              />
              <img
                src={img4}
                alt="Secondary"
                className="rounded-lg shadow-md w-52 h-auto absolute bottom-0 right-0 transform translate-x-4 translate-y-4"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="md:w-[50%] pl-0">
            <div className="text-sm text-gray-500 uppercase tracking-wide mb-2">
              Why Choose Us?
            </div>
            <h2 className="text-3xl md:text-2xl font-bold text-gray-900 mb-6 kanit-regular">
              The Best Website Development <br />
              Company in Noida
            </h2>
            <div className="bg-white shadow-lg rounded-lg p-6 border-[1px]">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">
                <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                Expertise in Custom Web Development
              </h3>
              <p className="text-gray-700 mb-4 text-[12px]">
                As the best web development company in Noida, we specialize in
                creating tailor-made websites that align perfectly with your
                business needs. Our team of experienced developers and designers
                work with you to make your dream a reality. From the initial
                concept to the final launch, we ensure that every aspect of your
                website is crafted to perfection.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 ">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">
                <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                Comprehensive Range of Services
              </h3>
              <p className="text-gray-700 text-[12px]">
                Maxify Solutions, a top-rated website development company in
                Noida, offers a comprehensive suite of services that cover all
                aspects of web development. Whether you need a simple
                informational website or a complex e-commerce platform, we have
                the expertise to deliver high-quality solutions.
              </p>
            </div>
            <div className="mt-8 flex items-center space-x-4">
              <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                Discover More
              </button>
              <div className="flex items-center text-blue-600 font-semibold space-x-2">
                <span className="text-2xl">&#128222;</span>
                <div>
                  <p className="text-lg">228 000 6666</p>
                  <p className="text-sm text-gray-500">Call Us Anytime</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
