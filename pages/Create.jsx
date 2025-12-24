import React, { useContext, useState } from 'react'
import { ProductContext } from '../src/utils/ProductContext';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { LogContext } from '../src/Auth/AuthContext';

const Create = () => {
    const [Product, setProduct] = useContext(ProductContext);
    const {User} = useContext(LogContext);
    const navigate = useNavigate();

    const [Form, setForm] = useState({
        title: "",
        price: "",
        description: "",
        image: "",
        category: ""
    });

    function HandleEvent(e) {
        setForm({ ...Form, [e.target.name]: e.target.value });
    }

    function SubmitHandler(e) {
        e.preventDefault();
        // console.log(Form);

        // redirect to login, if user is not log in
        if(!User){
            toast.error("You need to log in first");
            navigate("/login");
            return;
        }

        if(Form.image.trim() === "" || Form.title.trim() === ""){
            alert("Pls fill the Title or Image URL first");
            return;
        }

        if(!(Form.category === "men's clothing") && !(Form.category === "women's clothing") && !(Form.category === "jewelery") && !(Form.category === "electronics")){
            alert("Category does not exist");
            return;
        }

        const SendProduct = {
            id: Date.now(), // unique ID
            ...Form,
            price: Number(Form.price),
            rating: {
                rate: 0,
                count: 0
            }
        };

        setProduct((previous) => {
            return [...previous, SendProduct];
        });

        toast.success("Product Added");
        navigate("/");
    }

    return (
        <div className='w-3/4 px-37 py-17'>
            <h1 className='text-center text-4xl font-[montserrat] font-bold mb-3'>Enter Your Items</h1>
            <form onSubmit={SubmitHandler} className='h-90 w-full bg-[#EBF4DD] flex flex-col gap-2 px-7 py-5'>
                <input name="title" placeholder='Title' onChange={HandleEvent} className='px-3 py-3 border-2 border-black rounded-md text-xl outline-none' />
                <div className='flex items-center gap-3'>
                    <input name="category" placeholder='category' onChange={HandleEvent} className='px-3 py-2 border-2 border-black rounded-md outline-none' />
                    <input name="price" placeholder='price' onChange={HandleEvent} className='px-3 py-2 border-2 border-black rounded-md outline-none' />
                    <input name="image" placeholder='img-url' onChange={HandleEvent} className='px-3 py-2 border-2 border-black rounded-md w-full outline-none' />
                </div>
                <textarea name="description" placeholder='description' onChange={HandleEvent} className='px-3 py-2 border-2 border-black rounded-md outline-none h-full resize-none'></textarea>

                <button className='w-full text-center py-3 bg-[#3B4953] text-white cursor-pointer text-xl font-bold rounded-md active:scale-97 transition-all duration-100'>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Create;