import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useProductDetail from '../../hooks/useProductDetail';
import './ProductDetail.css';

const ProductDetail = () => {
    const { productId } = useParams();
    const [product] = useProductDetail(productId);
    const [quantity, setQuantity] = useState(1);

    const handleAddQuantity= event =>{
        event.preventDefault();
        const addQuantity = event.target.quantity.value;
        if(addQuantity !== ''){
            const newQuantity = (quantity) + parseInt(addQuantity);
            const url = `http://localhost:5000/product/${productId}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({quantity: addQuantity})
            })
            .then(res => res.json())
            .then(data => {
                 setQuantity(newQuantity);
                console.log(data);
                alert('Update success');
                event.target.reset()
            })
        }
    };
    
    const handleReduce = (product) => {
        const exist = product.find(pd => pd._id === product._id)
        if(exist && exist.quantity >= 1){
            exist.quantity = exist.quantity - 1;
            const setQuantity = exist.quantity;

            const url = `http://localhost:5000/product/${productId}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({quantity: setQuantity})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
    }

    return (
        <div  className="container mx-auto">
            <div className="row">
            <h1 className='text-center text-primary mt-3'>Manage Product</h1>
            <div className="service-container w-50 mx-auto">
            <div className="service border-primary p-3">
            <img className='rounded' src={product.img} alt="" />
            <h4 className='mt-2'>Name: {product.name}</h4>
            <p>Price: {product.price} $</p>
            <p><small>{product.description}</small></p>
            <p>Quantity: {product.quantity}</p>
            <div className='text-center'>
                
                    <button className='btn btn-danger' onClick={handleReduce}>Delevared</button>
                
            </div>
            <div className='mt-3 py-3 rounded bg-secondary
'>
                <form onSubmit={handleAddQuantity}>
                    <input type="number" name="quantity" placeholder='Add Product Quantity' required />
                    <br />
                    <input className='btn btn-primary mt-2' type="submit" value="Add Product" />
                </form>
            </div>
        </div>
            </div>
            </div>
        </div>
        
    );
};

export default ProductDetail;
