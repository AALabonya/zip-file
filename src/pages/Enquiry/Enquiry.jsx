import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Enquiry = () => {
   
    const [personalInfo, setPersonalInfo] = useState(null);
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [number, setNumber] = useState(null);
    const [country, setCountry] = useState(null);
    const [presentAddress, setPresentAddress] = useState(null);
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const newForm = { name, email, number, country, presentAddress };
        console.log(newForm);
        setPersonalInfo(newForm);
    
        // Navigate to another page after form submission
        navigate("/VehicleInfoForm");
      };
    
      console.log("hello personal info", personalInfo);
    return (
        <div className="flex justify-center">

            <div className=" text-black bg-black rounded-md">
                <h1 className="text-center text-white mb-16 mt-5 text-2xl">Give Your Information</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="helper-text" className="block mb-2 text-base font-medium text-white">What&apos;s Your Name?</label>
                        <input type="text" name="name" id="helper-text" aria-describedby="helper-text-explanation" className=" rounded-sm border border-gray-300 text-sm focus:ring-blue-500  block w-full p-2.5  bg-gray-700 dark:border-gray-600 placeholder-gray-400 text-white" placeholder="Full Name" onChange={(event) => setName(event.target.value)} />
                        <label htmlFor="helper-text" className="block mb-2 mt-4 text-base font-medium text-white">Your Email</label>
                        <input type="email" name="email" id="helper-text" aria-describedby="helper-text-explanation" className=" rounded-sm border border-gray-300 text-sm focus:ring-blue-500  block w-full p-2.5  bg-gray-700 dark:border-gray-600 placeholder-gray-400 text-white" placeholder="Email" onChange={(event) => setEmail(event.target.value)} />
                        <label htmlFor="helper-text" className="block mb-2 mt-4 text-base font-medium text-white">Your Phone Number</label>
                        <input type="number" name="number" id="helper-text" aria-describedby="helper-text-explanation" className=" rounded-sm border border-gray-300 text-sm focus:ring-blue-500  block w-full p-2.5  bg-gray-700 dark:border-gray-600 placeholder-gray-400 text-white" placeholder="Phone Number" onChange={(event) => setNumber(event.target.value)} />
                        <label htmlFor="helper-text" className="block mb-2 mt-4 text-base font-medium text-white">Country</label>
                        <input type="text" name="country" id="helper-text" aria-describedby="helper-text-explanation" className=" rounded-sm border border-gray-300 text-sm focus:ring-blue-500  block w-full p-2.5  bg-gray-700 dark:border-gray-600 placeholder-gray-400 text-white" placeholder="Country" onChange={(event) => setCountry(event.target.value)} />
                        <label htmlFor="helper-text" className="block mb-2  mt-4 text-base font-medium text-white">Present Address</label>
                        <input type="text" name="name" id="helper-text" aria-describedby="helper-text-explanation" className=" rounded-sm border border-gray-300 text-sm focus:ring-blue-500  block w-full p-2.5  bg-gray-700 dark:border-gray-600 placeholder-gray-400 text-white" placeholder="Present Address" onChange={(event) => setPresentAddress(event.target.value)} />
                        <p id="helper-text-explanation" className="mt-2 text-base text-gray-400">We’ll never share your details. Read our <a href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Privacy Policy</a>.</p>
                        <button type="submit" className="py-1 rounded-sm px-4 mt-3 bg-[#24D366]">Next</button>
                       
                    </form>

                </div>
        </div>
    );
};

export default Enquiry;