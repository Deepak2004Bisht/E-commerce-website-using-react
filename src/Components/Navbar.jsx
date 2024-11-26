import React from 'react';
import '../Styles/Navbar.css';

export default function Navbar() {
  return (
    <div className='navbar-section'>
        <nav className='navbar'>
            <h2>LIMO</h2>
            <ul className='nav-list'>
                <li><a href="#home">Home</a></li>
                <li><a href="#shop">Shop</a></li>
                <li><a href="#product">Product</a></li>
                <li><a href="#page">Page</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className='nav-icons'>
                <i className="fa-solid fa-magnifying-glass"></i>  
                <i className="fa-regular fa-user"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-solid fa-cart-shopping"></i>
            </div>
        </nav>
    </div>
  );
}
