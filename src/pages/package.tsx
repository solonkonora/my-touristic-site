import * as React from 'react'
import MiniNavbar from '../components/topNav';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import TourPlan from '../components/plans';
import HeroSection from '../components/hero';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const PackagePage = () => {
    return (
        <>
            <MiniNavbar />
            <Navigation />
            <HeroSection />
            <TourPlan />

            {/* pagination buttons */}
            <div className="relative w-full h-10 ">
                <div className="absolute left-0 ">
                    <FaChevronLeft className="text-3xl cursor-pointer text-yellow-600 bg-white rounded-full border-2 border-yellow-600 ml-3 shadow-lg hover:bg-yellow-600 hover:text-white transition-all duration-300 ease-in-out p-2" />
                </div>

                <div className="absolute right-0">
                    <FaChevronRight className="text-3xl cursor-pointer text-yellow-600 bg-white rounded-full border-2 border-yellow-600 ml-3 shadow-lg hover:bg-yellow-600 hover:text-white transition-all duration-300 ease-in-out p-2" />
                </div>
            </div>

            <Footer />
        </>
    )
}
export default PackagePage;