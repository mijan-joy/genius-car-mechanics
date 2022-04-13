import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <footer className="text-center bg-primary mt-4 py-3">
            <p><small>Copyright &copy; {year} </small></p>
        </footer>
    );
};

export default Footer;