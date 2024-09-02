import React from "react";
import img1 from '../Assets/1.webp'
import img2 from '../Assets/3.webp'
import img3 from '../Assets/2.webp'
import img4 from '../Assets/4.webp'
import img5 from '../Assets/5.webp'
import { Link } from "react-router-dom";
import { MdImportantDevices } from "react-icons/md";
import { AiOutlineSolution } from "react-icons/ai";
import { MdOutlinePhoneInTalk } from "react-icons/md";

const Home = () => {
  return <div>
<div className="flex flex-col lg:flex-row items-center justify-between p-2 bg-background">
  <div className="lg:w-1/2 p-4">
  <span className="bg-[#2334de] text-[10px] text-white px-3 py-1">IT SOLUTIONS ---</span>
    <h2 className="text-6xl mt-9 font-semibold text-black">Welcome To</h2>
    <h1 className="text-6xl mt-2  font-semibold text-[#2334de]">Maxify Solutions</h1>
    <p className="text-3xl mt-4 font-semibold text-black">Your Partner For Digital Transformation</p>
    <Link className="mt-6 inline-block bg-[#2334de] text-white py-3 text-[14px] font-[300] px-5 rounded-[5px] hover:[#2334de]/80">
      Get Started Now
    </Link>
  </div>
  <div className="lg:w-1/2 mt-8 lg:mt-0 flex items-center justify-center relative sm:h-[400px] md:h-[600px]">
    <div className="h-[80%] w-[70%] overflow-hidden rounded-lg relative z-10">
      <img
        src={img1}
        alt="Person using a tablet"
        className="h-full w-full object-cover rounded-lg"
      />
    </div>
    <div className="bg-gradient-to-r from-[#2334de] to-[#101763] sm:p-[80px] md:p-[150px] rounded-lg absolute top-0 right-0 z-0"></div>
    <div className="bg-gradient-to-r from-[#2334de] to-[#101763] sm:p-[80px] md:p-[150px] rounded-lg absolute bottom-0 left-0 z-0"></div>
  </div>
</div>

{/* second section */}
<div className="flex flex-col md:flex-row md:space-x-4 mt-8 w-[100%] mx-auto md:w-[80%]">
      {/* Left Side - Hidden in Mobile View */}
      <div className="hidden md:flex w-full md:w-1/2 justify-end relative">
        <img
          src={img5}
          alt="Left Side"
          className="h-auto right-0 bottom-0 w-[40%] absolute"
        />
        <img
          src={img2}
          alt="Left Side"
          className="w-[90%] h-auto"
        />
      </div>

      {/* Right Side - Visible in Mobile View */}
      <div className="w-full md:w-1/2 p-4 md:p-8  px-[30px]">
      <p className="text-[18px] font-[500] text-[gray]"><span className="text-[blue]">//</span> Get to Now</p>
        <h1 className="text-2xl md:text-4xl font-bold mb-1">Maxify Solutions</h1>
        <p className="text-sm text-justify  text-gray-600 mb-6">
        is a trustworthy partner for navigating the difficult realm of digital transformation. Based in Noida, we specialize in helping businesses like yours succeed and grow with the use of technology.
    Whether you're looking for a reputable website development company in Noida or a digital marketing services provider in Noida, we have you covered. Our broad solutions are customized to your
    requirements and offer visible outcomes. Allow us to help you take your company to the next level with our unique solutions.
        </p>

        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 mb-6">
          <div className="flex-1 flex gap-3 items-center text-left p-4 rounded-md">
          <MdImportantDevices className="text-[50px] text-[#2334de]" />
            <p className="font-semibold">Custom software development.</p>
          </div>
          <div className="flex-1 flex gap-3 items-center text-left p-4 rounded-md">
          <AiOutlineSolution className="text-[50px] text-[#2334de]" />
            <p className="font-semibold">Marketing Solution</p>
          </div>
        </div>
        <p className="text-justify font-semibold text-sm">Maxify Solutions - Improve Your Business with Innovative Technology Solutions.</p>
        <div className="flex mt-8">
        <div className="w-1/2 flex items-center">
        <MdOutlinePhoneInTalk size={22} className="bg-[#f3f3f3] text-[#2334de] size-[40px] p-2 rounded-full"/>
        <div>
          <p className=" text-[12px] text-gray-400 font-semibold">Call us anytime</p>
          <p className="text-xl font-bold">+9999 5555 333</p>
          </div>
          </div>
          <div className="w-1/2">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md">
            Explore now
          </button>
          </div>
        </div>
      </div>
    </div>

  </div>;
};

export default Home;
