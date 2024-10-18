// eslint-disable-next-line no-unused-vars
// import React, { useState } from "react";
// import Navigation from "./components/navigation";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Footer from "./components/footer/footer";
// import './App.module.css';

//function App() {
  
//return (
    //     <Router>
    //       <div>
            
    //         <Routes>
    // {/* rather use the page as props */}
    //           {/* <Route path="/" element={<Home />} />
    //           <Route path="/about" element={<About/>} />
    //           <Route path="/contact" element={<Contact/>} />
    //           <Route path="/gallery" element={<Gallery />} />
    //           <Route path="/package" element={<Package/>} /> */}

    //         </Routes>
    //       </div>
    //     </Router>
    // < Navigation/>
    // < Footer/>
   //  );
//}


import * as React from 'react'
import "./index.css"
import MiniNavbar from './components/topNav';
import Navigation from "./components/navigation";
import Footer from "./components/footer";


const App: React.FC = () => {
    return (
      <div className="text-center">
        <MiniNavbar/>
        <Navigation />
        <Footer />
      </div>
    );
  };
export default App
