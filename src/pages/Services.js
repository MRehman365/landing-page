import React, { useState } from "react";
import "./main.css";
import { BiPhoneCall } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";
import img1 from "../Assets/services/1.webp";
import img2 from "../Assets/services/2.webp";
import img3 from "../Assets/services/3.webp";
import img4 from "../Assets/services/4.webp";
import img5 from "../Assets/services/5.webp";
import img6 from "../Assets/services/6.webp";
import img7 from "../Assets/services/7.webp";
import img8 from "../Assets/services/8.webp";
import img9 from "../Assets/services/9.webp";
import img10 from "../Assets/services/10.webp";
import icon from "../Assets/services/icon.svg";
import icon1 from "../Assets/services/1.svg";
import icon2 from "../Assets/services/2.svg";
import icon3 from "../Assets/services/3.svg";
import PricingCard from "../Components/PricingCard";

const Services = () => {
  // Array to hold service data
  const serviceData = [
    {
      imageSrc: img7,
      title: "Custom Website Design And Development",
      description:
        "Our custom website design and development services set us apart as the best website development company in Noida. We do not believe in universally applicable solutions. Instead, we take the time to understand your company's goals, target audience, and brand identity while designing a website that represents your concept.",
      hoverText: "Learn More",
      icone: icon,
      key1: "Tailored Designs: We create unique, visually appealing designs that resonate with your brand.",
      key2: "Responsive Development: Our websites are fully responsive, ensuring a seamless user experience across all devices.",
      key3: "User-Centric Approach: We focus on creating websites that are not only attractive but also easy to navigate, keeping your audience engaged.",
    },
    {
      imageSrc: img8,
      title: "E-Commerce Website Development",
      description:
        "In the modern age of online purchasing, a reputable e-commerce platform is necessary. As the best web development company in Noida, we offer top-notch e-commerce website development services that help you sell your products online with ease.",
      hoverText: "Discover More",
      key1: "Secure Payment Gateways: We integrate reliable and secure payment options to protect your customers' data.",
      key2: "Custom Cart Solutions: Our shopping cart solutions are designed to provide a smooth checkout process, enhancing user satisfaction.",
      key3: "Inventory Management: We build systems that help you manage your inventory efficiently, reducing the chances of stockouts or overstocking",
    },
    {
      imageSrc: img9,
      title: "CMS Development",
      description:
        "Content Management Systems (CMS) make it easy for you to update your website content without needing technical expertise. At Maxify Solutions, the leading website development company in Noida, we specialize in CMS development that empowers you to manage your site effectively.",
      hoverText: "Explore Features",
      key1: "User-Friendly Interface: Our CMS platforms are designed with simplicity in mind, allowing you to make updates with ease.",
      key2: "Custom Modules: We develop custom modules tailored to your specific business needs.",
      key3: "SEO-Friendly: Our CMS solutions are optimized for search engines, helping you rank higher in search results.",
    },
    {
      imageSrc: img10,
      title: "Website Maintenance And Support",
      description:
        "A website is never truly finished; it requires regular updates and maintenance to stay relevant and functional. As the best web development company in Noida, we offer ongoing maintenance and support services to keep your website running smoothly.",
      hoverText: "Check Details",
      key1: "Regular Updates: We ensure your website is always up-to-date with the latest features and security patches.",
      key2: "24/7 Support: Our team is available around the clock to address any issues or concerns you may have.",
      key3: "Performance Optimization: We continuously monitor your website’s performance and make necessary adjustments to improve speed and reliability.",
    },
  ];

  const services1 = [
    {
      id: 1,
      title: "Proven Track Record",
      description:
        "Our success as the best website development company in Noida is backed by a strong portfolio of satisfied clients across various industries. We take pride in delivering websites that exceed our clients' expectations.",
      image: img2,
      icone: icon1,
    },
    {
      id: 2,
      title: "Client-Centric Approach",
      description:
        "At Maxify Solutions, we believe that your success is our success. We focus on understanding your needs and goals to deliver a website that is more than just a website; it is an invaluable resource for your company.",
      image: img3,
      icone: icon2,
    },
    {
      id: 3,
      title: "Cutting-Edge Technology",
      description:
        "We stay ahead of the curve by using the latest technologies and tools in web development. Our commitment to innovation ensures that your website is future-proof and ready to adapt to new trends and changes.",
      image: img6,
      icone: icon3,
    },
  ];

  const [shoCcontent, setshoCcontent] = useState(false);

  return (
    <div>
      {/* hero section */}
      <div className="flex flex-col md:flex-row items-center bg-gray-50 min-h-screen">
        {/* Left Section */}
        <div className="md:w-1/2 mb-8 md:mb-0 px-10">
          <div className="bg-blue-700 uppercase text-white tracking-wider mb-4 text-[10px] flex text-center w-32 px-2 py-[2px] justify-between">
            <span>Why Your </span>
            <span className="w-10 mt-2">
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
            <div className="absolute left-0 top-0 bg-blue-600 w-2 h-[90%]"></div>
            <div className="relative">
              <img
                src={img5}
                alt="Main"
                className="rounded-lg shadow-md w-full h-[25rem] mb-4 ml-2"
              />
              <img
                src={img4}
                alt="Secondary"
                className=" shadow-md w-52 h-auto absolute bottom-0 right-0 transform translate-x-4 translate-y-4"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="md:w-[50%] pl-0">
            <div className="text-sm text-gray-500 uppercase tracking-wide mb-2 flex h-full">
              <span> Why Choose Us?</span>{" "}
              <span className="w-[20px] mt-2 ml-2">
                <hr className="border-blue-600 h-2" />
              </span>
              <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-2 mt-[4px]"></span>
            </div>
            <h2 className="text-3xl md:text-2xl font-bold text-gray-900 mb-6 kanit-regular">
              The Best Website Development <br />
              Company in Noida
            </h2>
            <div className="bg-white shadow-lg rounded-lg p-6 border-b-[2px]">
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
              <button className="bg-blue-700 text-white font-semibold px-6 py-3 hover:bg-blue-700 transition duration-300">
                Discover More
              </button>
              <div className="flex items-center text-blue-600 font-semibold space-x-2">
                <span className="text-2xl bg-blue-700 text-white p-3">
                  <BiPhoneCall />
                </span>
                <div>
                  <p className="text-lg">228 000 6666</p>
                  <p className="text-sm text-gray-500">Call Us Anytime</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* our servioces section */}

      <div>
        <div className="bg-blue-900 pt-12 pb-1 px-8 md:px-16">
          <h3 className="text-white text-center text-sm">// Our Services:</h3>
          <div className="w-[60%] mx-auto">
            <h2 className="text-3xl md:text-3xl font-semibold text-white text-center mb-12 ">
              What Makes Us the Best Web Development Company in Noida
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceData.map((service, index) => (
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                  src={service.imageSrc}
                  alt=""
                  className="w-full h-48 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="px-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceData.map((service, index) => (
              <div className="">
                <div className="p-6 w-[90%] h-[21rem] ml-6 rounded-lg mt-[-50px] z-10 bg-white flex flex-col justify-between ">
                  <div className="group-hover-hidden transition duration-300">
                    <div className="flex justify-between">
                      <h3 className="text-[10px] bg-blue-600 text-center text-white rounded-lg px-3 py-1 mb-4 w-[70%]">
                        {service.title}
                      </h3>
                      <div className="mt-[-10px]">
                        <img src={icon} alt="" />
                      </div>
                    </div>
                    <p className="text-gray-700 text-[12px] text-justify mb-6">
                      {service.description}
                    </p>
                  </div>
                  <div className="groupclass">
                    <div
                      className=" flex flex-col justify-end group-hover-hidden transition duration-300"
                      // onMouseEnter={() => setshoCcontent(index)}
                    >
                      <div className="flex items-center ">
                        <span className="text-sm font-medium text-gray-900 mr-2">
                          Key Features:
                        </span>
                        <button className="text-white p-1 rounded-full bg-blue-800 transition duration-300">
                          <FaArrowRight />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="show-on-hover p-6 w-[90%] shadow-2xl h-[21rem] ml-6 rounded-lg mt-[-50px] z-10 bg-white flex flex-col justify-between">
                  <ul className="text-gray-700 text-[12px] flex flex-col gap-3 list-disc">
                    <li>{service.key1}</li>
                    <li>{service.key2}</li>
                    <li>{service.key3}</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Whats sets us aprte */}

      <div>
        <div className="bg-white py-12">
          {/* Section Title */}
          <div className="text-center mb-12 w-[50%] mx-auto">
            <p className="text-gray-500 text-sm">What Sets Us Apart:</p>
            <h2 className="text-3xl kanit-medium">
              Why We Are the Best Website Development Company in Noida
            </h2>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
            {services1.map((service) => (
              <div
                key={service.id}
                className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center"
              >
                <div className="relative">
                  <div className="p-2 bg-blue-700 text-white text-center absolute bottom-4 left-[40%] border-2">
                    <img className="w-10 h-6" src={service.icone} alt="" />
                  </div>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full rounded-t-lg mb-4"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-lg mb-2 kanit-regular">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 text-sm mb-4">
                    {service.description}
                  </p>

                  <div className="flex justify-center ">
                    <span className="text-sm font-medium text-gray-900 mr-2">
                      Read More
                    </span>
                    <span className="text-white p-1 rounded-full bg-blue-800 transition duration-300">
                      <FaArrowRight />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* learn more section */}

      <div className="bg-white">
        <div className="w-[60%] mx-auto">
          <div className="border-[1px] border-blue-600 p-2 flex justify-between">
            <div>
              <span className="text-gray-700">
                Need digital marketing solutions & services?{" "}
              </span>
              <span className="text-blue-600"> Send a request now</span>
            </div>
            <div>
              <button className="bg-blue-700 px-2 py-2 text-white text-sm">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* price section  */}
      <div>
        {/* <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-20 mx-auto max-w-screen-xl lg:py-16 lg:px-20">
            <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Website Packages
              </h2>
              {/* <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
                Here at Flowbite we focus on markets where technology,
                innovation, and capital can unlock long-term value and drive
                economic growth.
              </p> 
            </div>
            <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
              {/* Pricing Card - Starter 
              <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                <h3 className="mb-4 text-2xl font-semibold">
                  STARTUP BUSINESS{" "}
                </h3>
                <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                  Best option for personal use & for your next project.
                </p>
                <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-2xl font-extrabold">
                    RS14999/$199
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">
                    /month
                  </span>
                </div>
                <ul role="list" className="mb-8 space-y-4 text-left">
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Individual configuration</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>No setup, or hidden fees</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>
                      Team size:{" "}
                      <span className="font-semibold">1 developer</span>
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>
                      Premium support:{" "}
                      <span className="font-semibold">6 months</span>
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>
                      Free updates:{" "}
                      <span className="font-semibold">6 months</span>
                    </span>
                  </li>
                </ul>
                <a
                  href="#"
                  className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-primary-900"
                >
                  Get started
                </a>
              </div>
              {/* Pricing Card - Company 
              <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                <h3 className="mb-4 text-2xl font-semibold">Company</h3>
                <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                  Relevant for multiple users, extended & premium support.
                </p>
                <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-5xl font-extrabold">$99</span>
                  <span className="text-gray-500 dark:text-gray-400">
                    /month
                  </span>
                </div>
                <ul role="list" className="mb-8 space-y-4 text-left">
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Individual configuration</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>No setup, or hidden fees</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>
                      Team size:{" "}
                      <span className="font-semibold">10 developers</span>
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>
                      Premium support:{" "}
                      <span className="font-semibold">24 months</span>
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>
                      Free updates:{" "}
                      <span className="font-semibold">24 months</span>
                    </span>
                  </li>
                </ul>
                <a
                  href="#"
                  className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-primary-900"
                >
                  Get started
                </a>
              </div>
              {/* Pricing Card - Enterprise 
              <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                <h3 className="mb-4 text-2xl font-semibold">Enterprise</h3>
                <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                  Best for large scale uses and extended redistribution rights.
                </p>
                <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-5xl font-extrabold">$499</span>
                  <span className="text-gray-500 dark:text-gray-400">
                    /month
                  </span>
                </div>
                <ul role="list" className="mb-8 space-y-4 text-left">
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Individual configuration</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>No setup, or hidden fees</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>
                      Team size:{" "}
                      <span className="font-semibold">100+ developers</span>
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>
                      Premium support:{" "}
                      <span className="font-semibold">36 months</span>
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>
                      Free updates:{" "}
                      <span className="font-semibold">36 months</span>
                    </span>
                  </li>
                </ul>
                <a
                  href="#"
                  className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-primary-900"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        </section> */}

        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-20 mx-auto lg:py-16 lg:px-20">
            <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Website Packages
              </h2>
              {/* <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
                Here at Flowbite we focus on markets where technology,
                innovation, and capital can unlock long-term value and drive
                economic growth.
              </p> */}
            </div>
            <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
              {/* Starter Plan */}
              <PricingCard
                title="STARTUP BUSINESS"
                price="RS14999 / $199"
                // color="bg-red-500"
                // description="Best option for personal use & for your next project."
                features={[
                  "Up-to 5 Pages",
                  "Logo",
                  "Slider",
                  "Dynamic Website",
                  "Domain-1st Year Free (.com or .in )",
                ]}
                features2={[
                  " Hosting Free For 1st Year",
                  "1 Email – 500 MB Quota",
                  "1 Contact Form",
                  " Free SSL",
                  "Testimonials",
                  " Gallery Section",
                  "Chat Feature",
                  "Content - 2$ per word",
                  "Social Profile Link",
                  "Click to Call/Email",
                  " Mobile Responsive",
                  " Login Details Will Be Given",
                  " Delivery in 3 Days",
                  " Renewal – 25$ + Domain Price Plus GST",
                  " Support – 10$/Hr",
                ]}
              />
              {/* Company Plan */}
              <PricingCard
                title="SMALL BUSINESS"
                price="RS24999  / $319"
                // description="Relevant for multiple users, extended & premium support."
                features={[
                  "10 Pages",
                  "Logo",
                  "Slider",
                  "Dynamic Website",
                  "Domain-1st Year Free (.com or .in )",
                ]}
                features2={[
                  " Hosting Free For 1st Year",
                  "2 Emails – 500 MB Quota Each",
                  "1 Contact Form",
                  " Free SSL",
                  "Testimonials",
                  " Gallery Section",
                  "Chat Feature",
                  "15$/Extra Page",
                  "Social Profile Link",
                  "Click to Call/Email",
                  " Mobile Responsive",
                  " Login Details Will Be Given",
                  " Delivery in 7 Days",
                  "Renewal – 40$ + Domain Price Plus GST",
                  "Free 4 Hours Support",
                  " Support – 15$/Hr",
                ]}
              />
              {/* Enterprise Plan */}
              <PricingCard
                title="E-COMMERCE"
                price="RS34999 / $449"
                // description="Best for large scale uses and extended redistribution rights."
                features={[
                  " Up to 50 Products",
                  "Logo",
                  "Contact Form – 3",
                  "Content - 2$ per word",
                  "20$/Extra Page",
                ]}
                features2={[
                  " WhatsApp Chat Integration",
                  " Social Media Profiles Integration",
                  "Social Profile Link",
                  " WordPress Login Details Will be Given",
                  " Payment Gateway",
                  "Extra Support –20$/Hour",
                  "Revisions – 2",
                  " Call/Email/Chat Support",
                ]}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
