import React from 'react';


const Header = ({ logo }) => {
    return (
        <header className="header">
            <div className="menu">
                <div className="hamburger">☰</div>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/express-yourself">Express YourSelf</a></li>
                        <li><a href="/profile">Profile</a></li>
                        <li><a href="/cart">Cart</a></li>             
                    </ul>
                </nav>
            </div>
            <div className="logo">
                {logo}
            </div>
        </header>
    );
};

export default Header;
