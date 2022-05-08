import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import useProducts from '../../hooks/useProducts';

const ManageProducts = () => {
    const [products, setProducts] = useProducts();
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to delete this product?');
        if(proceed){
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Item deleted successfully');
                const remaining = products.filter(product => product._id !== id);
                setProducts(remaining);
                
            });
           
        }
    };
    return (
        <div className='w-50 mx-auto'>
            <h2 className=' text-primary border bg-warning text-center mt-5 p-3 rounded'>Manage Product</h2>
            {
                products.map(product => <div key={product._id}>
                    <h5 className='text-center'>{product.name}<button className='btn btn-danger mx-2' onClick={()=> handleDelete(product._id)}>X</button></h5>
                </div>)
            }
            <ToastContainer />
        </div>
    );
};

export default ManageProducts;