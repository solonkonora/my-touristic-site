import React from "react";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const TourPlan = () => {
    const divData = [
        {
            imgSrc: "https://images.pexels.com/photos/8974287/pexels-photo-8974287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            subtitle: "Subtitle 1",
            text: "This is some normal text describing the content of this div.",
        },
        {
            imgSrc: "https://media.istockphoto.com/id/1254013331/photo/family-running-down-rocky-trail.jpg?b=1&s=612x612&w=0&k=20&c=iL8BWUF--VkohXGJSdBuKugUv5kpwvpm9vO0GgXahD4=",
            subtitle: "Subtitle 2",
            text: "This is some normal text describing the content of this div.",
        },
        {
            imgSrc: "https://images.pexels.com/photos/17140115/pexels-photo-17140115/free-photo-of-hiker-among-sandstone-formations.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            subtitle: "Subtitle 3",
            text: "This is some normal text describing the content of this div.",
        },
        {
            imgSrc: "https://images.pexels.com/photos/8974287/pexels-photo-8974287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            subtitle: "Subtitle 1",
            text: "This is some normal text describing the content of this div.",
        },
        {
            imgSrc: "https://media.istockphoto.com/id/1254013331/photo/family-running-down-rocky-trail.jpg?b=1&s=612x612&w=0&k=20&c=iL8BWUF--VkohXGJSdBuKugUv5kpwvpm9vO0GgXahD4=",
            subtitle: "Subtitle 2",
            text: "This is some normal text describing the content of this div.",
        },
        {
            imgSrc: "https://images.pexels.com/photos/17140115/pexels-photo-17140115/free-photo-of-hiker-among-sandstone-formations.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            subtitle: "Subtitle 3",
            text: "This is some normal text describing the content of this div.",
        },
    ];

    return (
        <>
            <div className="mb-4">
                <p className="text-2xl font-bold text-center text-yellow-600 pt-10">Choose Your Package</p>
            </div>

            <div className="mb-4">
                <h2 className="text-4xl font-semibold text-center">Select your best package <br /> for your travel</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
                {divData.map((item, index) => (
                    <div key={index} className="flex flex-col items-start bg-white p-4 rounded-lg shadow-md">
                        <img
                            src={item.imgSrc}
                            alt={item.subtitle}
                            className="w-full h-40 object-cover rounded-lg mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">{item.subtitle}</h3>
                        <p className="text-black-600 mb-4">
                            {item.text}
                        </p>
                        <button className="bg-yellow-600 text-white py-2 px-4 rounded hover:bg-yellow-500">
                            Read More
                        </button>
                    </div>
                ))}
            </div>

            <div className="relative w-full h-10 ">
                <div className="absolute left-0 ">
                    <FaChevronLeft className="text-2xl cursor-pointer text-yellow-600 bg-white rounded-md border ml-3 border-yellow-600" />
                </div>

                <div className="absolute right-0">
                    <FaChevronRight className="text-2xl cursor-pointer bg-yellow-600 text-white mr-3 rounded-md" />
                </div>
            </div>
        </>
    );
};

export default TourPlan;
