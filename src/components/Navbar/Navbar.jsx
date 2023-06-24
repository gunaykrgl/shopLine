import React from 'react';
import './Navbar.css';
import { MdAccountCircle } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="navbar">
        <a href="/" className='navbar-logo'>Shop</a>
        <div>
            <input
            type="text"
            placeholder="Search..."
            value={""}
            onChange={""}
            />
            <button onClick={""}>Search</button>
        </div>
        <ul className="navbar-list">
            <li className="navbar-item">
                <a href="/sign-in" className="navbar-link">
                    <MdAccountCircle size={18} />
                    Sign-in
                </a>
            </li>
            <li className="navbar-item"><a href="/cart" className="navbar-link">Cart</a></li>
            <li className="navbar-item"><a href="/about" className="navbar-link">About</a></li>
            <li className="navbar-item"><a href="/contact" className="navbar-link">Contact</a></li>
        </ul>
    </nav>
  );
};

export default Navbar;
