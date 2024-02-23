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
          <div className="footer-column1">
            <div className="logo">
              <img src="logo.png" alt="Logo" />
            </div>
            <div className="social-icons">
              <img src="facebook.png" alt="Facebook" />
              <img src="twitter.png" alt="Twitter" />
              <img src="instagram.png" alt="Instagram" />
            </div>
          </div>
        </div>
        <div className="footer-list">
          <div className="list-column">
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </div>
          <div className="list-column">
            <ul>
              <li>Item 4</li>
              <li>Item 5</li>
              <li>Item 6</li>
            </ul>
          </div>
          <div className="list-column">
            <ul>
              <li>Item 7</li>
              <li>Item 8</li>
              <li>Item 9</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;