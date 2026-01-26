import React from 'react';
import { Link } from 'react-router-dom';
const Navigation = () => {
    return (
        <>
            <h1>Navigation</h1>
            <Link to="/">Home</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </>
    )
}

export default Navigation;