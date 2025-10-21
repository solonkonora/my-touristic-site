// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import * as React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/About";
import GalleryPage from "./pages/Gallery";
import Home from "./pages/Home";
import ContactUs from "./pages/Contact";
import PackagePage from "./pages/Package";

function App() {

    return (
        <>
            <Router>
                <div>

                    <Routes>
                        {/* rather use the page as props */}
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/gallery" element={<GalleryPage />} />
                        <Route path="/package" element={<PackagePage />} />
                        <Route path="/contact" element={<ContactUs />} />
                    </Routes>

                </div>
            </Router>
        </>
    );
}
export default App;

// import * as React from 'react'
// import "./index.css"
// import MiniNavbar from './components/topNav';
// import Navigation from "./components/navigation";
// import Footer from "./components/footer";
// import Form from './components/form';


// const App: React.FC = () => {
//     return (
//         <div className="text-center">
//             <MiniNavbar />
//             <Navigation />
//             <Form />
//             <Footer />

//         </div>
//     );
// };
// export default App
