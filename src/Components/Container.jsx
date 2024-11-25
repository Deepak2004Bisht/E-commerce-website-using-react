import React from 'react';
import "../Styles/Container.css";
export default function Container() {
  return (
    <div className="banner">
      <div className='container-left'>
        <img src="../Images/logo.png" alt="" />
      </div>

      <div className="content">
        <div className="text">
          <p>New Modern Fashion Styles</p>
          <h1>Exclusive Winter Collection 2022</h1>
          <button className='btn'>Shop Now</button>
        </div>
      </div>

      <div className="circle">
        <div className="arrow left">
          <i className="fa-solid fa-arrow-left"></i>
        </div>
        <div className="arrow right">
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </div>
      <div className="image container-right">
        <img src="../Images/logo(2).png" alt="" />
      </div>
    </div>


    
  );
}
