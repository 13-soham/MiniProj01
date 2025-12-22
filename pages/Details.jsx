import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import { ProductContext } from '../src/utils/ProductContext';
import axios from '../src/utils/Axios';
import Loading from './Loading';

const Details = () => {
    // const [products] = useContext(ProductContext);
    const { id } = useParams();
    const [SingleProduct, setSingleProduct] = useState(null);

    const getSingleProduct = async () => {
        try {
            let {data} = await axios.get(`/products/${id}`);
            // console.log(data);
            setSingleProduct(data);
        }
        catch (err) {
            console.warn(err.message);
        }
    }

    useEffect(()=>{
        getSingleProduct();
    },[id]);

    // console.log(SingleProduct);

    return SingleProduct ? (
        <div className='h-full w-full px-30 py-15 flex items-center gap-15'>

            <h1 className='absolute top-63 left-90 z-50 text-xl text-white mix-blend-difference drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] font-[work sans]'>{SingleProduct.category}</h1>
            <div className='h-130 w-150 overflow-hidden'>
                <img className='h-full w-full object-contain px-7 py-4 hover:scale-110 transition-all duration-200 cursor-zoom-in' src={`${SingleProduct.image}`} alt="product" />
            </div>

            <div className='px-20 py-10 h-full w-full flex flex-col justify-between gap-3 mb-15'>
                <h1 className='text-3xl font-bold font-[monument]'>{SingleProduct.title}</h1>
                <p className='text-md font-light text-gray-600 opacity-90'>{SingleProduct.description}</p>

                <div className='flex gap-1 border border-gray-700 px-3 py-1 w-1/4'>
                    <h3>{SingleProduct.rating.rate}</h3>
                    <i className="ri-star-s-fill"></i>
                    <h1>|</h1>
                    <h3>{SingleProduct.rating.count} Ratings</h3>
                </div>

                <hr className='py-3 mt-2' />
                <h3 className='text-3xl font-extrabold'>Rs : {(SingleProduct.price*90).toFixed(2)}</h3>
                <p className='text-green-600'>inclusive of all taxes</p>
                <div className='flex items-center gap-3'>
                    <Link><button className='buttonProp bg-blue-300 cursor-pointer transition-transform active:scale-95 duration-150'>Edit</button></Link>
                    <Link><button className='buttonProp bg-red-300 cursor-pointer transition-transform active:scale-95 duration-150'>Delete</button></Link>
                </div>

            </div>
        </div>
    ) : (<Loading />)
}

export default Details