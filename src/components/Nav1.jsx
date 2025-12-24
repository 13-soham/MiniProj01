import React, { useContext } from 'react'
import { LogContext } from '../Auth/AuthContext';
import { useNavigate } from 'react-router-dom';
import { SearchQueryContext } from '../utils/SearchContext';
import { ColourContext } from '../utils/ThemeContext';

const Nav1 = () => {
  const { Theme, toggleTheme } = useContext(ColourContext);
  const { User, logout } = useContext(LogContext);
  const { Query, setQuery } = useContext(SearchQueryContext);
  const navigate = useNavigate();
  return (
    <div className={`h-25 w-full px-10 flex justify-between items-center sticky top-0 z-30
                ${Theme === "light" ? "bg-red-100 text-black" : "bg-gray-900 text-white"} transition-colors duration-300`}>

      <h2>Logo</h2>

      <button onClick={toggleTheme} className='px-4 py-2 border rounded-lg cursor-pointer'>
        {Theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>

      <input
        value={Query}
        type="text"
        placeholder='search products...'
        onChange={(e) => setQuery(e.target.value)}
        className={`w-130 px-3 py-2 outline-indigo-700 text-md rounded-md
                ${Theme === "light" ? "bg-white text-black" : "bg-gray-700 text-white"} transition-colors duration-300`}
      />

      <h2>About us</h2>

      {User ? (
        <button onClick={logout} className='cursor-pointer bg-red-400 border-2 border-black px-3 py-2 rounded-xl active:scale-95 transition-all duration-150'>Logout</button>
      ) : (
        <button onClick={() => { navigate("/login") }} className='cursor-pointer bg-emerald-300 border-2 border-black px-3 py-2 rounded-xl active:scale-95 transition-all duration-150'>Login</button>
      )}

    </div>

  )
}

export default Nav1;