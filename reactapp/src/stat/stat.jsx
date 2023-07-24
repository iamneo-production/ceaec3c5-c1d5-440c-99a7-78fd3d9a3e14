import React from 'react';
import './stat.css';

const Stats = () => {
  return (
  
    <div className="stats-container">
      <h2>Life Insurance Statistics</h2>
      <div className="stats-grid">
        <div className="stat-item">
          <h3>Policyholders</h3>
          <p>2.5 million</p>
        </div>
        <div className="stat-item">
          <h3>Claims Paid</h3>
          <p>$1.8 billion</p>
        </div>
        <div className="stat-item">
          <h3>Policies Issued</h3>
          <p>5 million</p>
        </div>
        <div className="stat-item">
          <h3>Customer Satisfaction</h3>
          <p>98%</p>
        </div>
      </div>
    </div>
    
  );
};

export default Stats;