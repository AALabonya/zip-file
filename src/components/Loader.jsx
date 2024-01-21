
import { RotatingTriangles } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div className='flex justify-center w-full mt-36 h-screen'>
            <RotatingTriangles
                visible={true}
                height="150"
                width="150"
                color="#4fa94d"
                ariaLabel="rotating-triangles-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    );
};

export default Loader;