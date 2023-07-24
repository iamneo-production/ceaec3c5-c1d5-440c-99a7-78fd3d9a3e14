import React from 'react';
import './landingpage.css';

const LandingPage = () => {
  return (
    
    <div className="landing-page">
      <header>
        <div className="contae">
          <a href="#" className="logo"> <b>Nova Guard Insurance</b></a>
          <ul className="links">
            <li><a href='/'>Home</a></li>
            <li><a href='/About'>About Us</a></li>
            <li><a href='/Contact'>Feedback</a></li>
            <a href='/Login'><li>Login</li></a>
          </ul>
        </div>
      </header>
      <div className="content">
        <div className="contae">
          <div className="info">
            <h1>Are You New Here!</h1>
            <p>NovaGuard offers various life insurance products that provide financial protection to policyholders and their families in the event of unfortunate circumstances such as death, disability, or critical illness...</p>
            <a href='/signup'><button>Signup</button></a>
          </div>
          <div className="image">
            <img src="https://img.freepik.com/free-vector/injury-concept-illustration_114360-9362.jpg?size=626&ext=jpg&ga=GA1.1.1548176464.1688970544&semt=sph" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
