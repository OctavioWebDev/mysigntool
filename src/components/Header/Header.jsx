import React from 'react';

const Header = ({ logo }) => {
    return (
        <header className="flex justify-between items-center bg-black text-white py-7 px-7 fixed top-0 w-full z-50">
            <div className="flex items-center">
                <div className="hamburger cursor-pointer mr-5 text-2xl">☰</div>
                <nav>
                    <ul className="list-none flex m-0 p-0">
                        <li className="mr-5"><a href="/">Home</a></li>
                        <li className="mr-5"><a href="/express-yourself">Express Yourself</a></li>
                        <li className="mr-5"><a href="/profile">Profile</a></li>
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

