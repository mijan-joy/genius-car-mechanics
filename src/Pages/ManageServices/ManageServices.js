import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import useServices from '../../hooks/useServices';

const ManageServices = () => {
    const [services, setServices] = useServices();
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to delete this service?');
        if(proceed){
            const url = `http://localhost:5000/service/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast('Service deleted successfully');
                const remaining = services.filter(service => service._id !== id);
                setServices(remaining);
                
            });
           
        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h2 className=' text-primary border bg-warning text-center mt-5 p-3 rounded'>Service Manager</h2>
            {
                services.map(service => <div key={service._id}>
                    <h5 className='text-center'>{service.name}<button className='btn btn-danger mx-2' onClick={()=> handleDelete(service._id)}>X</button></h5>
                </div>)
            }
            <ToastContainer />
        </div>
    );
};

export default ManageServices;