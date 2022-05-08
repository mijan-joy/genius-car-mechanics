import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';

const Product = ({service: product}) => {
    const { _id, name, img, description, price, quantity} = product;
    const navigate = useNavigate();
    
    const navigateToProductsDetail = id => {
        navigate(`/product/${id}`);
    }
    
    return (
        <div className="service border-primary">
            <img className='rounded' src={img} alt="" />
            <h2>Name: {name}</h2>
            <p>Price: {price} $</p>
            <p><small>{description}</small></p>
            <p>Quantity: {quantity}</p>
            <button onClick={()=> navigateToProductsDetail(_id)} className="btn btn-primary">Update</button>
           
        </div>
    );
};

export default Product;