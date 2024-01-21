/* eslint-disable react/prop-types */
// import Fade from "@mui/material/Fade";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
import { FaHouseUser } from "react-icons/fa6";
import { MdOutlineErrorOutline } from "react-icons/md";
import { Dialog, Transition } from "@headlessui/react";

import { Fragment } from 'react'
VITE_PAYMENY_GATEWAY_PK=pk_test_51OEEFQJz4BJljXPPJ7Cu0q26sp26wg5NZ9E0YBD1Go5Lg7cCH156DalWuScQq2EfOM4YFyugked85M43O1mUikIL00gZFfZIowgit

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENY_GATEWAY_PK);

const Payment = ({ open, setOpen, information, setIsOpen }) => {
    console.log("info from check", information);

    function closeModal() {
        setOpen(false)
        setIsOpen(false)
    }

    return (
        <div>
           
            <>
                <Transition appear show={open} as={Fragment}>
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
                                    <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                        <div className="flex flex-col md:flex-row mt-10">
                                            <div className="lg:w-1/2">
                                                <h1 className="text-start text-xl flex items-center"><FaHouseUser className="mr-2 bg-white rounded-md shadow-lg" />WE PARK HERE</h1>
                                                <h1 className="text-start text-xl mt-6">Pay WE PARK HERE</h1>
                                                <h1 className="text-start text-4xl font-bold">$250.00</h1>
                                                <div className="overflow-x-auto">
                                                    <table className="table mt-6">

                                                        <tbody>

                                                            <tr>

                                                                <td>
                                                                    <div className="flex items-center gap-3 mt-6">

                                                                        <div>
                                                                            <div className="font-bold">Get your car consultant</div>
                                                                            <div className="text-sm opacity-50">get your car consultant in $250</div>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    $250.00
                                                                </td>
                                                            </tr>
                                                            <tr>

                                                                <td>
                                                                    <div className="flex items-center gap-3">

                                                                        <div>
                                                                            <div className="font-bold">Subtotal</div>
                                                                            <div className="text-sm opacity-50 flex items-center">Tax <MdOutlineErrorOutline className="mt-1 ml-1" /></div>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    $250.00
                                                                    <br />
                                                                    <span className="badge badge-ghost badge-sm">$0.00</span>
                                                                </td>
                                                            </tr>
                                                            <tr>

                                                                <td>
                                                                    <div className="flex items-center gap-3">

                                                                        <div>
                                                                            <div className="font-bold">Total due</div>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    $250.00

                                                                </td>
                                                            </tr>



                                                        </tbody>



                                                    </table>
                                                </div>
                                            </div>
                                            <div className="lg:w-1/2">
                                                <Elements stripe={stripePromise}>
                                                    <CheckOutForm information={information}></CheckOutForm>
                                                </Elements>
                                            </div>
                                        </div>


                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition>
            </>

        </div>
    );
};

export default Payment;
