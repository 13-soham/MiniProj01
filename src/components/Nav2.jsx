import React from 'react'
import 'remixicon/fonts/remixicon.css';

const Nav2 = () => {
  return (
    <div className='h-full w-1/6 bg-zinc-200 px-7 py-3 flex flex-col sticky top-0'>
        <a className='w-4/5 px-5 py-2 text-center font-light text-blue-800 border-2 border-blue-600 rounded-md' href="/create">Add Product</a>
        <hr className='w-[90%] my-3' />
        <div>
            <h2 className='text-3xl font-[poppins] font-bold my-1'>Catagory</h2>
            <ul className='flex flex-col gap-1 bg-amber-100 my-2'>
                <h4 className='px-3 py-1.5 flex gap-2 text-md cursor-pointer'>Men<span><i className="ri-men-line"></i></span></h4>
                <h4 className='px-3 py-1.5 flex gap-2 text-md cursor-pointer'>Women<span><i className="ri-women-line"></i></span></h4>
                <h4 className='px-3 py-1.5 flex gap-2 text-md cursor-pointer'>Kids<span><i className="ri-bluesky-line"></i></span></h4>
                <h4 className='px-3 py-1.5 flex gap-2 text-md cursor-pointer'>Genz<span><i className="ri-zzz-line"></i></span></h4>
            </ul>
        </div>
    </div>
  )
}

export default Nav2