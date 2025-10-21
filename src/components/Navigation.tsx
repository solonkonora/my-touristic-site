import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
        <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex items-center">
          <ul className="flex items-center">
            <li>
              <img src="/images/logo.jpg" alt="logo" className="w-10 h-10 rounded-full" />
            </li>
          </ul>
        </div>

        <div className="block md:hidden">
          <button
            className="text-black focus:outline-none"
            onClick={toggleMenu}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Menu for larger screens */}
        <div className="hidden md:flex">
          <ul className="flex items-center space-x-4">
            <li className="text-lg">
              <Link to="/home" className="text-black hover:text-yellow-600 transition-colors">Home</Link>
            </li>
            <li className="text-lg">
              <Link to="/about" className="text-black hover:text-yellow-600 transition-colors">About</Link>
            </li>
            <li className="text-lg">
              <Link to="/package" className="text-black hover:text-yellow-600 transition-colors">Tour-Package</Link>
            </li>
            <li className="text-lg">
              <Link to="/gallery" className="text-black hover:text-yellow-600 transition-colors">Gallery</Link>
            </li>
            <li className="text-lg">
              <Link to="/contact" className="text-black hover:text-yellow-600 transition-colors">Contact-Us</Link>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex items-center">
          <a
            href="#"
            className="bg-yellow-600 text-white border-2 border-black rounded-md py-1.5 px-6 text-lg"
          >
            Signup
          </a>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col items-start p-4 space-y-2">
            <li className="text-lg">
              <Link to="/home" className="text-black hover:text-yellow-600 transition-colors" onClick={toggleMenu}>Home</Link>
            </li>
            <li className="text-lg">
              <Link to="/about" className="text-black hover:text-yellow-600 transition-colors" onClick={toggleMenu}>About</Link>
            </li>
            <li className="text-lg">
              <Link to="/package" className="text-black hover:text-yellow-600 transition-colors" onClick={toggleMenu}>Tour-Package</Link>
            </li>
            <li className="text-lg">
              <Link to="/gallery" className="text-black hover:text-yellow-600 transition-colors" onClick={toggleMenu}>Gallery</Link>
            </li>
            <li className="text-lg">
              <Link to="/contact" className="text-black hover:text-yellow-600 transition-colors" onClick={toggleMenu}>Contact-Us</Link>
            </li>
            <li className="text-lg">
              <a
                href="#"
                className="bg-yellow-600 text-white border-2 border-black rounded-md py-2 px-6 text-lg"
              >
                Signup
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navigation;

