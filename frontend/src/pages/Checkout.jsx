import React, { useEffect, useState } from 'react';
import QrisModal from '../components/QrisModal';
import IndomaretModal from '../components/IndomaretModal';

function Checkout() {
  const [checkoutItems, setCheckoutItems] = useState([]);
  const [showQrisModal, setShowQrisModal] = useState(false);
  const [showIndomaretModal, setShowIndomaretModal] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const tax = 2.0;

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('checkoutItems')) || [];
    setCheckoutItems(items);
  }, []);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      currencyDisplay: "symbol",
    }).format(price);
  };

  const validateForm = () => {
    const errors = {};
    const fullName = document.getElementById('firstName').value.trim();
    const phoneNumber = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const address = document.getElementById('address').value.trim();
    
   

    if (!fullName) {
      errors.fullName = 'Valid full name is required.';
    }
    if (!phoneNumber) {
      errors.phoneNumber = 'Valid phone number is required.';
    }
    if (!email) {
      errors.email = 'Please enter a valid email address for shipping updates.';
    }
    if (!address) {
      errors.address = 'Please enter your shipping address.';
    }
    

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handlePlaceOrder = () => {
    if (!validateForm()) {
      return;
    }

    const selectedPaymentMethod = document.querySelector('input[name="paymentMethod"]:checked').id;
    if (selectedPaymentMethod === 'debit') {
      setShowQrisModal(true);
    } else if (selectedPaymentMethod === 'credit') {
      setShowIndomaretModal(true);
    }
  };

  const subtotal = checkoutItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalPayment = subtotal + tax;

  return (
    <div className="container">
      <div className="py-5 text-center">
        <h2>Checkout form</h2>
      </div>
      <div className="row g-5">
        <div className="col-md-5 col-lg-4 order-md-last">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text" style={{color:"black"}}>Your cart</span>
            <span className="badge bg-primary rounded-pill">{checkoutItems.length}</span>
          </h4>
          <ul className="list-group mb-3">
            {checkoutItems.map((item) => (
              <li className="list-group-item d-flex justify-content-between lh-sm" key={item.id}>
                <div>
                  <h6 className="my-0">{item.title}</h6>
                  <small className="text-muted">{item.details}</small>
                </div>
                <span className="text-muted">{formatPrice(item.price * item.quantity)}</span>
              </li>
            ))}
            <li className="list-group-item d-flex justify-content-between">
              <span>Subtotal</span>
              <strong>{formatPrice(subtotal)}</strong>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Tax</span>
              <strong>{formatPrice(tax)}</strong>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Total Payment</span>
              <strong>{formatPrice(totalPayment)}</strong>
            </li>
          </ul>
          <button className="w-100 btn btn-danger btn-lg" style={{backgroundColor:"#006769"}} onClick={handlePlaceOrder} type="button">
            Place Order
          </button>
        </div>
        <div className="col-md-7 col-lg-8">
          <h4 className="mb-3" style={{color:"black"}}>Billing address</h4>
          <form className="needs-validation" noValidate>
            <div className="row g-3">
              <div className="col-sm-6">
                <label htmlFor="firstName" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="firstName" placeholder="" required />
                {validationErrors.fullName && <div className="invalid-feedback d-block">{validationErrors.fullName}</div>}
              </div>
              <div className="col-sm-6">
                <label htmlFor="lastName" className="form-label">Phone Number</label>
                <input type="text" className="form-control" id="lastName" placeholder="" required />
                {validationErrors.phoneNumber && <div className="invalid-feedback d-block">{validationErrors.phoneNumber}</div>}
              </div>
              <div className="col-12">
                <label htmlFor="email" className="form-label">Email <span className="text-muted"></span></label>
                <input type="email" className="form-control" id="email" placeholder="" />
                {validationErrors.email && <div className="invalid-feedback d-block">{validationErrors.email}</div>}
              </div>
              <div className="col-12">
                <label htmlFor="address" className="form-label">Delivery Address</label>
                <input type="text" className="form-control" id="address" placeholder="" required />
                {validationErrors.address && <div className="invalid-feedback d-block">{validationErrors.address}</div>}
              </div>
              
             
            </div>
            <hr className="my-4" />
            
            <h4 className="mb-3">Payment</h4>
            <div className="my-3">
              <div className="form-check">
                <input id="credit" name="paymentMethod" type="radio" className="form-check-input" defaultChecked required />
                <label className="form-check-label" htmlFor="credit">Indomaret</label>
              </div>
              <div className="form-check">
                <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required />
                <label className="form-check-label" htmlFor="debit">Qris</label>
              </div>
            </div>
            <hr className="my-4" />
          </form>
        </div>
      </div>
      <QrisModal show={showQrisModal} handleClose={() => setShowQrisModal(false)} />
      <IndomaretModal show={showIndomaretModal} handleClose={() => setShowIndomaretModal(false)} />
    </div>
  );
}

export default Checkout;