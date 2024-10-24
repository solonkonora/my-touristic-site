import * as React from 'react'
import Form from "../components/form"
import MiniNavbar from '../components/topNav';
import Navigation from '../components/navigation';
import HeroSection from '../components/hero';
import Footer from '../components/footer';

const ContactUs = () => {
    return (
        <>
            <MiniNavbar />
            <Navigation />
            <HeroSection />
            <Form />
            <Footer />
        </>
    )
}
export default ContactUs;