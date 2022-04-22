import React from 'react';
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{
        console.log(data);
        const url = `http://localhost:5000/service`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
            toast('Service added successfully');
        })
    };
    return (
        <div className='w-50 mx-auto'>
            <h3>Please Add Service</h3>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                <input type="submit" value="Add Service" />
            </form>
            <ToastContainer />
        </div>
    );
};

export default AddService;