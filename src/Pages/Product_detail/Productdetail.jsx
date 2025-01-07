import React, { useState } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Section1 from './Section1';
import { Link } from 'react-router-dom';

export default function Productdetail() {
    const [menu, setMenu] = useState("home");
  return (
    <>
        <Header/>
        <div className="page-container">
            <section className="breadcrumb">
                <div className="background-image" data-background="img/bg_img/bg_001.jpg" data-bg-posx="center" data-bg-posy="center" data-bg-overlay={4} />
                <div className="breadcrumb-content">
                    <div className="container">
                    <div className="row">
                        <div className="col-12">
                        <h1 className="breadcrumb-title">Man Clothing Fashion</h1>
                        <nav className="breadcrumb-link">
                            <span onClick={() => setMenu("home")}>
                                <Link to="/"><a href="home.html">Home</a></Link>
                            </span>
                            <span onClick={() => setMenu("product_listing")}>
                                <Link to="/product_listing"><a href="home.html">Categories</a></Link>
                            </span>
                            <span>Back In Stock Clothes</span>
                        </nav>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

            <Section1/>
        </div>
        <Footer/>
    </>
  );
}
