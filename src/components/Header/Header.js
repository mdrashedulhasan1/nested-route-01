import React from 'react';
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/friends'>Friends</Link>
            <Link to='/posts'>Posts</Link>
            <Link to='/countries'>Countries</Link>
        </nav>
    );
};

export default Header;