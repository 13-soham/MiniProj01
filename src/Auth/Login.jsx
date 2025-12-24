import React, { useContext, useState } from 'react'
import { LogContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const {login} = useContext(LogContext);
    const navigate = useNavigate();
    const [Logg, setLogg] = useState({
        email : "",
        password : ""
    })
    function changeHandler(e){
        setLogg({...Logg, [e.target.name]: e.target.value});
    }
    function SubmitHandler(e){
        e.preventDefault();
        // console.log("Form Submited");
        // console.log(Logg);

        login(Logg.email);


        setLogg({
            email : "",
            password : ""
        });
    }
    return (
        <div className='fixed inset-0 z-70 flex items-center justify-center'>
            <div className='relative w-80 px-6 py-7 border rounded-lg bg-gray-300'>
                <i className="ri-close-line text-2xl pl-60 cursor-pointer"></i>
                <h1 className='text-center text-2xl'>Login</h1>

                <form onSubmit={SubmitHandler} className='flex flex-col gap-5'>
                    <input value={Logg.email} type="email" name='email' placeholder='email' className='outline-none border-b border-black p-2' onChange={changeHandler} />
                    <input value={Logg.password} type="password" name='password' placeholder='password' className='outline-none border-b border-black p-2 ' onChange={changeHandler} />
                    <button onClick={()=>{navigate("/")}} className='w-full py-3 rounded-md text-xl text-white bg-black cursor-pointer active:scale-95 transition-transform duration-150'>Submit</button>

                </form>
            </div>
        </div>
    )
}

export default Login;