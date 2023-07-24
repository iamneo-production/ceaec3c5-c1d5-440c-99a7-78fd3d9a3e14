import React, { useState } from 'react';
import './Payment.css';
const CheckoutForm = () => {
  const [loading, setLoading] = useState(false);

  const showLoading = (event) => {
    event.preventDefault(); // Prevent form submission
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000); // Change to the desired duration in milliseconds
  };

  return (
    <div className="Paymentp">
    <div className="credit-card-form">
      <h2>Card Payment</h2>
      <form onSubmit={showLoading}>
        <div className="form-group">
          <label htmlFor="card-number">Card Number</label>
          <input type="text" id="card-number" placeholder="Card number" />
        </div>
        <div className="form-group">
          <label htmlFor="card-holder">Card Holder</label>
          <input type="text" id="card-holder" placeholder="Card holder's name" />
        </div>
        <div className="form-row">
          <div className="form-group form-column">
            <label htmlFor="expiry-date">Expiry Date</label>
            <input type="text" id="expiry-date" placeholder="MM/YY" />
          </div>
          <div className="form-group form-column">
            <label htmlFor="cvv">CVV</label>
            <input type="text" id="cvv" placeholder="CVV" />
          </div>
        </div>
        <button type="submit" className="click-button" disabled={loading}>
          {loading ? 'Processing Payment...' : 'Pay Now'}
        </button>
      </form>
      </div>
      {loading && <p>Please wait while the payment is being processed.</p>}
      
    </div>
  );
};

export default CheckoutForm;
