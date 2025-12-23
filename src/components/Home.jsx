import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { ProductContext } from '../utils/ProductContext';
import Loading from '../../pages/Loading';

const Home = () => {
  // const para = useParams();


  const [products] = useContext(ProductContext);
  // console.log(products);

  // useLocation() for categories
  const { search } = useLocation();
  // console.log(location.search); // cuz I need location.search
  const params = new URLSearchParams(search);
  // URLSearchParams {size: 1}

  // console.log(params);

  const category = params.get("category");  // example → men's clothing
  // console.log(category);

  const filterProducts = category ? products.filter((p) => {
    return p.category === category;
  }) : products;




  return filterProducts ? (
    <div className='h-full w-5/6 px-15 py-7 flex flex-wrap gap-7'>

      <h1 className="w-full text-3xl font-semibold mb-5 text-indigo-300">
        {category ? category : "All Products"}
      </h1>

      {filterProducts.map((elem) => {
        return (
          <Link to={`/details/${elem.id}`} key={elem.id} className='relative h-90 w-65 px-5 py-5 border shadow-xl border-black overflow-hidden flex flex-col items-center gap-3'>
            <img src={`${elem.image}`}
              className='h-[70%] w-full bg-cover hover:scale-110 transition-all duration-150'
              alt="product" />
            <div className='w-full flex flex-col px-3 py-1 bg-zinc-100'>
              <h1 className='text-xs fxont-bold font-[montserrat]'>{elem.title}</h1>
              <h2>RS : {((elem.price * 90).toFixed(2))}</h2>
            </div>
          </Link>
        );
      })}


    </div>
  ) : (<Loading />)
}

export default Home