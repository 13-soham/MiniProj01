import React, { useContext } from 'react'
import { LogContext } from '../Auth/AuthContext';
import { useNavigate } from 'react-router-dom';

const Nav1 = () => {
  const {User, logout} = useContext(LogContext);
  const navigate = useNavigate();
  return (
    <div className='h-25 w-full px-10 bg-red-100 flex justify-between items-center sticky top-0 z-30'>
        <h2>Logo</h2>
        <h2>Light Mode</h2>
        <h2>Search Bar</h2>
        <h2>About us</h2>
        {User ? (<button onClick={logout} className='cursor-pointer bg-red-400 border-2 border-black px-3 py-2 rounded-xl active:scale-95 transition-all duration-150'>Logout</button>):(<button onClick={()=>{navigate("/login")}} className='cursor-pointer bg-emerald-300 border-2 border-black px-3 py-2 rounded-xl active:scale-95 transition-all duration-150'>Login</button>)}
    </div>
  )
}

export default Nav1;