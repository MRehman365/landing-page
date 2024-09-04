import React, {useState} from "react";
import { GoArrowRight } from "react-icons/go";
import { MdNoiseAware } from "react-icons/md";
import { BsGraphUpArrow } from "react-icons/bs";
import { TbCirclesRelation } from "react-icons/tb";

import { FaCheckCircle } from 'react-icons/fa';
import { IoPricetagsOutline } from "react-icons/io5";
import { FaPlus, FaMinus, FaAward } from 'react-icons/fa';
import { Link } from "react-router-dom";
import img1 from "../Assets/about-three.png.png";
import img2 from "../Assets/about-three-2.png.png";
import img3 from "../Assets/about-three-3.png.png";
import img4 from "../Assets/Image (13).png";
import img5 from "../Assets/why-chose-us-two.png (1).png";

const SMO = () => {
  const [openItem, setOpenItem] = useState(null);

  const toggleAccordion = (index) => {
    setOpenItem(openItem === index ? null : index);
  };
  return (
    <div>
      <div className="bg-[#0a192f] text-white text-center flex flex-col items-center p-2 sm:py-[70px] md:py-[120px] justify-center">
        <h1 className="sm:text-4xl md:text-6xl font-bold mb-4">
          Elevate Your Online Presence
        </h1>
        <h2 className="sm:text-4xl md:text-6xl font-bold mb-4">
          With SMO Services In India
        </h2>
        <p className="sm:text-[17px] md:text-[20px] mb-6 md:max-w-[800px]">
          In today’s digital age, where social media platforms have become the
          epicenter of communication, marketing, and customer engagement, Social
          Media Optimization (SMO) plays a crucial role in enhancing your
          brand's online visibility and reputation. At Maxify Web Solutions, we
          specialize in providing top-notch SMO services in India, helping
          businesses harness the power of social media to drive growth and
          success.
        </p>
        <button
          className="mt-8 rounded-full flex items-center relative px-5 py-2 text-[blue] bg-white isolation-auto z-10 border-2 border-[blue]
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-[blue] before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700  hover:text-white"
        >
          Read More{" "}
          <span className="ml-2">
            <GoArrowRight />
          </span>
        </button>
      </div>
      {/* 2nd section */}
      <div class="p-6 flex flex-col items-center max-w-[1200px] mx-auto text-center mt-10">
        <span class="bg-[#e7effe] px-2 py-0 text-[#1351d8] rounded mb-3">
          Latest Service
        </span>
        <h1 class="sm:text-3xl md:text-5xl font-bold mb-4 mt-4">
          Why SMO Is Essential For Your{" "}
          <span class="text-[#1351d8] border-[2px] px-5 border-[#1351d8] rounded-full">
            Business
          </span>
        </h1>
        <p class="sm:text-lg md:text-xl mb-6 text-[#1351d8]">
          Social Media Optimization is the process of optimizing your social
          media profiles and content to increase brand awareness, attract more
          visitors, and engage with your target audience effectively. Unlike
          traditional marketing, SMO leverages the viral nature of social media
          platforms to spread your brand message quickly and efficiently.
        </p>
        <h2 class="sm:text-2xl md:text-4xl font-bold mb-2 mt-4 border-[2px] px-6 py-2 border-[#1351d8] rounded-full text-[#1351d8]">
          Key Benefits Of SMO:
        </h2>
      </div>
      {/* section 3 */}
      <div className="flex flex-col md:flex-row justify-between sm:p-3 md:p-12 bg-background rounded-lg bg-[#eaf3ff]">
        <div className="flex items-start space-x-4 p-4">
          <div>
            <div className="h-[60px] w-[60px] rounded-md bg-[#e7eefe] flex justify-center items-center">
              <MdNoiseAware size={40} className="text-[blue]" />
            </div>
            <p className="font-semibold text-base">Enhanced Brand Awareness:</p>
            <p className="text-sm text-justify">
              SMO helps in creating a strong online presence, making your brand
              more recognizable and trustworthy.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4 p-4">
          <div>
            <div className="h-[60px] w-[60px] rounded-md bg-[#e7eefe] flex justify-center items-center">
              <BsGraphUpArrow size={30} className="text-[blue]" />
            </div>
            <p className="font-semibold text-base">Increased Traffic:</p>
            <p className="text-sm text-justify">
              By optimizing your social media profiles and content, SMO drives
              more traffic to your website, improving your search engine
              rankings.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4 p-4">
          <div>
            <div className="h-[60px] w-[60px] rounded-md bg-[#e7eefe] flex justify-center items-center">
              <TbCirclesRelation size={30} className="text-[blue]" />
            </div>
            <p className="font-semibold text-base">Better Engagement:</p>
            <p className="text-sm text-justify">
              SMO enables you to connect with your audience on a personal level,
              fostering loyalty and long-term relationships.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4 p-4">
          <div>
            <div className="h-[60px] w-[60px] rounded-md bg-[#e7eefe] flex justify-center items-center">
              <IoPricetagsOutline size={30} className="text-[blue]" />
            </div>
            <p className="font-semibold text-base">Cost-Effective Marketing:</p>
            <p className="text-sm text-justify">
              SMO is a budget-friendly marketing strategy that delivers high
              returns on investment by reaching a larger audience with minimal
              costs.
            </p>
          </div>
        </div>
      </div>

      {/* section 4 */}
      <section className="flex flex-col md:flex-row bg-white p-6 md:p-12">
        {/* Left side - Text content */}
        <div className="md:w-1/2 space-y-4 flex flex-col justify-between md:min-h-[300px]">
          <div>
            <span className="inline-block bg-blue-100 text-blue-600 font-semibold py-1 px-3 mb-4 rounded-lg mb-4">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mt-4">
              Our SMO <br /> Services{" "}
              <span className="text-blue-600 border-[2px] border-blue-600 px-4 rounded-full">
                in India
              </span>
            </h1>
            <p className="text-gray-600 mt-5">
              At Maxify Solution, we offer a comprehensive range of SMO services
              tailored to meet the unique needs of your business. Our team of
              professionals uses modern technologies and strategies to improve
              your social media presence, providing maximum visibility and
              conversation.
            </p>
          </div>
          <Link>
            <button className="mb-[100px] inline-flex items-center bg-transparent text-blue-600 border border-blue-600 py-2 px-4 rounded-lg hover:bg-blue-600 hover:text-white transition-all">
              Read More <span className="ml-2">→</span>
            </button>
          </Link>
        </div>

        <div className="md:w-1/2 grid items-center grid-cols-2 gap-4  md:mt-0">
          <img src={img1} alt="Laptop" className="col-span-1 row-span-2 " />

          <img src={img2} alt="Phone" className="col-span-1 " />

          <img src={img3} alt="Social Media Icons" className="col-span-1 " />
        </div>
      </section>

      {/* section 5 */}
      <div className="flex flex-col md:flex-row bg-[#f4f7fb] lg:px-[150px]">
      {/* Left Side Content */}
      <div className="w-full md:w-1/2 p-6">
        <button className="bg-blue-100 text-[blue] text-sm px-2 py-1 rounded-md mb-4">
          Ask Question
        </button>
        <h1 className="text-4xl lg:text-5xl font-bold mt-4 mb-4">
          Social Media <br /> Profile <span className="text-blue-500">Optimization</span>
        </h1>
        <p className="text-gray-600 mt-4">
          Your social media profiles are the first impression potential customers have of your brand. We optimize your profiles on platforms like Facebook, Instagram, Twitter, LinkedIn, and more, ensuring they are complete, professional, and aligned with your brand identity.
        </p>
        <div className="mt-6 rounded-lg p-4 flex items-center">
        <div className="bg-white p-7 border-l-[4px] border-[blue] rounded relative">
          <div className="bg-blue-500 p-3 absolute rounded-full  top-[25%] left-[-25px]">
            <FaAward className="text-white text-2xl" />
          </div>
          <p className="text-3xl font-semibold ml-4">Winning Award</p>
        </div>
        </div>
      </div>

      {/* Right Side Accordion */}
      <div className="w-full md:w-1/2 p-6">
        <div className="border-b border-gray-200 py-4 transition duration-300 ease-in-out bg-white mt-4 px-2 rounded-md">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleAccordion(1)}
          >
            <h2 className="text-lg font-semibold">Keyword Integration:</h2>
            {openItem === 1 ? <FaMinus /> : <FaPlus />}
          </div>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${openItem === 1 ? 'max-h-screen bg-white p-4 rounded-lg mt-2' : 'max-h-0'}`}
          >
            {openItem === 1 && (
              <div className="text-gray-600">
                We incorporate relevant keywords in your profiles to enhance searchability.
              </div>
            )}
          </div>
        </div>
        <div className="border-b border-gray-200 py-4 transition duration-300 ease-in-out bg-white mt-4 px-2 rounded-md">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleAccordion(2)}
          >
            <h2 className="text-lg font-semibold">How Do You Manage Consulting Effectively?</h2>
            {openItem === 2 ? <FaMinus /> : <FaPlus />}
          </div>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${openItem === 2 ? 'max-h-screen bg-white p-4 rounded-lg mt-2' : 'max-h-0'}`}
          >
            {openItem === 2 && (
              <div className="text-gray-600">
                Detailed content on managing consulting effectively goes here.
              </div>
            )}
          </div>
        </div>
        <div className="py-4 transition duration-300 ease-in-out bg-white mt-4 px-2 rounded-md">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleAccordion(3)}
          >
            <h2 className="text-lg font-semibold">Bio And Description:</h2>
            {openItem === 3 ? <FaMinus /> : <FaPlus />}
          </div>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${openItem === 3 ? 'max-h-screen bg-white p-4 rounded-lg mt-2' : 'max-h-0'}`}
          >
            {openItem === 3 && (
              <div className="text-gray-600">
                Detailed content on bio and description goes here.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>

    {/* section 6 */}
    <div className="flex flex-col md:flex-row items-center sm:p-3 md:p-8 bg-background md:w-[94%] lg:w-[80%] mx-auto">
      <div className="md:w-1/2">
        <span className=" bg-[#ddddfd] px-3 py-1 text-sm font-bold text-[blue] rounded mb-4">Why CHOOSE US</span>
        <h3 className="text-5xl mt-8  font-bold">
          For SMO <br /> Services  <span className="text-[blue]">in India?</span>
        </h3>
        <ul className="mt-8 space-y-2 leading-8">
          <li className="flex items-center">
            <FaCheckCircle className="text-blue-500" />
            <span className="ml-2 text-muted-foreground">Experienced Team</span>
          </li>
          <li className="flex items-center">
            <FaCheckCircle className="text-blue-500" />
            <span className="ml-2 text-muted-foreground">Customized Solutions</span>
          </li>
          <li className="flex items-center">
            <FaCheckCircle className="text-blue-500" />
            <span className="ml-2 text-muted-foreground">Proven Track Record</span>
          </li>
          <li className="flex items-center">
            <FaCheckCircle className="text-blue-500" />
            <span className="ml-2 text-muted-foreground">Testing and Quality Assurance</span>
          </li>
        </ul>
        <button className="mt-8 rounded-full flex items-center relative px-8 py-2 text-[blue] bg-white isolation-auto z-10 border-2 border-[blue]
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-[blue] before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700  hover:text-white">
            Learn More <span className="ml-2"><GoArrowRight /></span>
          </button>
      </div>
      <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
        <img
          alt="Laptop displaying SMO services"
          src={img5}
        />
      </div>
    </div>
    </div>
  );
};

export default SMO;
