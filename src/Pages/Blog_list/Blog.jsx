/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { Link } from 'react-router-dom';

export default function Blog() {
  const [menu, setMenu] = useState("home");
  return (
    <div>
      <Header/>
      <div className="page-container">
        {/*Breadcrumb*/}
        <section className="breadcrumb">
          <div
            className="background-image"
            data-background="img/bg_img/bg_001.jpg"
            data-bg-posx="center"
            data-bg-posy="center"
            data-bg-overlay={4}
          />
          <div className="breadcrumb-content">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h1 className="breadcrumb-title">Blog List</h1>
                  <nav className="breadcrumb-link">
                    <span onClick={() => setMenu("home")}>
                      <Link to="/"><a href="home.html">Home{menu === "shop" ? <hr/>: <></>}</a></Link>
                    </span>
                    <span>Blog</span>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Breadcrumb*/}
        {/*Content*/}
        <section className="sec-padding">
          <div id="blog-entry" className="blog-entry blog-list">
            <div className="container">
              <div className="row">
                {/*Item*/}
                <div className="col-md-8 offset-md-2">
                  {/*Blog Item*/}
                  <div className="blog-item">
                    <div className="blog-item-image">
                      <a className="blog-img-link">
                        <img src="img/blog_img/001.jpg" alt="blog image" loading="lazy"/>
                      </a>
                    </div>
                    <div className="blog-item-content">
                      <div className="tag">
                        <a href="#">Fashion</a>
                        <a href="#">Cupple</a>
                      </div>
                      <h3 className="blog-title">
                        <a href="#">Effective Ways To Overcome Man Fashion’s</a>
                      </h3>
                      <div className="blog-description-content">
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil sed ad tempore amet hic, vitae, eum s rem?
                        </p>
                      </div>
                      <p className="info">
                        <span>
                          by <a href="#">Admin</a>
                        </span>
                        <span>23 June 2018</span>
                      </p>
                    </div>
                  </div>
                  {/*End Blog Item*/}
                  {/*Blog Item*/}
                  <div className="blog-item">
                    <div className="blog-item-image">
                      <a className="blog-img-link">
                        <img src="img/blog_img/002.jpg" alt="blog image" loading="lazy"/>
                      </a>
                    </div>
                    <div className="blog-item-content">
                      <div className="tag">
                        <a href="#">Fashion</a>
                        <a href="#">Cupple</a>
                      </div>
                      <h3 className="blog-title">
                        <a href="#">Effective Ways To Overcome Man Fashion’s</a>
                      </h3>
                      <div className="blog-description-content">
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil sed ad tempore amet hic, vitae, eum s rem?
                        </p>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil sed ad tempore amet hic, vitae, eum s rem?
                        </p>
                      </div>
                      <p className="info">
                        <span>
                          by <a href="#">Admin</a>
                        </span>
                        <span>23 June 2018</span>
                      </p>
                    </div>
                  </div>
                  {/*End Blog Item*/}
                  {/*Blog Item*/}
                  <div className="blog-item">
                    <div className="blog-item-image">
                      <a className="blog-img-link">
                        <img src="img/blog_img/003.jpg" alt="blog image" loading="lazy"/>
                      </a>
                    </div>
                    <div className="blog-item-content">
                      <div className="tag">
                        <a href="#">Fashion</a>
                        <a href="#">Cupple</a>
                      </div>
                      <h3 className="blog-title">
                        <a href="#">Effective Ways To Overcome Man Fashion’s</a>
                      </h3>
                      <div className="blog-description-content">
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil sed ad tempore amet hic, vitae, eum s rem?.
                        </p>
                      </div>
                      <p className="info">
                        <span>
                          by <a href="#">Admin</a>
                        </span>
                        <span>23 June 2018</span>
                      </p>
                    </div>
                  </div>
                  {/*End Blog Item*/}
                  {/*Blog Item*/}
                  <div className="blog-item">
                    <div className="blog-item-image">
                      <a className="blog-img-link">
                        <img src="img/blog_img/004.jpg" alt="blog image" loading="lazy"/>
                      </a>
                    </div>
                    <div className="blog-item-content">
                      <div className="tag">
                        <a href="#">Fashion</a>
                        <a href="#">Cupple</a>
                      </div>
                      <h3 className="blog-title">
                        <a href="#">Effective Ways To Overcome Man Fashion’s</a>
                      </h3>
                      <div className="blog-description-content">
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil sed ad tempore amet hic, vitae, eum s rem?
                        </p>
                      </div>
                      <p className="info">
                        <span>
                          by <a href="#">Admin</a>
                        </span>
                        <span>23 June 2018</span>
                      </p>
                    </div>
                  </div>
                  {/*End Blog Item*/}
                  {/*Blog Item*/}
                  <div className="blog-item">
                    <div className="blog-item-image">
                      <a className="blog-img-link">
                        <img src="img/blog_img/002.jpg" alt="blog image" loading="lazy"/>
                      </a>
                    </div>
                    <div className="blog-item-content">
                      <div className="tag">
                        <a href="#">Fashion</a>
                        <a href="#">Cupple</a>
                      </div>
                      <h3 className="blog-title">
                        <a href="#">Effective Ways To Overcome Man Fashion’s</a>
                      </h3>
                      <div className="blog-description-content">
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil sed ad tempore amet hic, vitae, eum s rem?
                        </p>
                      </div>
                      <p className="info">
                        <span>
                          by <a href="#">Admin</a>
                        </span>
                        <span>23 June 2018</span>
                      </p>
                    </div>
                  </div>
                  {/*End Blog Item*/}
                  {/*Blog Item*/}
                  <div className="blog-item">
                    <div className="blog-item-image">
                      <a className="blog-img-link">
                        <img src="img/blog_img/005.jpg" alt="blog image" loading="lazy"/>
                      </a>
                    </div>
                    <div className="blog-item-content">
                      <div className="tag">
                        <a href="#">Fashion</a>
                        <a href="#">Cupple</a>
                      </div>
                      <h3 className="blog-title">
                        <a href="#">Effective Ways To Overcome Man Fashion’s</a>
                      </h3>
                      <div className="blog-description-content">
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil sed ad tempore amet hic, vitae, eum s rem?
                        </p>
                      </div>
                      <p className="info">
                        <span>
                          by <a href="#">Admin</a>
                        </span>
                        <span>23 June 2018</span>
                      </p>
                    </div>
                  </div>
                  {/*End Blog Item*/}
                  {/*Blog Item*/}
                  <div className="blog-item">
                    <div className="blog-item-image">
                      <a className="blog-img-link">
                        <img src="img/blog_img/001.jpg" alt="blog image" loading="lazy"/>
                      </a>
                    </div>
                    <div className="blog-item-content">
                      <div className="tag">
                        <a href="#">Fashion</a>
                        <a href="#">Cupple</a>
                      </div>
                      <h3 className="blog-title">
                        <a href="#">Effective Ways To Overcome Man Fashion’s</a>
                      </h3>
                      <div className="blog-description-content">
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil sed ad tempore amet hic, vitae, eum s rem?
                        </p>
                      </div>
                      <p className="info">
                        <span>
                          by <a href="#">Admin</a>
                        </span>
                        <span>23 June 2018</span>
                      </p>
                    </div>
                  </div>
                  {/*End Blog Item*/}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End Content*/}
      </div>
      <Footer/>
    </div>
  );
}
