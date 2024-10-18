import * as React from "react";

const Navigation: React.FC = () => {
  return (
    <>
      <div className="w-full flex justify-between items-center">
        <div className="flex p-4">
          <ul className="flex items-center ml-8">
            <li>
              <img
                src="/images/dinosaur.png"
                alt="logo"
                className="w-10 h-10" 
              />
            </li>
          </ul>
        </div>

        <div>
          <ul className="flex items-center">
            <li className="p-2 text-lg">
              <a href="#" className="text-black">Home</a>
            </li>
            <li className="p-2 text-lg">
              <a href="#" className="text-black">Features</a>
            </li>
            <li className="p-2 text-lg">
              <a href="#" className="text-black">Tour-Package</a>
            </li>
            <li className="p-2 text-lg">
              <a href="#" className="text-black">Gallery</a>
            </li>
            <li className="p-2 text-lg">
              <a href="#" className="text-black">Bloq</a>
            </li>
            <li className="p-2 text-lg">
              <a href="#" className="text-black">Contact-Us</a>
            </li>
          </ul>
        </div>

        <div>
          <ul className="flex items-center">
            <li>
              <a
                href="#"
                className="bg-yellow-600 text-white border-2 border-black rounded-md py-2 px-6 mr-10 text-lg"
              >
                Signup
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navigation;
