import React from 'react';
import sleeping from '../../../images/sleeping.jpg';

const NotFound = () => {
    return (
        <div className="container mx-auto">
            <h2 className="text-center text-warning">Dont Disturb</h2>
            <p className="text-center text-info">Mechanics now sleeping</p>
            <img src={sleeping} alt="sleeping" />
        </div>
    );
};

export default NotFound;