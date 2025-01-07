/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Header from "../../Components/Header";
import Footer from '../../Components/Footer';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';

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
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
      </div>

      <Footer/>
    </div>
  );
}
