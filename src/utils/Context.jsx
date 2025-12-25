import React, { createContext, useEffect, useRef, useState } from 'react'
import { ProductContext } from './ProductContext';
import axios from './Axios';

const Context = ({ children }) => {
    const [Products, setProducts] = useState([]);
    const firstRender = useRef(true);

    const getProducts = async () => {
        try {
            let { data } = await axios.get("/products");   // {data} means I extract "data" from response object, like res.data
            // console.log(data);
            

            let localStorageProducts = JSON.parse(localStorage.getItem("products")) || []     // if there is no products then give an empty array
            // Merge once (API + localStorage) products
            let mergeProducts = [...data, ...localStorageProducts]; 
            setProducts(mergeProducts);
        }
        catch (err) {
            console.warn(err.message);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    useEffect(() => {
        getProducts();
    }, [Products]);

    useEffect(()=>{

        if(firstRender.current){
            firstRender.current = false;
            return;
        }

        const userProducts = Products.filter(p => p.id > 100000000)
        localStorage.setItem("products", JSON.stringify(userProducts));
    },[Products]);

    return (
        <ProductContext.Provider value={[Products, setProducts]}>
            {children}
        </ProductContext.Provider>
    )
}

export default Context;