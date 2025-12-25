import { useContext } from 'react';
import { Link } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css';
import { ProductContext } from '../utils/ProductContext';
import { ColourContext } from '../utils/ThemeContext';

const Nav2 = () => {
  const [products] = useContext(ProductContext);
  const { Theme } = useContext(ColourContext);

  // Get unique categories
  const filterProd = products ? [...new Set(
    products.map((elem) => {
      return elem.category;
    })
  )] : [];

  const iconMap = {
    "men's clothing": <i className="ri-men-line"></i>,
    "jewelery": <i className="ri-jewelry-line"></i>,
    "electronics": <i className="ri-tv-line"></i>,
    "women's clothing": <i className="ri-women-line"></i>
  };

  return (
    <div className={`w-1/6 px-7 py-3 flex flex-col sticky top-0
        ${Theme === "light" ? "bg-red-50 text-black" : "bg-gray-900 text-white"} transition-colors duration-300`}
    >
      <Link
        to="/create"
        className={`w-4/5 px-2 py-3 flex items-center justify-center gap-2 text-center font-medium rounded-md border-2 transition-all duration-200
        ${Theme === "light"
            ? "text-blue-800 border-blue-600 bg-blue-50 hover:bg-blue-100"
            : "text-cyan-300 border-cyan-400 bg-gray-800 hover:bg-gray-700"
          } shadow-sm hover:shadow-md`}
      >
        <i className="ri-add-line text-lg"></i>
        Add Product
      </Link>

      <hr className={`w-[90%] my-3 border ${Theme === "light" ? "border-gray-300" : "border-gray-600"}`} />

      <div>
        <h2 className={`text-3xl font-[poppins] font-bold my-1 ${Theme === "light" ? "text-black" : "text-white"}`}>Category</h2>

        <div className={`flex flex-col gap-1 my-2 ${Theme === "light" ? "bg-amber-100" : "bg-gray-800"}`}>
          <Link to="/" className={`px-3 py-1.5 flex gap-2 text-md ${Theme === "light" ? "text-red-400" : "text-red-300"} cursor-pointer`}>
            <i className="ri-store-2-line"></i>All Products
          </Link>
        </div>

        <div className={`flex flex-col gap-1 my-2 ${Theme === "light" ? "bg-amber-100" : "bg-gray-800"}`}>
          {filterProd.map((elem, id) => {
            return (
              <Link
                key={id}
                to={`/?category=${elem}`}
                className={`px-3 py-1.5 flex gap-2 text-md cursor-pointer 
                  ${Theme === "light" ? "text-black" : "text-white"}`}
              >
                {iconMap[elem]}{elem}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Nav2;
