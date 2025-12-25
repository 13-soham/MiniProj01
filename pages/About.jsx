import React, { useContext } from 'react';
import { ColourContext } from '../src/utils/ThemeContext';

const About = () => {
  const { Theme } = useContext(ColourContext);

  return (
    <div className={`h-screen w-full flex items-center justify-center text-center
        ${Theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"} transition-colors duration-300`}
    >
      <div className='mb-20 h-3/4 w-2/3 flex flex-col gap-4 px-13 py-5'>
        <h1 className={`text-7xl font-[work sans] font-extrabold
            ${Theme === "light" ? "text-violet-600" : "text-violet-400"}`}
        >
          About us
        </h1>
        <p className={`text-xl font-light font-[poppins] leading-7 tracking-wide
            ${Theme === "light" ? "text-gray-900" : "text-gray-300"}`}
        >
          ShopEase is a dynamic React-based e-commerce app that allows users to browse products with ease. Features include user login, category and search filters, adding new products, and deleting user-added products. The interface supports a smooth light/dark mode toggle for comfortable browsing. Products display detailed information, and users can navigate seamlessly through the platform. ShopEase combines simplicity and functionality to create an intuitive shopping experience.
        </p>
      </div>
    </div>
  );
}

export default About;