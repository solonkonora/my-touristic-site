import MiniNavbar from '../components/TopNav';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import TourPlan from '../components/Plans';
import HeroSection from '../components/Hero';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const PackagePage = () => {
    return (
        <>
            <MiniNavbar />
            <Navigation />
            <HeroSection 
                title="Tour Packages" 
                currentPage="Packages"
            />
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