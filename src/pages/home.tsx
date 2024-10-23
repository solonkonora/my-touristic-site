import * as React from 'react'
import MiniNavbar from '../components/topNav';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const Homes = () => {
    return (
        <>
            <MiniNavbar />
            <Navigation />

            <div className="relative isolate overflow-hidden py-10 sm:py-32 flex items-center justify-center">
                <img
                    alt=""
                    src="./images/hero.jpg"
                    className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
                />
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-start">
                        <div className="w-full p-8 z-5">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                                Experience the Beauty of Rwanda with Us.
                            </h1>
                            <p className="mt-4 text-lg text-white">
                                Discover the Land of the Thousand Hills.
                            </p>
                        </div>
                    </div>
                </div>

                {/* <div className="relative w-full h-10 ">
                    <div className="absolute left-0 ">
                        <FaChevronLeft className="text-2xl cursor-pointer text-yellow-600 bg-white rounded-full border ml-3 border-yellow-600" />
                    </div>

                    <div className="absolute right-0">
                        <FaChevronRight className="text-2xl cursor-pointer bg-yellow-600 text-white mr-3 rounded-full" />
                    </div>
                </div> */}

            </div>
            <div className="relative w-full ">
                    <div className="absolute left-0 -mt-32 ">
                    <FaChevronLeft className="text-5xl cursor-pointer text-white bg-transparent rounded-full border-4 border-white ml-44 shadow-lg hover:bg-yellow-600 hover:text-white transition-all duration-300 ease-in-out p-2" />
                    </div>

                    <div className="absolute right-0 -mt-32">
                    <FaChevronRight className="text-5xl cursor-pointer text-white bg-transparent rounded-full border-4 border-white mr-44 shadow-lg hover:bg-yellow-600 hover:text-white transition-all duration-300 ease-in-out p-2" />
                    </div>
                </div>

            <Footer />
        </>
    )
}
export default Homes;