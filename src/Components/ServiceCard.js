import React from "react";

const ServiceCard = ({ imageSrc, title, description, hoverText }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
      <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-[10px] font-semibold text-gray-900 mb-4">
          {title}
        </h3>
        <p className="text-gray-700 mb-6">{description}</p>
        <div className="flex items-center">
          <span className="text-sm font-medium text-gray-900 mr-2">
            Key Features:
          </span>
          <button className="text-blue-600 hover:text-blue-800 transition duration-300">
            {hoverText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
