import React from 'react';
import "../Styles/Container.css";
export default function Container() {
  return (
    <section className="hero-section">
      <div class="images-content">
          <img src="../Images/logo.png" alt="Fashion Model" />
      </div>

      <div className="text-content">
        <p className="subtitle">New Modern Fashion Stylist</p>
        <h1 className="title">Exclusive Winter Collection 2022</h1>
        <a href="/" className="shop-button">Shop Now</a>
      </div>

      <div class="image-content">
        <img src="../Images/logo(2).png" alt="Fashion Model" />
      </div>
    </section>


    
  );
}
