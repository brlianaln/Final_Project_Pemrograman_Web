import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './img/books.png';
import cartIcon from './img/cart.svg';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleNavbar = () => setNavbarOpen(!navbarOpen);
  const handleClose = () => setShowLogin(false);
  const handleShow = () => setShowLogin(true);
  const registerHandleClose = () => setShowRegister(false);
  const registerHandleShow = () => setShowRegister(true);

  const handleLogin = () => {
    setIsLoggedIn(true);
    handleClose();
  };

  const handleLogout = () => setIsLoggedIn(false);

  const handleDropdownToggle = () => setDropdownOpen(!dropdownOpen);
  const handleDropdownOpen = () => setDropdownOpen(true);
  const handleDropdownClose = () => setDropdownOpen(false);

  return (
    <>
      <nav className="custom-navbar navbar navbar-expand-md navbar-dark bg-dark fixed-top" aria-label="Navbar">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" width="60px" />
            <span className='logo'>LiteraryLoom</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar"
            aria-controls="navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleNavbar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${navbarOpen ? 'show' : ''}`} id="navbar">
            <ul className="navbar-nav custom-navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={toggleNavbar}>HOME</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shop" onClick={toggleNavbar}>SHOP</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" onClick={toggleNavbar}>ABOUT US</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact" onClick={toggleNavbar}>CONTACT US</Link>
              </li>
            </ul>

            <ul className="navbar-nav custom-navbar-cta ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/cart" onClick={toggleNavbar}>
                  <img src={cartIcon} height="18px" width="20px" alt="Cart" />
                </Link>
              </li>
              {isLoggedIn ? (
                <li 
                  className="nav-item dropdown"
                  onMouseEnter={handleDropdownOpen}
                  onMouseLeave={handleDropdownClose}
                >
                  <a className="nav-link dropdown-toggle" href="#" id="dropdownMenuButton" role="button" aria-haspopup="true" aria-expanded={dropdownOpen}>
                    Account
                  </a>
                  <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`} aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">My Account</a>
                    <a className="dropdown-item" href="#" onClick={handleLogout}>Log Out</a>
                    <a className="dropdown-item" href="#">My Orders</a>
                  </div>
                </li>
              ) : (
                <>
                  <li className="nav-item" style={{marginTop:"5px"}}>
                    <button className="nav-link btn btn-link" onClick={handleShow}>
                      Log In
                    </button>
                  </li>
                  <li className="nav-item" style={{marginTop:"5px"}}>
                    <button className="nav-link btn btn-link" onClick={registerHandleShow}>
                      Sign Up
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>

      <Login show={showLogin} handleClose={handleClose} handleLogin={handleLogin} />
      <SignUp show={showRegister} handleClose={registerHandleClose} />
      
      {/* Spacer to prevent content from being hidden behind fixed navbar */}
      <div style={{ height: '80px' }}></div>
    </>
  );
}

export default Navbar;
