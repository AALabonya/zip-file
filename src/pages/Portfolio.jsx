import { Link, useLoaderData } from "react-router-dom";
import NoData from "../components/NoData";
import { IoIosArrowForward } from "react-icons/io";
import Wp from "../components/Wp";

const Portfolio = () => {
    const cars = useLoaderData()

    return (
        <div className='min-h-screen bg-black'>
            <Wp />

            <div className=" bg-[url('https://i.ibb.co/rmz0M52/cars.png')] h-96 bg-fixed bg-cover">
                <div className="bg-black opacity-70 w-full h-full flex justify-center text-center items-center flex-col gap-4 leading-8">
                    <h1 className="text-3xl font-semibold text-white uppercase px-3 md:px-0 line-clamp-5 ">Driving Dreams, Connecting Continents: Your Global Journey <br /> Starts with RS Motors International</h1>
                    {/* <form onSubmit={handleSearchCar}>
                        <input type="text" name="car" id="" placeholder="Car Name..." className="py-2 px-4 rounded-l active:!border-0" />
                        <input type="submit" value="Search" className="py-2 px-2 rounded-r text-white cursor-pointer hover:bg-[#947d5d] bg-[#BFA37C]" />
                    </form> */}
                </div>

            </div>
            {/* content */}
            <div className="w-full p-10">
                {!cars.length ? <div className=" flex min-h-screen justify-center">
                    <NoData />
                </div> : <div className="  min-h-screen p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-black">

                    {cars.map(car => <div key={car._id} className=" bg-[#100f0f] h-80 flex flex-col">
                        <img src={car.photo} alt="" className='w-full h-48' />
                        <div className="my-3 px-3">
                            <h3 className='text-xl text-white  font-semibold'>{car?.title}</h3>
                            <h4 className='text-white opacity-70'>Year - {car.year}</h4>
                            <h4 className='text-white opacity-70'>{car?.regionalSpec}</h4>
                            <Link to={`/portfolio/${car._id}`}><h4 className='text-slate-300 font-semibold flex items-center mt-2 cursor-pointer'> <IoIosArrowForward className='font-bold' />View Details</h4></Link>
                        </div>
                    </div>)}
                </div>}
            </div>
        </div>
    );
};

export default Portfolio;