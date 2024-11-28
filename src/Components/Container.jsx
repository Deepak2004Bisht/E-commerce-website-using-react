import React from 'react';
import "../Styles/Container.css";
export default function Container() {
  return (
    // <div className="banner">
    //   <div className='container-left'>
    //     <img src="../Images/logo.png" alt="" />
    //   </div>

    //   <div className="content">
    //     <div className="text">
    //       <p>New Modern Fashion Styles</p>
    //       <h1>Exclusive Winter Collection 2022</h1>
    //       {/* <button className='btn'>Shop Now</button> */}
    //       <button class="pushable">
    //         <span class="shadow"></span>
    //         <span class="edge"></span>
    //         <span class="front">Shop Now</span>
    //       </button>
    //     </div>
    //   </div>

    //   <div className="circle">
    //     <div className="arrow left">
    //       <i className="fa-solid fa-arrow-left"></i>
    //     </div>
    //     <div className="arrow right">
    //       <i className="fa-solid fa-arrow-right"></i>
    //     </div>
    //   </div>
    //   <div className="image container-right">
    //     <img src="../Images/logo(2).png" alt="" />
    //   </div>
    // </div>


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
