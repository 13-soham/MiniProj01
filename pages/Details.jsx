import { Link, useParams } from 'react-router-dom'

const Details = () => {
    const params = useParams();
  return (
    <div className='h-full w-full px-30 py-15 flex items-center gap-10'>

        <h1 className='absolute top-63 left-90 z-50 text-xl text-black font-[work sans]'>men's clothing</h1>
        <div className='h-[75%] w-[40%]  overflow-hidden'>
            <img className='h-full w-full object-cover px-7 py-4 hover:scale-110 transition-all duration-200 cursor-zoom-in' src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png" alt="product" />
        </div>

        <div className='flex flex-col justify-between gap-3 mb-15'>
            <h1 className='text-3xl font-bold font-[monument]'>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h1>
            <p className='text-xl font-light text-gray-600 opacity-90'>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>

            <div className='flex gap-1 border border-gray-700 px-3 py-1 w-1/5'>
                <h3>4.3</h3>
                <i class="ri-star-s-fill"></i>
                <h1>|</h1>
                <h3>445 Ratings</h3>
            </div>

            <hr className='py-3 mt-2' />
            <h3 className='text-3xl font-extrabold'>Rs : 109.95</h3>
            <p className='text-green-600'>inclusive of all taxes</p>
            <div className='flex items-center gap-3'>
                <Link><button className='buttonProp bg-blue-300 cursor-pointer transition-transform active:scale-95 duration-150'>Edit</button></Link>
                <Link><button className='buttonProp bg-red-300 cursor-pointer transition-transform active:scale-95 duration-150'>Delete</button></Link>
            </div>

        </div>
    </div>
  )
}

export default Details