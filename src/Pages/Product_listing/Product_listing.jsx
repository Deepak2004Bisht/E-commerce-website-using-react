import React from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Section1 from './Section1';
import Section2 from './Section2';

export default function Product_listing() {
  return (
    <>
        <Header/>
        <div className="page-container">
          <Section1/>
          <Section2/>
        </div>
        <Footer/>
    </>
  );
}
