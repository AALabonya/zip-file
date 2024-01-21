import { useEffect, useState } from "react";
import b1 from '../assets/banner/IMG-20240119-WA0005.jpg';
import b2 from '../assets/banner/IMG-20240119-WA0006.jpg';
import b3 from '../assets/banner/IMG-20240119-WA0007.jpg';
import b4 from '../assets/banner/IMG-20240119-WA0008.jpg';

const Hero = () => {
    const [currentSlider, setCurrentSlider] = useState(0);

    const sliders = [{ img: `${b1}`, title: "Unleash Your Drive, Embrace the Journey", des: "Discover a world of possibilities with RS Motors International. Our curated selection of used cars is your ticket to unforgettable journeys. Embrace the road ahead with confidence and style.", }, { img: `${b2}`, title: "Beyond Mileage, Beyond Expectations.", des: "At RS Motors International, we redefine the used car experience. Our handpicked collection goes beyond mileage, offering you vehicles that exceed expectations in performance, reliability, and style. Your next adventure awaits – make it extraordinary.", }, { img: `${b3}`, title: " Driven by Quality, Priced for You.", des: "Quality is our driving force, and affordability is our commitment. At RS Motors International, every used car is a testament to our dedication to excellence. Experience premium vehicles at prices that fit your budget.", }, { img: `${b4}`, title: " Global Finds, Local Expertise", des: "Explore the world without leaving your neighborhood. RS Motors International brings you global finds with local expertise. Our team scours the planet to connect you with the finest used cars, ensuring a world-class experience right at your doorstep.", },];

    // if you don't want to change the slider automatically then you can just remove the useEffect
    useEffect(() => {
        const intervalId = setInterval(() => setCurrentSlider(currentSlider === sliders.length - 1 ? 0 : currentSlider + 1), 5000);
        return () => clearInterval(intervalId);
    }, [currentSlider]);

    return (
        <div className="">
            <div className="w-full h-96 md:h-screen flex flex-col xl:flex-row items-center justify-center gap-5 lg:gap-10 relative bg-cover before:absolute before:bg-black/50 before:inset-0 duration-1000 transform ease-linear z-50" style={{ backgroundImage: `url(${sliders[currentSlider].img})`, }}>
                {/* text container here */}
                <div className="min-w-full drop-shadow-lg text-white rounded-lg ease-linear duration-300 flex flex-col justify-center items-center" data-aos="zoom-out">
                    <h1 className=" text-3xl font-semibold text-center mb-3">{sliders[currentSlider].title}</h1>
                    <div className="md:px-20 px-5">
                        <p className="text-center md:px-20 md:text-base text-lg  ">{sliders[currentSlider].des}</p>
                    </div>
                </div>
            </div>

            {/* <div className="flex justify-center items-center gap-3 p-2 ease-linear duration-500">
                {sliders.map((slide, inx) => (<img onClick={() => setCurrentSlider(inx)} key={inx} src={slide.img} className={`h-[50px] min-w-[80px] ${currentSlider === inx ? "border-2 border-black p-[2px]" : ""} rounded-lg box-content cursor-pointer`} alt={slide.title} />))}
            </div> */}
        </div>
    )
};

export default Hero;