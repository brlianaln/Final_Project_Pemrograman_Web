import React from "react";
import aboutImage from '../components/img/about.png'
import Visi from "./Visimisi";


function AboutItem () {
    return (
      <div>
      <div className="about" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <img src={aboutImage} alt="About us" />
            </div>
            <div className="col-lg-7 align-items-center">
              <h2>About us</h2>
              <p>
                We are more than just an online bookstore. We are a community of readers, writers, and literature enthusiasts who share a common love for the beauty and power of words. We believe that every book holds a valuable story to be told, and we strive to serve as a platform for readers to discover and celebrate these stories. Our platform aims to connect individuals who are passionate about literature, fostering discussions, and sharing insights that enrich the reading experience. Join us as we embark on this literary journey together, exploring the wonders of storytelling and expanding our horizons through the written word.
              </p>
              <a href="about.html" className="about_btn">Learn More</a>
            </div>
          </div>
        </div>
      </div>
      </div>
      
       
    );
  }

  export default AboutItem