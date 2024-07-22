import React, { useEffect, useState } from "react";
import "../components/css/cart.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Trash2 } from "react-feather";
import swal from "sweetalert";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);
  const [tax, setTax] = useState(2.0);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate(); // Use useNavigate for navigation

  // Update quantity handler
  const handleQuantityChange = (id, newQuantity) => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: newQuantity }; // update quantity
      }
      return item;
    });
    setCartItems(updatedItems);
    updateTotalPrice(updatedItems, checkedItems);
  };

  // Remove item handler
  const handleRemoveItem = (id) => {
    axios
      .delete(`http://localhost:3500/cart/${id}`)
      .then(() => {
        axios
          .get("http://localhost:3500/cart")
          .then((res) => {
            setCartItems(res.data);
          })
          .catch((err) => {
            console.log("Gagal memperbarui data keranjang:", err);
          });
      })
      .catch((err) => {
        console.log("Gagal menghapus item:", err);
      });
  };

  // Calculate total price
  const updateTotalPrice = (items, checkedItems) => {
    let total = 0;
    items.forEach((item) => {
      if (checkedItems.includes(item.id)) {
        total += item.price * (item.quantity || 1);
      }
    });
    setTotalPrice(total);
  };

  // Handle checkout
  const handleCheckout = () => {
    if (checkedItems.length === 0) {
      swal("Gagal!", "Please select at least one item to checkout.", "error");
      return;
    }
    const itemsToCheckout = cartItems.filter(item => checkedItems.includes(item.id));
    localStorage.setItem("checkoutItems", JSON.stringify(itemsToCheckout));
    navigate("/Checkout");
  };

 
  const handleCheckChange = (id) => {
    const newCheckedItems = checkedItems.includes(id)
      ? checkedItems.filter(itemId => itemId !== id)
      : [...checkedItems, id];
    
    setCheckedItems(newCheckedItems);
    updateTotalPrice(cartItems, newCheckedItems);
  };

  // Format price
  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      currencyDisplay: "symbol",
    }).format(price);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3500/cart")
      .then((res) => {
        setCartItems(res.data);
        updateTotalPrice(res.data, checkedItems); 
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const finalPrice = totalPrice + tax;

  return (
    <section className="bg-light my-5">
      <div className="container">
        <div className="row">
          {/* cart */}
          <div className="col-lg-9">
            <div className="card border shadow-0">
              <div className="m-4">
                <h4 className="card-title mb-4">Your shopping cart</h4>
                {cartItems.map((item) => (
                  <div className="row gy-3 mb-4 d-flex" style={{ alignItems: 'center' }} key={item.id}>
                    <div className="col-lg-1">
                      <input
                        type="checkbox"
                        checked={checkedItems.includes(item.id)}
                        onChange={() => handleCheckChange(item.id)}
                      />
                    </div>
                    <div className="col-lg-7">
                      <div className="me-lg-5">
                        <div className="d-flex" style={{alignItems:"center"}}>
                          <div className="product-img d-flex" style={{ alignItems: 'center' }}>
                            <img
                              src={item.image}
                              className="img-fluid rounded-3"
                              style={{ width: '125px', height: '125px', objectFit: "contain" }}
                              alt={item.name}
                            />
                          </div>
                          <div className="product-info" style={{ marginLeft: '20px' }}>
                            <a href="#" className="nav-link" style={{ fontWeight: 'bold' }}>
                              {item.title}
                            </a>
                            <p className="text-muted">{item.author}</p>
                            <p className="text-muted">{item.details}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap">
                      <div>
                        <input
                          className="quantity-input"
                          style={{ borderRadius: "5px" }}
                          type="number"
                          value={item.quantity || 1}
                          min="1"
                          onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                          autoComplete="off"
                        />
                      </div>
                      <div>
                        <span className="price">{formatPrice(item.price * (item.quantity || 1))}</span>
                      </div>
                    </div>
                    <div className="col-lg col-sm-6 d-flex justify-content-sm-center justify-content-md-start justify-content-lg-center justify-content-xl-end mb-2">
                      <div className="float-md-end">
                        <Trash2 onClick={() => handleRemoveItem(item.id)} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-top pt-4 mx-4 mb-4">
                <p>
                  <i className="fas fa-truck text-muted fa-lg"></i> Free Delivery within 1-2 weeks
                </p>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip
                </p>
              </div>
            </div>
          </div>
          {/* cart */}

          {/* summary */}
          <div className="col-lg-3">
            <div className="card shadow-0 border">
              <div className="card-body">
                <h4 className="card-title mb-4">Order Summary</h4>
                <hr style={{ fontSize: '20px', color: "black" }}></hr>
                <div className="d-flex justify-content-between">
                  <p className="mb-2">Total price:</p>
                  <p className="mb-2">{formatPrice(totalPrice)}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="mb-2">TAX:</p>
                  <p className="mb-2">{formatPrice(tax)}</p>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                  <p className="mb-2">Total price:</p>
                  <p className="mb-2 fw-bold">{formatPrice(finalPrice)}</p>
                </div>

                <div className="mt-3">
                  <button className="btn btn-success w-100 shadow-0 mb-2" style={{ backgroundColor: '#006769', borderRadius: "5px", border: '0' }} onClick={handleCheckout}>
                    Checkout
                  </button>
                  <Link className="btn w-100 mt-2" to="/Shop" style={{ backgroundColor: ' #f9bf29', borderRadius: "5px", border: '0' }}>
                    Back to shop
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* summary */}
        </div>
      </div>
    </section>
  );
}

export default Cart;
