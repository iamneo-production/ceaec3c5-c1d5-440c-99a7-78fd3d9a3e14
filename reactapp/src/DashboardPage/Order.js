import React from 'react';
  import './Order.css';
  import axios from 'axios';
 
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  function Order() {
    // Function to send policy data to the backend
  const addPolicyToDatabase = (x) => {
    // const reg = {"policy_name":policyName , "policy_number":policyNumber , "type":type , "duration":duration};
    // console.log(reg);
    axios.post('http://localhost:8080/policies', x)
      .then((response) => {
        console.log(response.data); // Assuming the backend returns a success message
        toast.success("Policy Added to Your Account Successfully");
      })
      .catch((error) => {
        console.error('Error adding policy:', error);
        toast.error("error");
      });
  };

  const handleAddPolicy = (policyadding) => {
    addPolicyToDatabase(policyadding);
    // toast.success("Policy Added to Your Account Successfully");
  };
    return (
      <>
<ToastContainer/>
        <div className="orders-container">
          <h1>Policies That We Offer!</h1>
          <div className="orders-list">
            <div className="order-item">
              <h3>PolicyNumber: 41</h3>
             
              <ul>
                <li>policyName: JEEVAN AMRIT</li>
                
                <li>Type: Endowment</li>
                <li>duration: 24 months</li>
                
              </ul>
              <button className="btn-prepare"onClick={() => handleAddPolicy({
                policyName: 'JEEVAN AMRIT',
                policyNumber: '41',
                type: 'Endowment',
                duration: '24 months',
              })}>Add Policy</button>
            </div>
            <div className="order-item">
            <h3>PolicyNumber: 55</h3>
             
            <ul>
              <li>policyName: Term Life Insurance</li>
              
              <li>Type: Endowment</li>
              <li>duration: 48 months</li>
              
            </ul>
            <button className="btn-prepare"onClick={() => handleAddPolicy({
              policyName: 'Term Life Insurance',
              policyNumber: '55',
              type: 'Endowment',
              duration: '48 months',
             })}>Add Policy</button>
            </div>
            <div className="order-item">
            <h3>PolicyNumber: 896</h3>
             
            <ul>
              <li>policyName: Whole Life Insurance</li>
              
              <li>Type: Endowment</li>
              <li>duration: 30 months</li>
              
            </ul>
             
            <button className="btn-prepare"onClick={() => handleAddPolicy({
              policyName: 'Whole Life Insurance',
              policyNumber: '896',
              type: 'Endowment',
              duration: '30 months',
             })}>Add Policy</button>
            </div>
            <div className="order-item">
            <h3>PolicyNumber: 40</h3>
             
            <ul>
              <li>policyName: Universal Life Insurance</li>
              
              <li>Type: Endowment</li>
              <li>duration: 35 months</li>
              
            </ul>
              
            <button className="btn-prepare"onClick={() => handleAddPolicy({
              policyName: 'Universal Life Insurance',
              policyNumber: '40',
              type: 'Endowment',
              duration: '35 months',
             })}>Add Policy</button>
            </div>
            <div className="order-item">
            <h3>PolicyNumber: 2222</h3>
             
            <ul>
              <li>policyName: Variable Life Insurance</li>
              
              <li>Type: Endowment</li>
              <li>duration: 50 months</li>
              
            </ul>
       
            <button className="btn-prepare"onClick={() => handleAddPolicy({
              policyName: 'Variable Life Insurance',
              policyNumber: '2222',
              type: 'Endowment',
              duration: '50 months',
             })}>Add Policy</button>
            </div>
            <div className="order-item">
            <h3>PolicyNumber: 50</h3>
             
            <ul>
              <li>policyName: Group Life Insurance</li>
              
              <li>Type: Endowment</li>
              <li>duration: 60 months</li>
              
            </ul>
              
            <button className="btn-prepare"onClick={() => handleAddPolicy({
              policyName: 'Group Life Insurance',
              policyNumber: '50',
              type: 'Endowment',
              duration: '60 months',
             })}>Add Policy</button>
            </div>
          
          </div>
          
        </div>
        <button className="btn-prepare1"><a href='/dash'>Back</a></button>
    
      </>
    );
  }

  export default Order;
