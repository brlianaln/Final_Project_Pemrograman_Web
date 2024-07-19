import React from "react";
import { buku2,buku3,buku4,cross} from '../pages/index';
import { Link } from "react-router-dom";
function FavoritItem() {
    return (
      <div className="product-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
              <h2 className="mb-4 section-title">Find your favorite book in this site.</h2>
              <p className="mb-4">
              With physical books, you can build a tangible collection that you can take with you anywhere.
               Enjoy the pleasure of reading in the park,
               at work, or on the go, appreciating the feel and presence of each book in your hands.
              </p>
              <p><a href="/Shop" className="btn" style={{backgroundColor:"#006769",color:"white"}}>Explore</a></p>
            </div>
  
            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <a className="product-item" href="cart.html">
                <Link to=''><img src={buku2} style={{ height: '250px' }} className="img-fluid product-thumbnail" alt="They Both Die At The End" /></Link>
                <h3 className="product-title">They Both Die At The End</h3>
      
              </a>
            </div>
  
            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <a className="product-item" href="cart.html">
                <img src={buku3} style={{ height: '250px' }} className="img-fluid product-thumbnail" alt="The Art Of War" />
                <h3 className="product-title">The Art Of War</h3>
                
                
              </a>
            </div>
  
            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <a className="product-item" href="cart.html">
                <img src={buku4} style={{ height: '250px' }} className="img-fluid product-thumbnail" alt="A Court Of Thorns" />
                <h3 className="product-title">A Court Of Thorns</h3>
                
              </a>
            </div>
  
          </div>
        </div>
      </div>
    );
  }

export default FavoritItem
