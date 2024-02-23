// eslint-disable-next-line no-unused-vars
import React from "react";
import "./navigation.css";

const Navigation = () => {

return (
    <>
<div className="navbar">
            <div className="navbar-box1">
                <ul>
                    <li><img src="./assets/images/logo.webp" alt="logo" width="12rem" height="12rem"/></li>
                </ul>
            </div>
            <div className="navbar-box2">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Testimonials</a></li>
                </ul>
            </div>
            <div className="navbar-box3">
                <li><a href="#">signup</a></li>
            </div>
</div>
</>
)   
}

export default Navigation

