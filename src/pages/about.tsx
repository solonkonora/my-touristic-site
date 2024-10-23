import * as React from 'react'
import MiniNavbar from '../components/topNav';
import Navigation from '../components/navigation';
import Footer from '../components/footer';

const AboutPage = () => {

    const divData = [
        {
            id: 1,
            imgsrc: "https://images.pexels.com/photos/1137453/pexels-photo-1137453.jpeg?auto=compress&cs=tinysrgb&w=400",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, voluptates?Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate veritatis pariatur fuga maiores, dolore ipsam! In eius delectus porro molestiae",
        },
        {
            id: 2,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aliquam nobis non perferendis, expedita dolor incidunt eius quam! Vitae a maiores soluta ratione voluptates unde aspernatur libero rerum aut ex.",
            imgsrc: "https://images.pexels.com/photos/1102609/pexels-photo-1102609.jpeg?auto=compress&cs=tinysrgb&w=400",
        },
        {
            id: 3,
            imgsrc: "https://images.pexels.com/photos/5792827/pexels-photo-5792827.jpeg?auto=compress&cs=tinysrgb&w=400",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aliquam nobis non perferendis, expedita dolor incidunt eius quam! Vitae a maiores soluta ratione voluptates unde aspernatur libero rerum aut ex.",
        }
    ]

    return (
        <>
            <MiniNavbar />
            <Navigation />
            {/* needs the hero section */}


            <section className="relative flex items-center justify-between h-screen bg-gray-100">
                {/* Left Content */}
                <div className="w-full md:w-1/2 p-8 z-10">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
                        We are dedicated to providing the best travel experience.
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">
                        Discover the Land of a Thousand Hills.
                    </p>
                    <a href="#"
                        className="inline-block mt-6 bg-teal-900 text-white border-8 border-white py-2 px-6 rounded-lg text-lg hover:bg-teal-700 absolute bottom-8 left-8 md:relative md:mt-6">
                        Get Started
                    </a>
                </div>

                {/* Right Image */}
                <div className="absolute top-0 right-0 w-full md:w-2/5 h-full z-0">
                    <img
                        src="https://images.pexels.com/photos/3889805/pexels-photo-3889805.jpeg?auto=compress&cs=tinysrgb&w=800"
                        alt="Safari"
                        className="w-full h-full object-cover"
                    />
                </div>
            </section>


            <h1 className='text-center text-2xl sm:text-3xl md:text-5xl my-10'>Welcome To <span className="underline">Africa</span> Wizzy Safari</h1>

            <div className="space-y-8">
                {divData.map((item, value) => (
                    <div
                        key={item.id}
                        className={`flex flex-col md:flex-row ${value % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                    >
                        {/* Image section */}
                        <div className="w-full md:w-1/2 p-4">
                            <img
                                src={item.imgsrc}
                                alt={`Item ${item.id}`}
                                className="w-full h-auto"
                            />
                        </div>

                        {/* Text section */}
                        <div className="w-full md:w-1/2 p-4">
                            <p className="text-lg text-center md:text-left">{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </>
    )
}
export default AboutPage;