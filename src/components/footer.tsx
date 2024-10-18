import * as React from "react";

const Footer = () => {
  return (
    <footer className="bg-teal-900 text-white font-sans">
      <div className="w-full mx-auto">
        <div className="flex justify-between mb-5">
          <div className="flex-1 ml-10 text-left">
            <h3 className="mb-7 text-3xl">If you need to know anything About Us don't hesitate to call us</h3>
            <p className="mb-7 w-9/12">If you need to know anything, have any questions, About Us don't hesitate to call us</p>
            <p className="mb-7">Some descriptive text goes here.</p>
            <p className="mb-7">Email: info@example.com</p>
            <p className="mb-7">Phone: 123-456-7890</p>
            <div className="flex items-center mt-7">
              <input
                className="h-8 p-1 border border-gray-300 rounded-sm"
                type="text"
                placeholder="Enter your email"
              />
              <button className="h-8 ml-2 px-3 bg-orange-500 text-white rounded-sm cursor-pointer">
                Send
              </button>
            </div>
          </div>

          <div className="flex-1 ml-10 text-left">
            <div className="flex justify-between mr-10">
              <div className="logo">
                <img className="w-10 h-10 m-2 " src="/images/dinosaur.png" alt="Logo" />
              </div>
              <div className="flex space-x-2">
                <img className="w-7 h-7 mt-7" src="/images/twitter.png" alt="Twitter" />
                <img className="w-7 h-7 mt-7" src="/images/telegram.png" alt="Telegram" />
                <img className="w-7 h-7 mt-7" src="/images/utube.png" alt="YouTube" />
                <img className="w-7 h-7 mt-7" src="/images/telegram.png" alt="Telegram" />
              </div>
            </div>

            <p className="mb-7">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus vero, dolore error aliquid quibusdam quae</p>

            <div className="flex justify-between">
              <div className="text-center">
                <ul className="text-left">
                  <li className="mb-2">Home</li>
                  <li className="mb-2">Testimonies</li>
                  <li className="mb-2">Destinations</li>
                  <li className="mb-2">Signing</li>
                </ul>
              </div>
              <div className="text-center">
                <ul className="text-left">
                  <li className="mb-2">About Us</li>
                  <li className="mb-2">Testimonies</li>
                  <li className="mb-2">Destinations</li>
                  <li className="mb-2">Signing</li>
                </ul>
              </div>
              <div className="text-center">
                <ul className="text-left">
                  <li className="mb-2">Our Team</li>
                  <li className="mb-2">Testimonies</li>
                  <li className="mb-2">Destinations</li>
                  <li className="mb-2">Signing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center">Copyright Wazzy Safari 2022</p>
    </footer>
  );
}

export default Footer;
