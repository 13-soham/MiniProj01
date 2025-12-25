import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ProductContext } from '../src/utils/ProductContext';
import axios from '../src/utils/Axios';
import Loading from './Loading';
import toast from 'react-hot-toast';
import { ColourContext } from '../src/utils/ThemeContext';

const Details = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useContext(ProductContext);
    const { id } = useParams();
    const [SingleProduct, setSingleProduct] = useState(null);

    // theme
    const { Theme } = useContext(ColourContext);

    const getSingleProduct = async () => {
        try {
            let { data } = await axios.get(`/products/${id}`);
            // console.log(data);
            setSingleProduct(data);
        }
        catch (err) {
            console.warn(err.message);
        }
    }

    useEffect(() => {
        if (!products || products.length == 0) return;
        const localStorageProducts = products.find((p) => {
            return p.id == Number(id) && p.id > 1000000
        });

        if (localStorageProducts) {
            setSingleProduct(localStorageProducts);  // localStorage Product call
        }
        else {
            getSingleProduct();  // API call
        }
    }, [products, id]);

    // console.log(SingleProduct);

    // delete product
    const deleteHandler = () => {
        if (!SingleProduct) return;

        if (SingleProduct.id <= 1000000) {
            toast.error("API Products Cannot be deleted");
            return;
        }

        if (!window.confirm("Are you sure you want to delete this product?")) return;

        const storedProducts = JSON.parse(localStorage.getItem("products") || "[]");

        let updateProduct = storedProducts.filter((p) => {
            return (p.id !== SingleProduct.id)
        });

        localStorage.setItem("products", JSON.stringify(updateProduct));

        toast.success("Product deleted");
        setProducts(updateProduct);
        navigate("/");
    }


    // temporary freezing edit feature
    const editHandler = () => {
        toast.error("This Feature not available yet");
    }

    return SingleProduct ? (
        <div
            className={`h-full w-full px-30 py-15 flex items-center gap-15
                ${Theme === "light" ? "bg-red-50 text-black" : "bg-gray-900 text-white"}
                transition-colors duration-300`}
        >

            <h1
                className={`absolute top-63 left-90 z-50 text-xl mix-blend-difference
                drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] font-[work sans]
                ${Theme === "light" ? "text-black" : "text-white"}`}
            >
                {SingleProduct.category}
            </h1>

            <div className='h-130 w-150 overflow-hidden'>
                <img
                    className='h-full w-full object-contain px-7 py-4 hover:scale-110 transition-all duration-200 cursor-zoom-in'
                    src={`${SingleProduct.image}`}
                    alt="product"
                />
            </div>

            <div className='px-20 py-10 h-full w-full flex flex-col justify-between gap-3 mb-15'>
                <h1 className='text-3xl font-bold font-[monument]'>
                    {SingleProduct.title}
                </h1>

                <p
                    className={`text-md font-light opacity-90
                        ${Theme === "light" ? "text-gray-600" : "text-gray-300"}`}
                >
                    {SingleProduct.description}
                </p>

                <div
                    className={`flex gap-1 border px-3 py-1 w-1/4
                        ${Theme === "light" ? "border-gray-700" : "border-gray-500"}`}
                >
                    <h3>{SingleProduct.rating.rate}</h3>
                    <i className="ri-star-s-fill"></i>
                    <h1>|</h1>
                    <h3>{SingleProduct.rating.count} Ratings</h3>
                </div>

                <hr className='py-3 mt-2' />

                <h3 className='text-3xl font-extrabold'>
                    Rs : {(SingleProduct.price * 90).toFixed(2)}
                </h3>

                <p className='text-green-600'>inclusive of all taxes</p>

                <div className='flex items-center gap-3'>
                    <Link>
                        <button
                            onClick={editHandler}
                            className='buttonProp bg-blue-300 cursor-pointer transition-transform active:scale-95 duration-150'
                        >
                            Edit
                        </button>
                    </Link>

                    <button
                        onClick={deleteHandler}
                        className='buttonProp bg-red-300 cursor-pointer transition-transform active:scale-95 duration-150'
                    >
                        Delete
                    </button>
                </div>

            </div>
        </div>
    ) : (<Loading />)
}

export default Details;
