/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export default function Section2() {
  return (
    <section className="sec-padding-t">
        <div className="container">
            <div className="page-head">
            <span className="page-sub-title">See Our Collection</span>
            <h2 className="page-title">Special Categories</h2>
            </div>
        </div>
        
        <div className="container">
            <div className="row nf-grid">
            {/*Grid*/}
            <div className="col-lg-8 col-md-12 col-sm-12 nf-grid-item">
                {/*Categories Item*/}
                <div className="categories-item categories-item_1">
                <div className="categories-image">
                    <a className="categories-img-link">
                    <img src="img/categories/001.jpg" alt="Women Accessories" loading="lazy"/>
                    </a>
                </div>
                <div className="categories-content-overlay">
                    <a className="categories-caption categories-caption-bottom" href="#">Women Accessories</a>
                </div>
                </div>
            </div>
            {/*Grid*/}
            <div className="col-lg-4 col-md-6 col-sm-12 nf-grid-item">
                {/*Categories Item*/}
                <div className="categories-item categories-item_1">
                <div className="categories-image">
                    <a className="categories-img-link">
                    <img src="img/categories/002.jpg" alt="Women Accessories" loading="lazy"/>
                    </a>
                </div>
                <div className="categories-content-overlay">
                    <a className="categories-caption categories-caption-bottom" href="#">Kids Fashion</a>
                </div>
                </div>
            </div>
            {/*Grid*/}
            <div className="col-lg-4 col-md-6 col-sm-12 nf-grid-item">
                {/*Categories Item*/}
                <div className="categories-item categories-item_1">
                <div className="categories-image">
                    <a className="categories-img-link">
                    <img src="img/categories/003.jpg" alt="Women Accessories" loading="lazy"/>
                    </a>
                </div>
                <div className="categories-content-overlay">
                    <a className="categories-caption categories-caption-bottom" href="#">Women Fashion</a>
                </div>
                </div>
            </div>
            {/*Grid*/}
            <div className="col-lg-8 col-md-12 col-sm-12 nf-grid-item">
                {/*Categories Item*/}
                <div className="categories-item categories-item_1">
                <div className="categories-image">
                    <a className="categories-img-link">
                    <img src="img/categories/004.jpg" alt="Women Accessories" loading="lazy"/>
                    </a>
                </div>
                <div className="categories-content-overlay">
                    <a className="categories-caption categories-caption-bottom" href="#">Mens Collection</a>
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>
  );
}
