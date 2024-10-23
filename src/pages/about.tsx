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

            <div className='space-y-8'>
                {divData.map((item, value) => (
                    <div
                        key={item.id}
                        className={`flex items-center ${value % 2 === 1 ? 'flex-row-reverse' : ''}`}
                    >
                        <div className="w-1/2 p-4">
                            <img
                                src={item.imgsrc}
                                alt={`Item ${item.id}`}
                                className="w-full h-auto rounded-lg shadow-md"
                            />
                        </div>

                        <div className="w-1/2 p-4">
                            <p className="text-lg">{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </>
    )
}
export default AboutPage;