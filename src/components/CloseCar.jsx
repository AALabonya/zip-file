import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";

const CloseCar = () => {

    const { data = [], } = useQuery({
        queryKey: ['todo'],
        queryFn: async () => {
            const response = await axios.get(`http://localhost:5000/deal-close/v1`);
            return response.data
        }
    });

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {data.slice(0, 6).map(car => <Link to={`/portfolio/${car._id}`} key={car._id}><div className="">
                <figure className="">
                    <img src={car?.photo} alt="" className="w-96 h-60 rounded-md" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-white">{car?.title}</h2>
                </div>
            </div></Link>)}
        </div>
    );
};

export default CloseCar;