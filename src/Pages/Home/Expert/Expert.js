import React from 'react';

const Expert = ({expert}) => {
    const {name, img } = expert;

    return (
        <div className="g-5 col-sm-12 col-md-6 col-lg-4 ">
        <div className="card border-primary" >
        <img src={img} class="card-img-top" alt="..."/>
        <div className="card-body">
                    <h5 className="card-title text-center">{name}</h5>
                    <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn btn-primary d-grid">Go somewhere</a>
                </div>
            </div>
        </div>

    );
};

export default Expert;