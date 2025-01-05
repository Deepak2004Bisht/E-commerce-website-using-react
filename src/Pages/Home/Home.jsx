/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Header from "../../Components/Header";
import Footer from '../../Components/Footer';
import Section1 from './Section1';

export default function Home() {
  return (
    <div>

      {/* Free shipping oder of navbar */}
      <div className="promotion-box">
        <div className="container-fluid">
          <p className="promotion-text">
            Free Shipping on all orders over $100!
            <a className="link" href="#">
              Shop Now
            </a>
          </p>
          <span className="promotion-close">
            <i className="ti-close" />
          </span>
        </div>
      </div>
      <Header/>

      <div className="page-container">
        <Section1/>
      </div>

      <Footer/>
    </div>
  );
}
