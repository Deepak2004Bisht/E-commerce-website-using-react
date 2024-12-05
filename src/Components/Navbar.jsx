import React from 'react';
import '../Styles/Navbar.css';

export default function Navbar() {
  return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" style={{
          paddingLeft: "50px"
        }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/" style={{
            fontSize: "25px",
            fontWeight: "bold",
          }}>LIMO</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Shop</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Products</a>
              </li>
              <li class="nav-item">
                <a className="nav-link" href='/'>Pages</a>
              </li>
              <li class="nav-item">
                <a className="nav-link" href='/'>Blog</a>
              </li>
              <li class="nav-item">
                <a className="nav-link" href='/'>Contact</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit" style={{
                width: "92px"
              }}>Search</button>
            </form>
          </div>
        </div>
      </nav>
  );
}
