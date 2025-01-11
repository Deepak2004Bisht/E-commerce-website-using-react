/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react';
// import Home from '../Pages/Home/Home';
import { Link } from 'react-router-dom';

export default function Header() {

  const [activemenu, setactivemenu] = useState("");
  const [mobileordesktop, setmobileordesktop] = useState(false);
  const [menu,setMenu] = useState("home");

  return (
    <header id="header" className="header header--sticky" data-header-hover="true">

      {/*Header Navigation*/}
      <nav id="navigation" className="header-nav">
        <div className="container-fluid">
          <div className="row">

            {/*Logo*/}
            <div className="site-logo">
              <a href="home.html">
                <img
                  src="img/logo--dark.png"
                  className="logo-dark"
                  alt="Mazaar"
                />
                <img
                  src="img/logo--light.png"
                  className="logo-light"
                  alt="Mazaar"
                />
              </a>
            </div>
            {/*End Logo*/}


            {/*Navigation Menu*/}
            <div className={mobileordesktop === true ? "nav-menu show-on-mobile" : "nav-menu"}>
              <ul>
                <li className="nav-menu-item" onClick={() => setMenu("home")}>
                  <Link to='/'><a href="#">Home{menu === "shop" ? <hr/>: <></>}</a></Link>

                  {/*Dropdown*/}
                  <div className="nav-dropdown col3-dropdown">
                    <div className="row">
                      <div className="col-lg-4 col-md-6">
                        <ul>
                          <li>
                            <a href="home.html">
                              <img
                                src="img/banner/themeshots/shot_home01.jpg"
                                alt="Banner"
                              />
                              <figure className="text--center">Home 01</figure>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <ul>
                          <li>
                            <a href="home_02.html">
                              <img
                                src="img/banner/themeshots/shot_home02.jpg"
                                alt="Banner"
                              />
                              <figure className="text--center">Home 02</figure>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <ul>
                          <li>
                            <a href="home_03.html">
                              <img
                                src="img/banner/themeshots/shot_home03.jpg"
                                alt="Banner"
                              />
                              <figure className="text--center">Home 03</figure>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <ul>
                          <li>
                            <a href="home_04.html">
                              <img
                                src="img/banner/themeshots/shot_home04.jpg"
                                alt="Banner"
                              />
                              <figure className="text--center">Home 04</figure>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <ul>
                          <li>
                            <a href="home_05.html">
                              <img
                                src="img/banner/themeshots/shot_home05.jpg"
                                alt="Banner"
                              />
                              <figure className="text--center">Home 05</figure>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <ul>
                          <li>
                            <a href="home_06.html">
                              <img
                                src="img/banner/themeshots/shot_home06.jpg"
                                alt="Banner"
                              />
                              <figure className="text--center">Home 06</figure>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/*End Dropdown*/}
                </li>

                <li className="nav-menu-item mega-menu" onClick={() =>setMenu("product_listing")}>
                  <Link to="/product_listing"><a>Shop</a></Link>
                </li>

                <li className="nav-menu-item" onClick={() => setMenu("product_detail")}>
                  <Link to="/product_detail"><a>Man</a></Link>
                </li>

                <li className="nav-menu-item">
                  <a
                    onMouseLeave={() => {
                      setactivemenu("");
                    }}
                    onMouseEnter={() => {
                      setactivemenu("Women");
                    }}
                  >
                    Women
                  </a>

                  {/*Dropdown*/}
                  <div
                    className="nav-dropdown col3-dropdown center"
                    onMouseLeave={() => {
                      setactivemenu("");
                    }}
                    onMouseEnter={() => {
                      setactivemenu("Women");
                    }}
                    style={{
                      display: activemenu === "Women" ? "block" : "none",
                      opacity: 1,
                    }}
                  >
                    <div className="row">
                      <div className="col-lg-4">
                        <ul>
                          <li>
                            <span className="dropdown-title">Clothes</span>
                          </li>
                          <li>
                            <a href="#">Back In Stock Clothes</a>
                          </li>
                          <li>
                            <a href="#">Dresses</a>
                          </li>
                          <li>
                            <a href="#">Tops &amp; Tees</a>
                          </li>
                          <li>
                            <a href="#">Sweatshirts</a>
                          </li>
                          <li>
                            <a href="#">Sweaters </a>
                          </li>
                          <li>
                            <a href="#">Kimonos</a>
                          </li>
                          <li>
                            <a href="#">Jackets</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-4">
                        <ul>
                          <li>
                            <span className="dropdown-title">
                              Beauty &amp; Wellness
                            </span>
                          </li>
                          <li>
                            <a href="#">All Wellness</a>
                          </li>
                          <li>
                            <a href="#">Makeup</a>
                          </li>
                          <li>
                            <a href="#">Skincare</a>
                          </li>
                          <li>
                            <a href="#">Body</a>
                          </li>
                          <li>
                            <a href="#">Sun Care</a>
                          </li>
                          <li>
                            <a href="#">Hair</a>
                          </li>
                          <li>
                            <a href="#">Aromatherapy</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-4">
                        <ul>
                          <li>
                            <span className="dropdown-title">Accessories</span>
                          </li>
                          <li>
                            <a href="#">New Accessories</a>
                          </li>
                          <li>
                            <a href="#">Jewelry</a>
                          </li>
                          <li>
                            <a href="#">Bags</a>
                          </li>
                          <li>
                            <a href="#">Hats</a>
                          </li>
                          <li>
                            <a href="#">Sunglasses</a>
                          </li>
                          <li>
                            <a href="#">Scarves</a>
                          </li>
                          <li>
                            <a href="#">Belts</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/*End Dropdown*/}
                </li>

                <li className="nav-menu-item mega-menu" onClick={() => setMenu("about")}>
                  <Link to="/about"><a>About</a></Link>
                </li>

                <li className="nav-menu-item mega-menu" onClick={() => setMenu("contact")}>
                  <Link to="/contact"><a>Contact</a></Link>
                </li>

                <li className="nav-menu-item" onClick={() => setMenu("blog")}>
                  <Link to="/blog"><a>Blog</a></Link>
                </li>

                <li className="nav-menu-item" onClick={() => setMenu("blog_single")}>
                  <Link to="/blog_single"><a>Pages</a></Link>
                </li>
              </ul>
            </div>
            {/*End Navigation Menu*/}


            {/*Nav Icons*/}
            <div className="nav-icons">
              <ul>
                <li className="nav-icon-item d-lg-none">
                  <div
                    className={mobileordesktop === true ? "nav-icon-trigger menu-mobile-btn active" : "nav-icon-trigger menu-mobile-btn"}
                    onClick={()=>{setmobileordesktop(!mobileordesktop)}}
                    title="Navigation Menu"
                  >
                    <span>
                      <i className="ti-menu" />
                    </span>
                  </div>
                </li>

                <li className="nav-icon-item">
                  <div
                    className="nav-icon-trigger search-menu-btn"
                    title="Search"
                  >
                    <span>
                      <i className="ti-search" />
                    </span>
                  </div>
                </li>

                <li className="nav-icon-item d-none d-lg-table-cell">
                  <a className="nav-icon-trigger" href="#" title="Whishlist">
                    <span onClick={() => setMenu("error")}>
                      <Link to="/error"><i className="ti-heart" />
                        <span className="nav-icon-count">0</span>
                      </Link>
                    </span>
                  </a>
                </li>
                
                <li className="nav-icon-item">
                  <div
                    className="nav-icon-trigger cart-sidebar-btn"
                    title="Shopping Cart"
                  >
                    <span onClick={() => setMenu("cart")}>
                      <Link to="/cart"><i className="ti-shopping-cart" />
                        <span className="nav-icon-count">2</span>
                      </Link>
                    </span>
                  </div>
                </li>
                <li className="nav-icon-item">
                  <div
                    className="nav-icon-trigger dropdown--trigger"
                    title="User Account"
                  >
                    <span onClick={() => setMenu("login_register")}>
                      <Link to="/login_register"><i className="ti-user" /></Link>
                    </span>
                  </div>
                  {/*Dropdown*/}
                  <div className="dropdown--menu dropdown--right">
                    <ul>
                      <li>
                        <a href="login_register.html">My Account</a>
                      </li>
                      <li>
                        <a href="#">Order Tracking</a>
                      </li>
                      <li>
                        <a href="#">Compare</a>
                      </li>
                      <li>
                        <a href="#">Wishlist</a>
                      </li>
                      <li>
                        <a href="cart.html">Cart</a>
                      </li>
                      <li>
                        <a href="#">Lost Password</a>
                      </li>
                      <li>
                        <hr />
                      </li>
                      <li>
                        <a
                          href="#"
                          className="btn btn--primary btn--sm btn--full"
                        >
                          <i className="fa fa-shopping-cart" />
                          Purchase Now
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/*End Dropdown*/}
                </li>
              </ul>
            </div>
            {/*End Nav Icons*/}

            {/*Search Bar*/}
            <div className="searchbar-menu">
              <div className="searchbar-menu-inner">

                {/*Search Bar*/}
                <div className="search-form-wrap">
                  <form>
                    <button className="search-icon btn--lg">
                      <i className="ti-search" />
                    </button>
                    <input
                      className="search-field input--lg"
                      placeholder="Search here..."
                      defaultValue
                      name="s"
                      title="Search..."
                      type="search"
                      autoComplete="off"
                    />
                    <span className="search-close-icon">
                      <i className="ti-close" />
                    </span>
                  </form>
                </div>
                {/*End Search Bar*/}


                {/*Search Result Bar*/}
                <div className="search-results-wrap">
                  <div className="search-results-loading">
                    <span className="fa fa-spinner fa-spin" />
                  </div>
                  <div className="search-results-text woocommerce">
                    <ul>
                      <li>Nothing found</li>
                    </ul>
                  </div>
                </div>
                {/*End Search Result Bar*/}
              </div>
            </div>
            {/*End Search Bar*/}
          </div>
        </div>
      </nav>
      {/*End Header Navigation*/}
    </header>
  );
}
