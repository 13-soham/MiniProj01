import { useContext } from 'react';
import { Link } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css';
import { ProductContext } from '../utils/ProductContext';

const Nav2 = () => {
  const [products] = useContext(ProductContext);
  // console.log(products);

  const filterProd = products ? [...new Set(
    products.map((elem) => {
      return elem.category;
    })
  )] : [];

  const iconMap = {
    "men's clothing" : <i className="ri-men-line"></i>,
    "jewelery" : <i className="ri-jewelry-line"></i>,
    "electronics": <i className="ri-tv-line"></i>,
    "women's clothing": <i className="ri-women-line"></i>
  };

  return (
    <div className='h-full w-1/6 bg-zinc-200 px-7 py-3 flex flex-col sticky top-0'>
      <Link to="/create" className='w-4/5 px-5 py-2 text-center font-light text-blue-800 border-2 border-blue-600 rounded-md'>Add Product</Link>
      <hr className='w-[90%] my-3' />
      <div>
        <h2 className='text-3xl font-[poppins] font-bold my-1'>Catagory</h2>
        <div className='flex flex-col gap-1 bg-amber-100 my-2'>
          <Link to="/" className='px-3 py-1.5 flex gap-2 text-md text-red-400 cursor-pointer'><i className="ri-store-2-line"></i>All Products</Link>
        </div>
        <div className='flex flex-col gap-1 bg-amber-100 my-2'>
          {filterProd.map((elem, id)=>{
            return(
              <Link key={id} to={`/?category=${elem}`} className='px-3 py-1.5 flex gap-2 text-md cursor-pointer'>{iconMap[elem]}{elem}</Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Nav2;