import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {id, name, img, description, price} = service;
    const navigate = useNavigate();
    const navigateToServicesDetails = (id) => {
        navigate(`/service/${id}`);
    }
    return (
        <div className="service border-primary">
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>{price}</p>
            <p><small>{description}</small></p>
            <button onClick={()=> navigateToServicesDetails(id)} className="btn btn-primary">Book: {name}</button>
        </div>
    );
};

export default Service;