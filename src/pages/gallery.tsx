import * as React from 'react'
import MiniNavbar from '../components/topNav';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import HeroSection from '../components/hero';

const GalleryPage = () => {
    return (
        <>
            <MiniNavbar />
            <Navigation />
            <HeroSection />

            <div className="container mx-auto py-8">
                <div className="hidden md:flex items-center justify-end my-3">
                    <a
                        href="#"
                        className="bg-yellow-600 text-white border-2 rounded-md py-1 px-4 text-base md:py-2 md:px-6 md:text-lg hover:bg-yellow-500 transition duration-300"
                    >
                        Open Instagram
                    </a>
                </div>
                <div className="grid grid-cols-5 gap-2">

                    {/* First */}
                    <div className="col-span-1 row-span-1">
                        <img
                            src="https://images.pexels.com/photos/3889805/pexels-photo-3889805.jpeg?auto=compress&cs=tinysrgb&w=400"
                            alt="Nature Tour 2"
                            className="w-full h-full object-cover rounded-lg shadow-md"
                        />
                    </div>

                    {/* second */}
                    <div className="col-span-1 row-span-2">
                        <img
                            src="https://images.pexels.com/photos/3889805/pexels-photo-3889805.jpeg?auto=compress&cs=tinysrgb&w=400"
                            alt="Nature Tour 1"
                            className="w-full h-full object-cover rounded-lg shadow-md"
                        />
                    </div>

                    {/* Third */}
                    <div className="col-span-1 row-span-1">
                        <img
                            src="https://images.pexels.com/photos/3889805/pexels-photo-3889805.jpeg?auto=compress&cs=tinysrgb&w=400"
                            alt="Nature Tour 3"
                            className="w-full h-full object-cover rounded-lg shadow-md"
                        />
                    </div>

                    {/* forth */}
                    <div className="col-span-1 row-span-1">
                        <img
                            src="https://images.pexels.com/photos/3889805/pexels-photo-3889805.jpeg?auto=compress&cs=tinysrgb&w=400"
                            alt="Nature Tour 2"
                            className="w-full h-full object-cover rounded-lg shadow-md"
                        />
                    </div>


                    {/* firth */}
                    <div className="col-span-1 row-span-1">
                        <img
                            src="https://images.pexels.com/photos/3889804/pexels-photo-3889804.jpeg?auto=compress&cs=tinysrgb&w=400"
                            alt="Nature Tour 4"
                            className="w-full h-full object-cover rounded-lg shadow-md"
                        />
                    </div>

                    {/* sixth */}
                    <div className="col-span-1 row-span-1">
                        <img
                            src="https://images.pexels.com/photos/3889805/pexels-photo-3889805.jpeg?auto=compress&cs=tinysrgb&w=400"
                            alt="Nature Tour 5"
                            className="w-full h-full object-cover rounded-lg shadow-md"
                        />
                    </div>

                    {/* seventh */}
                    <div className="col-span-1 row-span-1">
                        <img
                            src="https://images.pexels.com/photos/3889805/pexels-photo-3889805.jpeg?auto=compress&cs=tinysrgb&w=400"
                            alt="Nature Tour 6"
                            className="w-full h-full object-cover rounded-lg shadow-md"
                        />
                    </div>

                    {/* eigth */}
                    <div className="col-span-2 row-span-1">
                        <img
                            src="https://images.pexels.com/photos/3889805/pexels-photo-3889805.jpeg?auto=compress&cs=tinysrgb&w=400"
                            alt="Nature Tour 7"
                            className="w-full h-full object-cover rounded-lg shadow-md"
                        />
                    </div>
                </div>

            </div>

            <Footer />
        </>
    )
}
export default GalleryPage;