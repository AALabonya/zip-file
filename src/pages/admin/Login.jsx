import { useContext, useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { AuthContext } from "../../AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('')
    const [showPasswordFiled, setShowPasswordFiled] = useState(false);
    const [err, setErr] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const [showPass, setShowPass] = useState(false);
    const { login, user } = useContext(AuthContext);
    const navigate = useNavigate();

    console.log(user);

    function handleNext() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailRegex.test(email)) {
            setShowPasswordFiled(true);
            setEmailErr('')
        } else {
            setEmailErr('Please enter a valid email address or username.')
        }

    }

    function handleLogin(event) {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        login(email, password).then(() => {
            // console.log(user);
            navigate('/admin/dashboard')

        }).catch(err => {
            setErr(err.code)
        })

    }

    return (
        <div className="flex justify-center min-h-screen px-2 md:px-0 bg-black text-white">
            <div className="w-[600px] mt-20">
                <h1 className="text-3xl font-bold">Welcome to RS Motors Admin Panel</h1>
                {err && <div className="w-full border border-red-600 p-6 rounded mt-7 text-red-800">
                    <p>{err}</p>
                </div>}
                <div className="mt-10">
                    <p className="">Email Address or Username*</p>
                    <form className="mt-2" onSubmit={handleLogin}>
                        <input type="email" disabled={showPasswordFiled ? true : false} required name="email" className={showPasswordFiled ? 'w-full px-3 text-black border py-2 rounded cursor-not-allowed' : 'w-full px-3 text-black border py-2 rounded'} onChange={(event) => setEmail(event.target.value)} />
                        <p className="mt-3 text-sm text-red-400">{emailErr}</p>
                        {showPasswordFiled && <div className="relative">
                            <p className="mt-5">Password*</p>

                            <input type={showPass ? 'text' : 'password'} required name="password" className="w-full text-black px-3 border py-2 rounded " />

                            {!showPass && <IoEye className=" cursor-pointer absolute text-black right-3 top-[36px]" onClick={() => setShowPass(!showPass)} />}

                            {showPass && <IoEyeOff className=" cursor-pointer absolute text-black right-3 top-[36px]" onClick={() => setShowPass(!showPass)} />}
                        </div>}
                        <div className="mt-6 md:hidden gap-7 items-center">
                            <button type={showPasswordFiled ? 'submit' : 'button'} className="bg-[#047BC1] text-white px-16 w-full py-2 rounded block md:flex mb-3" onClick={handleNext}>{showPasswordFiled ? 'Log In' : 'Next'}</button>
                            <a href="" className="text-[#047BC1] underline font-bold">Forgot Your Password?</a>
                        </div>
                        <div className="mt-6 hidden md:flex gap-7 items-center">
                            <button type={showPasswordFiled ? 'submit' : 'button'} className="bg-[#047BC1] text-white px-16 py-2 rounded block md:flex" onClick={handleNext}>{showPasswordFiled ? 'Log In' : 'Next'}</button>
                            {/* <span className="text-[#047BC1] underline font-bold">Forgot Your Password?</span> */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;