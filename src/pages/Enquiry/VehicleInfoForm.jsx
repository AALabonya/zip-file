import { Link } from "react-router-dom";
import Payment from "../Payment/Payment";
import { useState } from "react";

const VehicleInfoForm = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);

    async function handleAddCar(event) {
        event.preventDefault();
        const form = event.target;
    
        const title = form.elements.name.value;
        const year = form.elements.year.value;
        const mileage = form.elements.mileage.value;
        const fuelType = form.elements.fuelType.value;
        const bodyType = form.elements.bodyType.value;
        const condition = form.elements.condition.value;
        const transmissionType = form.elements.transmissionType.value;
        const regionalSpec = form.elements.regionalSpec.value;
        const steeringSide = form.elements.steeringSide.value;
    
        console.log("Title:", title);
        console.log("Year:", year);
        console.log("Mileage:", mileage);
        console.log("Fuel Type:", fuelType);
        console.log("Body Type:", bodyType);
        console.log("Condition:", condition);
        console.log("Transmission Type:", transmissionType);
        console.log("Regional Spec:", regionalSpec);
        console.log("Steering Side:", steeringSide);
    }
    return (
        <div className="flex justify-center">
            <div className="modal-box text-black bg-black rounded-md">

                <h1 className="text-2xl text-center text-white mb-4 mt-10">Vehicle Info Form</h1>
                <form onSubmit={handleAddCar} className="max-w-md mx-auto bg-black rounded-md">
                    <div className="relative z-0 w-full mb-5 group">
                        <label htmlFor="helper-text" className="block mb-2 text-base font-medium text-white">Vehicle Name</label>
                        <input type="text" name="name" id="helper-text" aria-describedby="helper-text-explanation" className=" rounded-sm border border-gray-300 text-sm focus:ring-blue-500  block w-full p-2.5  bg-gray-700 dark:border-gray-600 placeholder-gray-400 text-white" placeholder="Vehicle Name" />
                    </div>

                    <div className="relative z-0 w-full mb-5 group">
                        <div className="relative z-0 w-full mb-5 group">
                            <label htmlFor="helper-text" className="block mb-2 text-base font-medium text-white">Year</label>
                            <input type="number" name="year" id="helper-text" aria-describedby="helper-text-explanation" className=" rounded-sm border border-gray-300 text-sm focus:ring-blue-500  block w-full p-2.5  bg-gray-700 dark:border-gray-600 placeholder-gray-400 text-white" placeholder="year" />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-5 group">
                            <label htmlFor="helper-text" className="block mb-2 text-base font-medium text-white">Mileage</label>
                            <input type="number" name="mileage" id="helper-text" aria-describedby="helper-text-explanation" className=" rounded-sm border border-gray-300 text-sm focus:ring-blue-500  block w-full p-2.5  bg-gray-700 dark:border-gray-600 placeholder-gray-400 text-white" placeholder="Mileage" />
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <div className="relative z-0 w-full mb-5 group">
                                <label htmlFor="helper-text" className="block mb-2 text-base font-medium text-white">Fuel type</label>
                                <select
                                    type="text"
                                    name="fuelType"
                                    id="floating_first_name"
                                    className=" rounded-sm border border-gray-300 text-sm focus:ring-blue-500  block w-full p-2.5  bg-gray-700 dark:border-gray-600 placeholder-gray-400 text-white"
                                    placeholder=" "
                                    required
                                >
                                    <option value="" className="" disabled selected>
                                        Fuel type
                                    </option>
                                    <option value="Diesel" className="text-black">
                                        Diesel
                                    </option>
                                    <option value="Petrol" className="text-black">
                                        Petrol
                                    </option>
                                    <option value="Hybrid" className="text-black">
                                        Hybrid
                                    </option>
                                    <option value="Electric" className="text-black">
                                        Electric
                                    </option>
                                </select>

                            </div>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">

                        <div className="relative z-0 w-full mb-5 group">
                            <label htmlFor="helper-text" className="block mb-2 text-base font-medium text-white">Regional Spec</label>
                            <select
                                type="text"
                                name="regionalSpec"
                                id="floating_first_name"
                                className=" rounded-sm border border-gray-300 text-sm focus:ring-blue-500  block w-full p-2.5  bg-gray-700 dark:border-gray-600 placeholder-gray-400 text-white"
                                placeholder=" "
                                required
                            >
                                <option value="" className="" disabled selected>
                                    Regional Spec
                                </option>
                                <option value="GCC Specs" className="text-black">
                                    GCC Specs
                                </option>
                                <option value="American Specs" className="text-black">
                                    American Specs
                                </option>
                                <option value="Canadian Specs" className="text-black">
                                    Canadian Specs
                                </option>
                                <option value="European Specs" className="text-black">
                                    European Specs
                                </option>
                                <option value=" Japanese Specs" className="text-black">
                                    Japanese Specs
                                </option>
                                <option value="Korean Specs" className="text-black">
                                    Korean Specs
                                </option>
                                <option value="Chinese Specs" className="text-black">
                                    Chinese Specs
                                </option>
                                <option value=" Other" className="text-black">
                                    Other
                                </option>
                            </select>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <label htmlFor="helper-text" className="block mb-2 text-base font-medium text-white"> Condition</label>
                            <select
                                type="text"
                                name="condition"
                                id="floating_first_name"
                                className=" rounded-sm border border-gray-300 text-sm focus:ring-blue-500  block w-full p-2.5  bg-gray-700 dark:border-gray-600 placeholder-gray-400 text-white"
                                placeholder=" "
                                required
                            >
                                <option value="" className="" disabled selected>
                                    Condition
                                </option>
                                <option value="Excellent" className="text-black">
                                    Excellent
                                </option>
                                <option value="Good" className="text-black">
                                    Good
                                </option>
                                <option value="Fair" className="text-black">
                                    Fair
                                </option>
                            </select>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-5 group">
                            <label htmlFor="helper-text" className="block mb-2 text-base font-medium text-white">Body Type</label>
                            <select
                                type="text"
                                name="bodyType"
                                id="floating_first_name"
                                className=" rounded-sm border border-gray-300 text-sm focus:ring-blue-500  block w-full p-2.5  bg-gray-700 dark:border-gray-600 placeholder-gray-400 text-white"
                                placeholder=" "
                                required
                            >
                                <option value="" className="" disabled selected>
                                    Body Type
                                </option>
                                <option value="SUV Coupe Sedan" className="text-black">
                                    SUV Coupe Sedan
                                </option>
                                <option value="Crossover" className="text-black">
                                    Crossover
                                </option>
                                <option
                                    value="Hard Top Convertible Pick Up Truck"
                                    className="text-black"
                                >
                                    Hard Top Convertible Pick Up Truck
                                </option>
                                <option value="Hatchback" className="text-black">
                                    Hatchback
                                </option>
                                <option value=" Soft Top Convertible" className="text-black">
                                    Soft Top Convertible
                                </option>
                                <option value="Sports Car Van" className="text-black">
                                    Sports Car Van
                                </option>
                                <option value="Wagon" className="text-black">
                                    Wagon
                                </option>
                                <option value="Utility Truck" className="text-black">
                                    Utility Truck
                                </option>
                                <option value=" Other" className="text-black">
                                    Other
                                </option>
                            </select>
                        </div>

                        <div className="relative z-0 w-full mb-5 group">
                            <label htmlFor="helper-text" className="block mb-2 text-base font-medium text-white">Transmission Type</label>
                            <select
                                type="text"
                                name="transmissionType"
                                id="floating_first_name"
                                className=" rounded-sm border border-gray-300 text-sm focus:ring-blue-500  block w-full p-2.5  bg-gray-700 dark:border-gray-600 placeholder-gray-400 text-white"
                                placeholder=" "
                                required
                            >
                                <option value="" className="" disabled selected>
                                    Transmission Type
                                </option>
                                <option value="Manual Transmission" className="text-black">
                                    Manual Transmission
                                </option>
                                <option value="Automatic Transmission" className="text-black">
                                    Automatic Transmission
                                </option>
                            </select>
                        </div>
                    </div>


                    <div className="grid md:grid-cols-1 md:gap-6">

                        <div className="relative z-0 w-full mb-5 group">
                            <label htmlFor="helper-text" className="block mb-2 text-base font-medium text-white">Steering Side</label>
                            <select
                                type="text"
                                name="steeringSide"
                                id="floating_first_name"
                                className=" rounded-sm border border-gray-300 text-sm focus:ring-blue-500  block w-full p-2.5  bg-gray-700 dark:border-gray-600 placeholder-gray-400 text-white"
                                placeholder=" "
                                required
                            >
                                <option value="" className="" disabled selected>
                                    Steering Side
                                </option>
                                <option value="Left Hand" className="text-black">
                                    Left Hand
                                </option>
                                <option value="Right Hand" className="text-black">
                                    Right Hand
                                </option>
                            </select>
                        </div>
                    </div>

                    <Link >
                        <button
                            onClick={handleOpen}
                            type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-md text-base  px-5 py-2.5 text-center w-full"
                        >
                            Pay
                        </button>
                    </Link>
                </form>
            </div>
      
                <Payment
                    open={open}
                    setOpen={setOpen}

                ></Payment>
           
        </div>

    );
};

export default VehicleInfoForm;