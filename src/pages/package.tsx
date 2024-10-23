import * as React from 'react'
import MiniNavbar from '../components/topNav';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import TourPlan from '../components/plans';
import HeroSection from '../components/hero';

const PackagePage = () => {
    return (
        <>
            <MiniNavbar />
            <Navigation />
            <HeroSection />
            <TourPlan />
            <Footer />
        </>
    )
}
export default PackagePage;