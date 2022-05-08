import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';

const AllProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/product')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);
    return (
        <div id="services" className="container">
            <div className="row">
            <h1 className='text-center text-primary mt-5'>All Porduct</h1>
            <div className="services-container">
            {
                products.map(product =><Product
                 key={product._id}
                service={product} >
                </Product> )
            }
            </div>
            </div>
        </div>
    );
};

export default AllProducts;