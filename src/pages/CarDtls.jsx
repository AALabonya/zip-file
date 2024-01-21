import { NavLink, useLoaderData } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import DetailCarousel from "../components/DetailCarousel";
import { FaCalendarAlt } from "react-icons/fa";
import { GiSpeedometer } from "react-icons/gi";
import { BsFillFuelPumpDieselFill } from "react-icons/bs";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { useState } from "react";

const CarDtls = () => {
  const data = useLoaderData();
  const [name, setName] = useState('')

  const {
    bodyType,
    condition,
    features,
    fuelType,
    mileage,
    photo,
    price,
    regionalSpec,
    steeringSide,
    title,
    transmissionType,
    year,
  } = data;

  const featuresArray = features.split(", ");

  // function handleMsg(event) {
  //   event.preventDefault();
  //   const name = event.target.name.value;


  // }

  return (
    <div className=" text-white py-16 px-5 md:px-20 bg-[#141A1C] md:flex gap-4">
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
            <ul className="grid grid-cols-3 gap-6 text-white opacity-70">
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

      <dialog id="my_modal_2" className="modal">
        <div className="modal-box text-black bg-black rounded-sm">
          <form >

            <label htmlFor="helper-text" className="block mb-2 text-sm font-medium text-white">What's Your Name?</label>
            <input type="text" name="name" id="helper-text" aria-describedby="helper-text-explanation" className=" rounded-sm border border-gray-300 text-sm focus:ring-blue-500  block w-full p-2.5  bg-gray-700 dark:border-gray-600 placeholder-gray-400 text-white" placeholder="Full Name" onChange={(event) => setName(event.target.value)} />

            <p id="helper-text-explanation" className="mt-2 text-sm text-gray-400">We’ll never share your details. Read our <a href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Privacy Policy</a>.</p>
            <a href={`https://wa.me/+971544515235?text=Hello I'm ${name}, I want to buy ${title} - ${year}`} type="button" target="_blank" rel="noreferrer" className="py-1 rounded-sm px-4 mt-3 bg-[#24D366]">Next</a>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

      {/* xxxx */}
      <div className="bg-black h-80 md:w-[25%] mt-20 md:mt-[152px] text-white p-5">
        <h1 className="text-2xl font-semibold text-center">Price: {price ? `$${price}` : 'Negotiable'}</h1>
        <hr className="mt-5 opacity-30" />
        <div className="mt-10 space-y-4">
          <a href="tel:+971544515235" className="bg-sky-500 w-full py-2 transition-all px-2 text-center flex justify-center items-center gap-4 font-semibold rounded-sm hover:bg-transparent border border-sky-500 hover:text-sky-500">
            <FaPhoneAlt />
            Call
          </a>
          <a href="mailto:contact@rsmotorsinternational.com" className="bg-transparent transition-all w-full py-2 px-2 text-center flex justify-center items-center gap-4 font-semibold rounded-sm hover:bg-transparent border border-[#BFA37C] hover:text-[#BFA37C]">
            <MdOutlineMail />
            Email
          </a>

          <button className="bg-[#24D366] transition-all w-full py-2 px-2 text-center flex justify-center items-center gap-4 font-semibold rounded-sm hover:bg-transparent border border-[#24D366] hover:text-[#24D366]" onClick={() => document.getElementById('my_modal_2').showModal()}>
            <FaWhatsapp />
            WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarDtls;
