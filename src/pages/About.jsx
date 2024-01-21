import logo from '../assets/peter-broomfield-m3m-lnR90uM-unsplash.jpg';
import Wp from '../components/Wp';

const About1 = () => {
    return (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 bg-black">
            <Wp />
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-white pb-4">About Us</h1>
                    <p className="font-normal text-base leading-6 text-gray-200 ">Welcome to RS Motors International, your premier destination for high-quality, globally sourced used cars. With a passion for connecting discerning buyers with their dream vehicles, we take pride in being your trusted partner in the world of pre-owned automobiles.</p>
                </div>
                <div className="w-full lg:w-8/12 ">
                    <img className="w-full h-full" src={logo} alt="A group of People" />
                </div>
            </div>

            <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-white pb-4">Our Mission</h1>
                    <p className="font-normal text-base leading-6 text-gray-200 ">It is a long established fact that a reader will be At RS Motors International, our mission is simple: to redefine the used car buying experience. We strive to provide a seamless and transparent process, offering a curated selection of meticulously inspected vehicles that meet the highest standards of quality and performance.</p>
                </div>

            </div>
        </div>
    );
};

export default About1;
