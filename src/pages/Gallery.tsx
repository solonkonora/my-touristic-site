import * as React from 'react'
import MiniNavbar from '../components/TopNav';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import HeroSection from '../components/Hero';

const GalleryPage = () => {
    const galleryImages = [
        {
            id: 1,
            src: "https://images.pexels.com/photos/3889805/pexels-photo-3889805.jpeg?auto=compress&cs=tinysrgb&w=800",
            alt: "Rwanda Mountain Gorilla",
            colSpan: "md:col-span-2",
            rowSpan: "md:row-span-2"
        },
        {
            id: 2,
            src: "./images/one.jpg",
            alt: "Akagera Safari Wildlife",
            colSpan: "md:col-span-1",
            rowSpan: "md:row-span-1"
        },
        {
            id: 3,
            src: "https://images.pexels.com/photos/3889804/pexels-photo-3889804.jpeg?auto=compress&cs=tinysrgb&w=800",
            alt: "Lake Kivu Sunset",
            colSpan: "md:col-span-1",
            rowSpan: "md:row-span-2"
        },
        {
            id: 4,
            src: "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800",
            alt: "Volcanoes National Park",
            colSpan: "md:col-span-1",
            rowSpan: "md:row-span-1"
        },
        {
            id: 5,
            src: "https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=800",
            alt: "Traditional Rwandan Dance",
            colSpan: "md:col-span-2",
            rowSpan: "md:row-span-2"
        },
        {
            id: 6,
            src: "https://images.pexels.com/photos/259967/pexels-photo-259967.jpeg?auto=compress&cs=tinysrgb&w=800",
            alt: "Nyungwe Forest Canopy",
            colSpan: "md:col-span-1",
            rowSpan: "md:row-span-1"
        },
        {
            id: 7,
            src: "https://images.pexels.com/photos/2422461/pexels-photo-2422461.jpeg?auto=compress&cs=tinysrgb&w=800",
            alt: "Golden Monkeys",
            colSpan: "md:col-span-1",
            rowSpan: "md:row-span-2"
        },
        {
            id: 8,
            src: "https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=800",
            alt: "Kigali City View",
            colSpan: "md:col-span-1",
            rowSpan: "md:row-span-1"
        },
        {
            id: 9,
            src: "https://images.pexels.com/photos/3889805/pexels-photo-3889805.jpeg?auto=compress&cs=tinysrgb&w=800",
            alt: "Rwanda Tea Plantations",
            colSpan: "md:col-span-1",
            rowSpan: "md:row-span-1"
        },
         {
            id: 10,
            src: "https://images.pexels.com/photos/3889805/pexels-photo-3889805.jpeg?auto=compress&cs=tinysrgb&w=800",
            alt: "Rwanda Mountain Gorilla",
            colSpan: "md:col-span-2",
            rowSpan: "md:row-span-2"
        },
        {
            id: 11,
            src: "./images/one.jpg",
            alt: "Akagera Safari Wildlife",
            colSpan: "md:col-span-1",
            rowSpan: "md:row-span-1"
        },
        {
            id: 12,
            src: "./images/two.jpg",
            alt: "Lake Kivu Sunset",
            colSpan: "md:col-span-2",
            rowSpan: "md:row-span-2"
        },
        {
            id: 13,
            src: "./images/three.jpg",
            alt: "Volcanoes National Park",
            colSpan: "md:col-span-2",
            rowSpan: "md:row-span-1"
        },
        {
            id: 14,
            src: "./images/four.jpg",
            alt: "Traditional Rwandan Dance",
            colSpan: "md:col-span-2",
            rowSpan: "md:row-span-1"
        },
    ];

    return (
        <>
            <MiniNavbar />
            <Navigation />
            <HeroSection 
                title="Gallery" 
                currentPage="Gallery"
            />

            <div className="container mx-auto py-8 px-4">
                <div className="hidden md:flex items-center justify-end my-3">
                    <a
                        href="#"
                        className="bg-yellow-600 text-white border-2 rounded-md py-1 px-4 text-base md:py-2 md:px-6 md:text-lg hover:bg-yellow-500 transition duration-300"
                    >
                        Open Instagram
                    </a>
                </div>
                
                {/* Responsive Masonry Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
                    {galleryImages.map((image) => (
                        <div
                            key={image.id}
                            className={`relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer group ${image.colSpan} ${image.rowSpan}`}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover"
                            />
                            {/* Overlay on hover */}
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                                <p className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 text-center">
                                    {image.alt}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </>
    )
}
export default GalleryPage;