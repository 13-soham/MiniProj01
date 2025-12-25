import React, { useContext, useState } from 'react';
import { ProductContext } from '../src/utils/ProductContext';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { LogContext } from '../src/Auth/AuthContext';
import { ColourContext } from '../src/utils/ThemeContext'; // <-- theme import

const Create = () => {
    // const params = useParams();
    // console.log(params.id);

    const [Product, setProduct] = useContext(ProductContext);
    const { User } = useContext(LogContext);
    const { Theme } = useContext(ColourContext); // <-- theme usage
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
        if (!User) {
            toast.error("You need to log in first");
            navigate("/login");
            return;
        }

        if (Form.image.trim() === "" || Form.title.trim() === "") {
            alert("Pls fill the Title or Image URL first");
            return;
        }

        if (!(Form.category === "men's clothing") && !(Form.category === "women's clothing") && !(Form.category === "jewelery") && !(Form.category === "electronics")) {
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
        <div className={`h-screen w-full px-37 py-17
            ${Theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"} transition-colors duration-300`}
        >
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-center text-4xl font-[montserrat] font-bold mb-3'>Enter Your Items</h1>
                <form onSubmit={SubmitHandler} className={`h-90 w-full flex flex-col gap-2 px-7 py-5
    ${Theme === "light" ? "bg-[#EBF4DD]" : "bg-gray-700"} transition-colors duration-300`}
                >
                    <input
                        name="title"
                        placeholder='Title'
                        onChange={HandleEvent}
                        className={`px-3 py-3 rounded-md text-xl outline-none border-2
        ${Theme === "light" ? "border-black bg-white text-black" : "border-gray-400 bg-gray-600 text-white"}`}
                    />
                    <div className='flex items-center gap-3'>
                        <input
                            name="category"
                            placeholder='category'
                            onChange={HandleEvent}
                            className={`px-3 py-2 rounded-md outline-none border-2
          ${Theme === "light" ? "border-black bg-white text-black" : "border-gray-400 bg-gray-600 text-white"}`}
                        />
                        <input
                            name="price"
                            placeholder='price'
                            onChange={HandleEvent}
                            className={`px-3 py-2 rounded-md outline-none border-2
          ${Theme === "light" ? "border-black bg-white text-black" : "border-gray-400 bg-gray-600 text-white"}`}
                        />
                        <input
                            name="image"
                            placeholder='img-url'
                            onChange={HandleEvent}
                            className={`px-3 py-2 rounded-md w-full outline-none border-2
          ${Theme === "light" ? "border-black bg-white text-black" : "border-gray-400 bg-gray-600 text-white"}`}
                        />
                    </div>
                    <textarea
                        name="description"
                        placeholder='description'
                        onChange={HandleEvent}
                        className={`px-3 py-2 rounded-md outline-none h-full resize-none border-2
        ${Theme === "light" ? "border-black bg-white text-black" : "border-gray-400 bg-gray-600 text-white"}`}
                    ></textarea>

                    <button
                        className={`w-full text-center py-3 rounded-md text-xl font-bold cursor-pointer transition-all duration-100 active:scale-97
        ${Theme === "light" ? "bg-[#3B4953] text-white border-2 border-black" : "bg-gray-800 text-white border-2 border-gray-400"}`}
                    >
                        Submit
                    </button>
                </form>
            </div>

        </div>
    )
}

export default Create;
