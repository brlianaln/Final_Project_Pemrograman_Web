import React from "react";
import Footer from "../components/Footer";
import heroImage from '../components/img/bookF.svg'; 
import ContactUs from "../components/ContactItem";
import { Link } from "react-router-dom";


const Contact =()=>{
    return(
        <div>
            <HeroItem/>
            <ContactUs/>
            <Footer/>
        </div>
    )
}

function HeroItem(){
    return(
              <div className="hero">
                <div className="container">
                  <div className="row justify-content-between">
                    <div className="col-lg-6">
                      <div className="intro-excerpt">
                        <h1>
                          <span className="d-block">Contact Us</span>
                        </h1>
                        <p className="mb-4">
                          Experience the convenience of borrowing e-books anytime, anywhere, with just a few clicks.
                        </p>
                        <p>
                        <Link className="btn btn-secondary me-2" to="/Shop">Shop Now</Link>
                         <Link className="btn btn-white-outline" to="/">Explore </Link>
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="hero-img-wrap">
                        <img src={heroImage} style={{ height : '400px' }} className="img-fluid" alt="Hero" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            );
          }

export default Contact