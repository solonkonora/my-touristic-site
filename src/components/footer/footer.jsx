// eslint-disable-next-line no-unused-vars
import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-columns">
          <div className="footer-column">
            <h3>If you need to know anything About Us dont <br/> hesitate to call us</h3>
            <p>If you need to know anything, have any questions, About Us dont hesitate to call us</p>
            <p>Some descriptive text goes here.</p>
            <p>Email: info@example.com</p>
            <p>Phone: 123-456-7890</p>
            <div className="subscribe-form">
              <input type="text" placeholder="Enter your email" />
              <button>Send</button>
            </div>
          </div>

          <div className="footer-column">
          <div className="footer-column1">
            <div className="logo">
              <img src="/images/dinosaur.png" alt="Logo" />
            </div>
            <div className="social-icons">
              <img src="/images/twitter.png" alt="Twitter" />
              <img src="/images/telegram.png" alt="telegram" />
              <img src="/images/utube.png" alt="utube" />
             <img src="/images/telegram.png" alt="telegram" />
            </div>
          </div>

          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus vero, dolore error aliquid quibusdam quae </p>

          <div className="footer-list">
          <div className="list-column">
            <ul>
              <li>Home</li>
              <li>Testimonies</li>
              <li>Destinations</li>
              <li>Signing</li>
            </ul>
          </div>
          <div className="list-column">
            <ul>
            <li>About Us</li>
              <li>Testimonies</li>
              <li>Destinations</li>
              <li>Signing</li>
            </ul>
          </div>
          <div className="list-column">
            <ul>
            <li>Our Team</li>
              <li>Testimonies</li>
              <li>Destinations</li>
              <li>Signing</li>
            </ul>
          </div>
        </div>
          </div>
        </div>
        
      </div>
      <p>Copyright Wazzy Safari 2022</p>
    </footer>
  );
}

export default Footer;