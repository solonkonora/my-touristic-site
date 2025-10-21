import * as React from 'react';

  const MiniNavbar = () => {
    return (
      <nav className="flex flex-col md:flex-row justify-between items-center p-4 bg-teal-900">
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 text-white mb-4 md:mb-0">
          <div className="flex items-center">
            <img className="w-4 h-4 mr-2" src="/images/email.png" alt="Email" />
            <span>info@example.com</span>
          </div>
          <div className="flex items-center">
            <img className="w-4 h-4 mr-2" src="/images/phone.png" alt="Phone" />
            <span>237-123-456-7890</span>
          </div>
        </div>
  
        {/* Right Side: Social Icons */}
        <div className="flex flex-row md:space-x-2 space-x-2 md:space-y-0 space-y-2">
          <div className="border border-white rounded-full p-1 md:p-2">
            <img className="w-4 h-4 md:w-5 md:h-5" src="/images/twi.png" alt="Twitter" />
          </div>
          <div className="border border-white rounded-full p-1 md:p-2">
            <img className="w-4 h-4 md:w-5 md:h-5" src="/images/fb.png" alt="Facebook" />
          </div>
          <div className="border border-white rounded-full p-1 md:p-2">
            <img className="w-4 h-4 md:w-5 md:h-5" src="/images/ut.png" alt="YouTube" />
          </div>
          <div className="border border-white rounded-full p-1 md:p-2">
            <img className="w-4 h-4 md:w-5 md:h-5" src="/images/linkin.png" alt="LinkedIn" />
          </div>
        </div>
      </nav>
    );
  };

  export default MiniNavbar;
