import * as React from 'react';

const MiniNavbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-teal-900">
      <div className="flex items-center space-x-4 text-white">
        <div className="flex items-center">
          <img className="w-5 h-5 mr-2" src="/images/email.png" alt="Email" />
          <span>info@example.com</span>
        </div>
        <div className="flex items-center">
          <img className="w-5 h-5 mr-2" src="/images/phone.png" alt="Phone" />
          <span>237-123-456-7890</span>
        </div>
      </div>

      {/* Right Side: Social Icons */}
      <div className="flex space-x-2">
        <div className="border border-white rounded-full p-2">
          <img className="w-5 h-5" src="/images/twi.png" alt="Twitter" />
        </div>
        <div className="border border-white rounded-full p-2">
          <img className="w-5 h-5" src="/images/fb.png" alt="facebook" />
        </div>
        <div className="border border-white rounded-full p-2">
          <img className="w-5 h-5" src="/images/ut.png" alt="YouTube" />
        </div>
        <div className="border border-white rounded-full p-2">
          <img className="w-5 h-5" src="/images/linkin.png" alt="Linkedin" />
        </div>
      </div>
    </nav>
  );
};

export default MiniNavbar;
