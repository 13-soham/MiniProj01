import React, { createContext, useEffect, useState } from 'react'
import { ProductContext } from './ProductContext';
import axios from './Axios';

const Context = ({ children }) => {
    const [Products, setProducts] = useState(null);

    const getProducts = async () => {
        try {
            let { data } = await axios("/products");   // {data} means I extract "data" from response object, like res.data
            // console.log(data);
            setProducts(data);
        }
        catch (err) {
            console.warn(err.message);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <ProductContext.Provider value={[Products, setProducts]}>
            {children}
        </ProductContext.Provider>
    )
}

export default Context;