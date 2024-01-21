import { NavLink, useLoaderData } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaCalendarAlt } from "react-icons/fa";
import { GiSpeedometer } from "react-icons/gi";
import { BsFillFuelPumpDieselFill } from "react-icons/bs";
import { BsCurrencyDollar } from "react-icons/bs";

import { useState } from "react";
import DetailCarousel from "../../../components/DetailCarousel";
import Wp from "../../../components/Wp";
import Payment from "../../Payment/Payment";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

const PortfolioDetails = () => {
    const data = useLoaderData();
    const [name, setName] = useState('')
    const [open, setOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false)
    // //pass information
    const [information, setInformation] = useState(null)
    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    function openModal1() {
        setOpen(true)
        
    }
    

    const {
        bodyType,
        condition,
        features,
        fuelType,
        mileage,
        photo,
        regionalSpec,
        steeringSide,
        title,
        transmissionType,
        year,
    } = data;

    const featuresArray = features.split(", ");

    const handleSubmit = e => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const info = {
            name: formData.get('name'),
            email: formData.get('email'),
            phoneNumber: formData.get('number'),
            country: formData.get('country'),
            presentAddress: formData.get('name'),
        };
          console.log(info);
        setInformation(info)
    }

    console.log(information)
    return (
        <div className=" text-white py-16 px-5 md:px-20 bg-[#141A1C] flex flex-col md:flex-row gap-4">
            <Wp />
            <div className="md:w-[75%]">
                {/* detail navbar */}
                <div>
                    <nav className="border-b border-gray-400 pb-3 mb-6">
                        <ul className="text-xl flex flex-wrap gap-6 ">
                            <li>
                                <NavLink
                                    to="#image"
                                    className={({ isActive }) =>
                                        isActive ? "text-[#BFA37C]" : "text-white"
                                    }
                                >
                                    Image
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="#highlight"
                                    className={({ isActive }) =>
                                        isActive ? "text-[#BFA37C]" : "text-white"
                                    }
                                >
                                    HighLight
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="#features"
                                    className={({ isActive }) =>
                                        isActive ? "text-[#BFA37C]" : "text-white"
                                    }
                                >
                                    Features
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="#specification"
                                    className={({ isActive }) =>
                                        isActive ? "text-[#BFA37C]" : "text-white"
                                    }
                                >
                                    Specifications
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <h2 className="text-3xl font-semibold mb-4">
                    {title} | {bodyType} | {features}
                </h2>
                {/* main  */}
                <div className="">

                    {/* carousel */}
                    <div id="image" className=" ">
                        <DetailCarousel photo={photo} />
                    </div>

                    {/* highlights */}
                    <div id="highlight" className="">
                        <h2 className="text-2xl  mb-8 pb-2 border-b border-gray-400 mt-12 md:mt-24">
                            Highlights
                        </h2>
                        <ul className=" grid grid-cols-3 gap-6 text-white opacity-70">
                            <li className="bg-[#100f0f] rounded-lg shadow-2xl px-6 py-6 lg:px-12 lg:py-8">
                                <span className="text-3xl text-[#BFA37C] w-full flex justify-center">
                                    <FaCalendarAlt />
                                </span>
                                <div className="text-center text-sm ">
                                    <p className=" mt-2">Model Year</p>
                                    <h4>
                                        <u>{year}</u>
                                    </h4>
                                </div>
                            </li>
                            <li className="bg-[#100f0f] rounded-lg shadow-2xl px-6 py-6 lg:px-12 lg:py-8">
                                <span className="text-3xl text-[#BFA37C] w-full flex justify-center">
                                    <GiSpeedometer />
                                </span>
                                <div className="text-center text-sm  ">
                                    <p className="mt-2">Kilometers</p>
                                    <h4>{mileage} km</h4>
                                </div>
                            </li>
                            <li className="bg-[#100f0f] rounded-lg shadow-2xl px-6 py-6 lg:px-12 lg:py-8">
                                <span className="text-3xl text-[#BFA37C] w-full flex justify-center">
                                    <BsFillFuelPumpDieselFill />
                                </span>
                                <div className="text-center text-sm ">
                                    <p className="mt-2">Fuel Type</p>
                                    <h4>{fuelType}</h4>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* features */}
                    <div id="feature" className="">
                        <h2 className="text-2xl mb-8 pb-2 border-b border-gray-400 mt-12 md:mt-16">
                            Features
                        </h2>
                        <div className="flex flex-wrap gap-4">
                            {featuresArray.map((feature, ind) => (
                                <div key={ind} className="px-4 py-2 bg-[#100f0f]">
                                    <p className="opacity-70">{feature}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* specification */}
                    <div id="specification" className="">
                        <h2 className="text-2xl mb-8 pb-2 border-b border-gray-400 mt-12 md:mt-16">
                            Specifications
                        </h2>
                        <div>
                            <ul className="grid grid-cols-2 gap-8">
                                <li>
                                    <h3 className="text-xl opacity-70 mb-1">Body Type </h3>
                                    <p>{bodyType}</p>
                                </li>
                                <li>
                                    <h3 className="text-xl opacity-70 mb-1">Condition </h3>
                                    <p>{condition}</p>
                                </li>
                                <li>
                                    <h3 className="text-xl opacity-70 mb-1">Transmission Type </h3>
                                    <p>{transmissionType}</p>
                                </li>
                                <li>
                                    <h3 className="text-xl opacity-70 mb-1">
                                        Regional Specification{" "}
                                    </h3>
                                    <p>{regionalSpec}</p>
                                </li>
                                <li>
                                    <h3 className="text-xl opacity-70 mb-1">Steering Side </h3>
                                    <p>{steeringSide}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* //react modal */}
            <>
                
                <Transition appear show={isOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-10" onClose={closeModal}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black/25" />
                        </Transition.Child>

                        <div className="fixed inset-0 overflow-y-auto">
                            <div className="flex min-h-full items-center justify-center p-4 text-center">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl  p-6 text-left align-middle shadow-xl transition-all">
                                        <form onSubmit={handleSubmit}>

                                            <label htmlFor="helper-text" className="block mb-2 text-sm font-medium text-white">What&apos;s Your Name?</label>
                                            <input type="text" name="name" id="helper-text" aria-describedby="helper-text-explanation" className=" rounded-sm border border-gray-300 text-sm focus:ring-blue-500  block w-full p-2.5  bg-gray-700 dark:border-gray-600 placeholder-gray-400 text-white" placeholder="Full Name" onChange={(event) => setName(event.target.value)} />
                                            <label htmlFor="helper-text" className="block mb-2 mt-2 text-sm font-medium text-white">Your Email</label>
                                            <input type="email" name="email" id="helper-text" aria-describedby="helper-text-explanation" className=" rounded-sm border border-gray-300 text-sm focus:ring-blue-500  block w-full p-2.5  bg-gray-700 dark:border-gray-600 placeholder-gray-400 text-white" placeholder="Email" onChange={(event) => setName(event.target.value)} />
                                            <label htmlFor="helper-text" className="block mb-2 mt-2 text-sm font-medium text-white">Your Phone Number</label>
                                            <input type="number" name="number" id="helper-text" aria-describedby="helper-text-explanation" className=" rounded-sm border border-gray-300 text-sm focus:ring-blue-500  block w-full p-2.5  bg-gray-700 dark:border-gray-600 placeholder-gray-400 text-white" placeholder="Phone Number" onChange={(event) => setName(event.target.value)} />
                                            <label htmlFor="helper-text" className="block mb-2 mt-2 text-sm font-medium text-white">Country</label>
                                            <input type="text" name="country" id="helper-text" aria-describedby="helper-text-explanation" className=" rounded-sm border border-gray-300 text-sm focus:ring-blue-500  block w-full p-2.5  bg-gray-700 dark:border-gray-600 placeholder-gray-400 text-white" placeholder="Country" onChange={(event) => setName(event.target.value)} />
                                            <label htmlFor="helper-text" className="block mb-2  mt-2 text-sm font-medium text-white">Present Address</label>
                                            <input type="text" name="name" id="helper-text" aria-describedby="helper-text-explanation" className=" rounded-sm border border-gray-300 text-sm focus:ring-blue-500  block w-full p-2.5  bg-gray-700 dark:border-gray-600 placeholder-gray-400 text-white" placeholder="Present Address" onChange={(event) => setName(event.target.value)} />
                                            <p id="helper-text-explanation" className="mt-2 text-sm text-gray-400">We’ll never share your details. Read our <a href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Privacy Policy</a>.</p>
                                            <button onClick={openModal1} type="submit" className="py-1 rounded-sm px-4 mt-3 bg-[#24D366]">Next</button>
                                        </form>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                            <Payment
                             setIsOpen={ setIsOpen}
                                open={open}
                                setOpen={setOpen}
                                information={information}
                            ></Payment>
                        </div>
                    </Dialog>
                </Transition>
            </>
            

            {/* xxxx */}
            <div className="bg-black h-72 md:w-[25%] mt-10 md:mt-[152px] text-white p-5">
                <h1 className="text-xl font-semibold text-center">Do you need this car?</h1>
                <p className="text-center mt-3">First pay $250 and then we will take over the responsibility of finding your Dream Car!</p>
                <hr className="mt-5 opacity-30" />
                <div className="mt-10 space-y-4">
                    {/* <a href="tel:+971544515235" className="bg-sky-500 w-full py-2 transition-all px-2 text-center flex justify-center items-center gap-4 font-semibold rounded-sm hover:bg-transparent border border-sky-500 hover:text-sky-500">
                        <FaPhoneAlt />
                        Call
                    </a>
                    <a href="mailto:contact@rsmotorsinternational.com" className="bg-transparent transition-all w-full py-2 px-2 text-center flex justify-center items-center gap-4 font-semibold rounded-sm hover:bg-transparent border border-[#BFA37C] hover:text-[#BFA37C]">
                        <MdOutlineMail />
                        Email
                    </a> */}

                    <button  onClick={openModal} className="bg-[#24D366] transition-all w-full py-2 px-2 text-center flex justify-center items-center gap-1 font-semibold rounded-sm hover:bg-transparent border border-[#24D366] hover:text-[#24D366]">
                        <BsCurrencyDollar className="text-xl" />
                        Pay
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PortfolioDetails;
