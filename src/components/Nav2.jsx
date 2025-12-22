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

  let iconArr = [<i class="ri-men-line"></i>,<i class="ri-jewelry-line"></i>,<i class="ri-tv-line"></i>,<i class="ri-women-line"></i>, ];

  return (
    <div className='h-full w-1/6 bg-zinc-200 px-7 py-3 flex flex-col sticky top-0'>
      <a className='w-4/5 px-5 py-2 text-center font-light text-blue-800 border-2 border-blue-600 rounded-md' href="/create">Add Product</a>
      <hr className='w-[90%] my-3' />
      <div>
        <h2 className='text-3xl font-[poppins] font-bold my-1'>Catagory</h2>
        <div className='flex flex-col gap-1 bg-amber-100 my-2'>
          {filterProd.map((elem, id)=>{
            return(
              <Link key={id} to={`/?category=${elem}`} className='px-3 py-1.5 flex gap-2 text-md cursor-pointer'>{iconArr[id]}{elem}</Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Nav2;