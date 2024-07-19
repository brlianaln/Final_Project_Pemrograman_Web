import React from "react";
import { motion } from "framer-motion";
import heroImage from '../components/img/home page.svg'; 
import { Link } from "react-router-dom";

function HeroItem() {
  return (
    <div className="hero">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
              <h1>
                Buy and sell your <span className="d-block">textbooks for the <tr/> best price</span>
              </h1>
              <p className="mb-4">
                Experience the convenience of borrowing e-books anytime, anywhere, with just a few clicks.
              </p>
              <p>
                <Link className="btn btn-secondary me-2" to="/Shop">Start Now</Link>
              </p>
  
          </div>
          <div className="col-lg-6">
              <img src={heroImage} className="img-fluid" alt="Hero" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroItem;
