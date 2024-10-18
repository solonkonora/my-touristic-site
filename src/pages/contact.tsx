import * as React from 'react'
import Form from "../components/form"
import MiniNavbar from '../components/topNav';
import Navigation from '../components/navigation';
import Footer from '../components/footer';

const ContactUs = () => {
    return (
        <>
            <MiniNavbar />
            {/* needs the hero section */}
            <Navigation />
            <Form />
            <Footer />
        </>
    )
}
export default ContactUs;