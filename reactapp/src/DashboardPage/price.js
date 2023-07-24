import React from 'react';
import './price.css';



function PriceList() {
  return (
    <>
    
      <div className="price-list-container">
        <h1>Your Policies</h1>
        <table>
          <thead>
            <tr>
              <th>Policy</th>
              <th>Paid Amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Health Insurance</td>
              <td>Rs 2000/-</td>
              <td>Premium</td>
            </tr>
            <tr>
              <td>Term Life Insurance</td>
              <td>Rs 5000/-</td>
              <td>Premium</td>
            </tr>
            <tr>
              <td>Child Saving Plan</td>
              <td>Rs 13,000/-</td>
              <td>Premium</td>
            </tr>
            <tr>
              <td>Family Health Insurance</td>
              <td>Rs 15,000/-</td>
              <td>Premium</td>
            </tr>
            <tr>
              <td>Group Health Insurance</td>
              <td>Rs 25,000/-</td>
              <td>Premium</td>
            </tr>
            <tr>
              <td>Zero Cost Term Plan</td>
              <td>Rs 50,000/-</td>
              <td>Premium</td>
            </tr>
        
          </tbody>
        </table>
        <button className="update-button"><a href='/dashe'>Back</a></button>
      </div>
    </>
  );
}

export default PriceList;