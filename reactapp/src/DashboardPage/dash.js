import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import { FaMoneyBill } from 'react-icons/fa';

import './dash.css';
import Order from './Order';
import PriceList from './price';
import Sidebar from '../dashboard/dashboard';
const Dashe = () => {
  const [currentPage, setCurrentPage] = useState('Sidebar');
  const navigate = useNavigate();

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleLogout = () => {
  
    navigate('/log');
  };

  let content = null;
  switch (currentPage) {
    case 'dashboard':
      content = <Sidebar/>;
      break;
    case 'reports':
      content = <Order />;
      break;
    case 'settings':
      content = <PriceList />;
      break;
    default:
      content = <Order/>;
      break;
  }

  return (
    
    <div className="dashboard">
      <div className="policy">
        <div className="sidebar-heading">Policy Details</div><br></br>
        
        <ul className="sidebar-menu">
          <li
            className={`sidebar-menu-item ${
              currentPage === 'dashboard' ? 'active' : ''
            }`}
            onClick={() => handlePageChange('dashboard')}
          >
            
          </li>
          <li
            className={`sidebar-menu-item ${
              currentPage === 'reports' ? 'active' : ''
            }`}
            onClick={() => handlePageChange('reports')}
          >
            <span className="sidebar-menu-item-icon"></span>
            <span>
           <span className="sidebar-menu-item-text"><a href='/price'>Existing Policies</a></span>
            </span><br></br>
            <span className="sidebar-menu-item-icon"></span>
          <span className="item-text"><a href='/Pay'>Make Payment</a></span>
          <span className="sidebar-menu-item-icon"></span>
          <span><br></br>
          <span className="item-text">Your Cart</span>
          </span>
          </li>
          <li
            className={`sidebar-menu-item ${
              currentPage === 'settings' ? 'active' : ''
            }`}
            onClick={() => handlePageChange('settings')}
          >
           
          </li>
          
        
        </ul>
      </div>
      <div className="content">{content}</div>
    </div>
  );
};

export default Dashe;