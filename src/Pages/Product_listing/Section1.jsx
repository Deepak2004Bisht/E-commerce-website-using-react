/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Section1() {
    const [menu, setMenu] = useState('home')
  return (
    <section className="breadcrumb">
        <div className="background-image" data-background="img/bg_img/bg_001.jpg" data-bg-posx="center" data-bg-posy="center" data-bg-overlay={4} loading="lazy"/>
            <div className="breadcrumb-content">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                        <h1 className="breadcrumb-title">Man Clothing Fashion</h1>
                        <nav className="breadcrumb-link" onClick={() =>setMenu('home')}>
                            <span><Link to="/"><a href="#">Home{menu === "shop" ? <hr/>: <></>}</a></Link></span>
                            <span><Link to="/product_listing"><a>Categories</a></Link></span>
                            <span>Back In Stock Clothes</span>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
