import * as React from 'react'
import Form from "../components/Form"
import MiniNavbar from '../components/TopNav';
import Navigation from '../components/Navigation';
import HeroSection from '../components/Hero';
import Footer from '../components/Footer';

const ContactUs = () => {
    return (
        <>
            <MiniNavbar />
            <Navigation />
            <HeroSection 
                title="Contact Us" 
                currentPage="Contact"
            />
            <Form />
            <Footer />
        </>
    )
}
export default ContactUs;