import React, { useContext, useState } from 'react'
import { LogContext } from './AuthContext';
import { ColourContext } from '../utils/ThemeContext';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Login = () => {
    const {login} = useContext(LogContext);
    const { Theme } = useContext(ColourContext);
    const navigate = useNavigate();
    const [Logg, setLogg] = useState({
        email : "",
        password : ""
    });

    function changeHandler(e){
        setLogg({...Logg, [e.target.name]: e.target.value});
    }

    function SubmitHandler(e){
        e.preventDefault();

        if(Logg.email.trim() === "" || Logg.password == ""){
            toast.error("Give Proper Email or Password");
            return;
        }

        login(Logg.email);
        setLogg({ email: "", password: "" });
        toast.success("Login successful");
        navigate("/");
    }

    return (
        <div className={`flex items-center justify-center min-h-screen ${Theme === "light" ? "bg-gray-200 border-black text-black" : "bg-indigo-300 border-gray-400 text-white"} `}>
            <div className={`relative w-80 px-6 py-7 border rounded-lg transition-colors duration-300
                ${Theme === "light" ? "bg-gray-200 border-black text-black" : "bg-gray-900 border-gray-400 text-white"}`}
            >
                {/* <i className={`ri-close-line text-2xl pl-60 cursor-pointer
                    ${Theme === "light" ? "text-black" : "text-white"}`}></i> */}

                <h1 className='text-center text-2xl mb-3'>Login</h1>

                <form onSubmit={SubmitHandler} className='flex flex-col gap-5'>
                    <input
                        value={Logg.email}
                        type="email"
                        name='email'
                        placeholder='email'
                        onChange={changeHandler}
                        className={`outline-none p-2 border-b-2 transition-colors duration-300
                            ${Theme === "light" ? "border-black bg-white text-black" : "border-gray-400 bg-gray-800 text-white"}`}
                    />
                    <input
                        value={Logg.password}
                        type="password"
                        name='password'
                        placeholder='password'
                        onChange={changeHandler}
                        className={`outline-none p-2 border-b-2 transition-colors duration-300
                            ${Theme === "light" ? "border-black bg-white text-black" : "border-gray-400 bg-gray-800 text-white"}`}
                    />
                    <button
                        type="submit"
                        className={`w-full py-3 rounded-md text-xl cursor-pointer active:scale-95 transition-all duration-150
                            ${Theme === "light" ? "bg-black text-white border-2 border-black" : "bg-gray-700 text-white border-2 border-gray-400"}`}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login;