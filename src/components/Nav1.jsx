import React, { useContext } from 'react'
import { LogContext } from '../Auth/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { SearchQueryContext } from '../utils/SearchContext';
import { ColourContext } from '../utils/ThemeContext';
import Logo from '../../pages/Logo';

const Nav1 = () => {
  const { Theme, toggleTheme } = useContext(ColourContext);
  const { User, logout } = useContext(LogContext);
  const { Query, setQuery } = useContext(SearchQueryContext);
  const navigate = useNavigate();
  return (
    <div className={`h-25 w-full px-10 flex justify-between items-center sticky top-0 z-30 border-b-2 border-white
                ${Theme === "light" ? "bg-red-100 text-black" : "bg-gray-900 text-white"} transition-colors duration-300`}>

      <div className='flex items-center justify-between px-5 gap-5'>
        <Link to="/"><Logo /></Link>

        <button onClick={toggleTheme} className='h-10 px-3 py-1 border rounded-lg cursor-pointer'>
          {Theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>

      <input
        value={Query}
        type="text"
        placeholder='search products...'
        onChange={(e) => setQuery(e.target.value)}
        className={`w-160 px-3 py-2 outline-indigo-700 text-md rounded-md
                ${Theme === "light" ? "bg-white text-black" : "bg-gray-700 text-white"} transition-colors duration-300`}
      />

      <div className='flex items-center justify-between px-8 gap-13'>
        <Link to="/about"><h1>About us</h1></Link>

        {User ? (
          <button onClick={logout} className='cursor-pointer bg-red-400 border-2 border-black px-3 py-2 rounded-xl active:scale-95 transition-all duration-150'>Logout</button>
        ) : (
          <button onClick={() => { navigate("/login") }} className='cursor-pointer bg-emerald-300 border-2 border-black px-3 py-2 rounded-xl active:scale-95 transition-all duration-150'>Login</button>
        )}
      </div>

    </div>

  )
}

export default Nav1;