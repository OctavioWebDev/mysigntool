import React from 'react';


const Header = ({ logo }) => {
    return (
        <header className="header">
            <div className="menu">
                <div className="hamburger">☰</div>
                <nav>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/NeonSignBuilderTool">Express YourSelf</a></li>
                        <li><a href="/cart">Cart</a></li>
                        <li><a href="/profile">Profile</a></li>
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
