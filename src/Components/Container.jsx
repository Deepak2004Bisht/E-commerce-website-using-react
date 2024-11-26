import React from 'react';
import "../Styles/Container.css";
export default function Container() {
  return (
    <div className='container'>
      <div className='container-left'>
        <img src="../Images/logo.png" alt="" />
      </div>

      <div className='content'>
        <div className='text'>
          <p>New Modern Fashion Stylist</p>
          <h1>Exclusive Winter Collection 2025</h1>  
        </div>
        <button className='btn'>Shop Now</button>
    

      <div class="circle">
        <div class="arrow left">
          <i class="fa-solid fa-arrow-left"></i>
        </div>
        <div class="arrow right">
          <i class="fa-solid fa-arrow-right"></i>
        </div>
      </div>
      </div>
      <div className='container-right'>
        <img src="../Images/logo(2).png" alt="" />
      </div>
    </div>
  );
}
