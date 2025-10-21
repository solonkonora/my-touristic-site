// GuestInfo.js
import React from 'react';
import { FaChevronDown } from 'react-icons/fa';


interface GuestInfoProps {
    buttonColor: string;
    buttonHoverColor: string;
    textColor:string;
    positionEffect?: boolean; // Optional with a default value
  }

        const GuestInfo: React.FC<GuestInfoProps> = ({ buttonColor, buttonHoverColor, textColor, positionEffect = false }) => {

  return (
<div className={`w-full flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4 p-4 z-10 ${positionEffect ? "-right-32 translate-x-1/2 relative" : ""}`}> 
       
      <div className="flex items-center">
        <div className="mr-3">
          <p className="text-sm text-gray-500">Guest</p>
          <p className="text-sm font-semibold">2 Adult</p>
        </div>
        <FaChevronDown className="text-yellow-600 text-xl ml-auto" />
      </div>

      {/* Second Div */}
      <div className="flex items-center">
        <div className="mr-3">
          <p className="text-sm text-gray-500">Date</p>
          <p className={`text-sm font-semibold ${`${textColor}`}`} >12 - 15 April 2024</p>
        </div>
        <FaChevronDown className="text-yellow-600 text-xl ml-auto" />
      </div>

      {/* Third Div */}
      <div className="flex items-center">
        <div className="mr-3">
          <p className="text-sm text-gray-500">Package</p>
          <p className={`text-sm font-semibold ${`${textColor}`}`} >Akagera-tour</p>
        </div>
        <FaChevronDown className="text-yellow-600 text-xl ml-auto" />
      </div>
       
      <button className={`text-white border-8 border-white py-2 px-6 rounded-lg font-semibold ${`${buttonColor} hover:${buttonHoverColor} ...otherButtonClasses`}`}>
        Book Now
        </button>
    </div>
  );
};

export default GuestInfo;
