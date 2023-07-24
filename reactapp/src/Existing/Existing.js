import React, { useState } from 'react';
import './Existing.css';

const PaymentsPage = () => {
  const [paymentAmount, setPaymentAmount] = useState(0);

  const handlePaymentChange = (e) => {
    setPaymentAmount(e.target.value);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // Logic for processing the payment
    console.log(`Payment of $${paymentAmount} submitted.`);
    // Reset payment amount
    setPaymentAmount(0);
  };

  return (
    <div className="payments-container">
      <h2>Policy Number</h2>
      <form onSubmit={handlePaymentSubmit}>
        <div className="payment-field">
          <label htmlFor="amount">Policy Number:</label>
          <input
            type="number"
            id="amount"
            value={paymentAmount}
            onChange={handlePaymentChange}
          />
        </div>
        <button type="submit"><a href='/dash'>Submit</a></button>
      </form>
    </div>
  );
};

export default PaymentsPage;