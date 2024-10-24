export default function HeroSection() {
    return (
        <div className="relative isolate overflow-hidden py-10 sm:py-32 flex items-center justify-center">
            <img
                alt=""
                src="./images/hero.jpg"
                className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
            />
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
                        Contact Us
                    </h2>
                    <p className="mt-8 text-pretty text-lg font-medium sm:text-xl/8 flex justify-center items-center space-x-2">
                        <span className="text-white">Home</span>
                        <span className="text-4xl">&#8594;</span> {/* Forward arrow */}
                        <span className="text-yellow-600">Gallery</span>
                    </p>
                </div>
            </div>
        </div>

    )
}