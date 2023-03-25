import React from 'react';
import { Link } from 'react-router-dom';



export default function Navbar() {
  return <>
   <nav className="navbar navbar-expand-lg text-uppercase fixed-top text-white">
            <div className="container">
              <Link className="navbar-brand " to="home">START REACT</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i className="fa-solid fa-bars text-white"></i>
              </button>
              <div className="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item mx-0 mx-lg-1 ">
                    <Link className="nav-link py-3 px-0 px-lg-3 rounded active" aria-current="page" to="portfolio">PORTFOLIO</Link>
                  </li>
                  <li className="nav-item mx-0 mx-lg-1">
                    <Link className="nav-link py-3 px-0 px-lg-3 rounded" to="about">ABOUT</Link>
                  </li>
                  <li className="nav-item mx-0 mx-lg-1">
                    <Link className="nav-link py-3 px-0 px-lg-3 rounded" to="contact">CONTACT</Link>
                  </li>
                </ul>
                
              </div>
            </div>
    </nav>
  </>
}
