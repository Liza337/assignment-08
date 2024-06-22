import React from 'react';
import './Header.css';
import user from '../../images/user.jpg';

const Header = () => {
    return (
        <nav className='header'>
            <h2>Knowledge Cafe</h2>
            <div className="nav-links">
                <a href="/">Home</a>
                <a href="/login">Login</a>
                <a href="/about">About</a>
            </div>
            <div>
                <img src={user} alt="User Avatar" />
            </div>
        </nav>
    );
};

export default Header;