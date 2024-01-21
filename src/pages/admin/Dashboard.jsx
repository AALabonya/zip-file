import { signOut } from "firebase/auth";
import { NavLink, Outlet } from "react-router-dom";
import Swal from "sweetalert2";
import { auth } from "../../firebase.config";
import { useState } from "react";

const Dashboard = () => {
    const [isRed, setIsRed] = useState(true);

    function handleLogout() {
        Swal.fire({
            title: "Are you sure?",
            // text: "!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                signOut(auth).then(() => {
                    // Sign-out successful.

                    Swal.fire({
                        title: "Logout",
                        text: "Logout Successful!.",
                        icon: "success"
                    });

                }).catch((error) => {
                    // An error happened.
                });

            }
        });
    }

    return (
        <div className="min-h-screen flex">
            <div className="hidden w-[16%] bg-[#241c2b] p-5 md:flex flex-col gap-3">
                <NavLink to={"add-car"} className={({ isActive }) => isActive ? 'text-red-700' : 'text-white'} onClick={() => setIsRed(false)}> <p className="w-full bg-black py-2 px-4 rounded text-center hover:bg-[#141A1C] font-semibold">Add Car </p></NavLink>

                <NavLink to={'add-portfolio'} className={({ isActive }) => isActive ? 'text-red-700' : 'text-white'} onClick={() => setIsRed(false)}> <p className="w-full bg-black py-2 px-4 rounded text-center hover:bg-[#141A1C] font-semibold">Add Portfolio </p></NavLink>

                <hr />
                <NavLink to={'/admin/dashboard'} className={isRed ? 'text-red-700' : 'text-white'} onClick={() => setIsRed(true)}> <p className="w-full bg-black py-2 px-4 rounded text-center hover:bg-[#141A1C] font-semibold">All Car </p></NavLink>

                <NavLink to={'portfolios'} className={({ isActive }) => isActive ? 'text-red-700' : 'text-white'} onClick={() => setIsRed(false)}> <p className="w-full bg-black py-2 px-4 rounded text-center hover:bg-[#141A1C] font-semibold">All Portfolio </p></NavLink>

                <hr className="!mx-10" />
                <p className="w-full bg-black py-2 px-4 rounded text-center text-white cursor-pointer hover:bg-[#141A1C] font-semibold" onClick={handleLogout}>Logout </p>

            </div>
            <div className="w-full md:w-[84%] bg-black">

                {/* Mobile Menu */}
                <div className="md:hidden flex justify-center bg-[#141A1C] gap-3 py-3 px-2">

                    <NavLink to={'add-car'} className={({ isActive }) => isActive ? 'text-red-700' : 'text-white'} onClick={() => setIsRed(false)}> <p className="w-full bg-black py-2 px-4 rounded text-center font-semibold">Add Car </p></NavLink>

                    <NavLink to={'add-portfolio'} className={({ isActive }) => isActive ? 'text-red-700' : 'text-white'} onClick={() => setIsRed(false)}> <p className="w-full bg-black py-2 px-4 rounded text-center font-semibold">Add Portfolio </p></NavLink>

                    <NavLink to={'/admin/dashboard/'} className={isRed ? 'text-red-700' : 'text-white'} onClick={() => setIsRed(true)}> <p className="w-full bg-black py-2 px-4 rounded text-center font-semibold">All Car </p></NavLink>

                    <NavLink to={'portfolios'} className={({ isActive }) => isActive ? 'text-red-700' : 'text-white'} onClick={() => setIsRed(false)}> <p className="w-full bg-black py-2 px-4 rounded text-center font-semibold">All Portfolio </p></NavLink>
                </div>

                {/* Main Body */}
                <div className="p-5 md:p-10"><Outlet /></div>
            </div>
        </div>
    );
};

export default Dashboard;