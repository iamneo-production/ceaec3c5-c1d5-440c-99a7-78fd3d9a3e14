import React, { useEffect } from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './dashboard.css';


const Container = styled.div`
  /* Styles for the container */
`;

const Input = styled.input`
  /* Styles for the input */
`;

const Label = styled.label`
  /* Styles for the label */
`;

const Nav = styled.nav`
  /* Styles for the nav */
`;

const Sidebar = () => {
  useEffect(() => {
    const body = document.querySelector("body");
    const sidebar = body.querySelector("nav");
    const toggle = body.querySelector(".toggle");
    const searchBtn = body.querySelector(".search-box");
    const modeSwitch = body.querySelector(".toggle-switch");
    const modeText = body.querySelector(".mode-text");

    toggle.addEventListener("click", () => {
      sidebar.classList.toggle("close");
    });

    searchBtn.addEventListener("click", () => {
      sidebar.classList.remove("close");
    });

    modeSwitch.addEventListener("click", () => {
      body.classList.toggle("dark");

      
    });
  }, []);

  return (
    <Container id='praj'>
      <Input id="menu__toggle" type="checkbox" />
      <Label className="menu_btn" htmlFor="menu_toggle">
        <span></span>
      </Label>
      <Nav className="sidebar">
        <header>
          <div className="image-text">
            <span className="image">
              <img src="https://cdn.dribbble.com/users/118246/screenshots/2943355/media/53f28b287e734843125bbc4d55647e6e.gif" alt="" />
            </span>
            <div className="text logo-text">
              <span className="name">NovaGuard</span>
            </div>
          </div>
          <i className="bx bx-chevron-right toggle"></i>
        </header>
        <div className="menu-bar">
          <div className="menu">
            <li className="search-box">
              <i className="bx bx-search icon"></i>
              <input type="text" placeholder="Search..." />
            </li>
            <ul className="menu-links">
              <li className="nav-link">
                <a href="dashe">
                  <i className="bx bx-home-alt icon"></i>
                  <span className="text nav-text">Dashboard</span>
                </a>
              </li>
              <li className="nav-link">
                <a href="prof">
                  <i className="bx bx-bar-chart-alt-2 icon"></i>
                  <span className="text nav-text">Profile</span>
                </a>
              </li>
              <li className="nav-link">
                <a href="stat">
                  <i className="bx bx-home-alt icon"></i>
                  <span className="text nav-text">Stats</span>
                </a>
              </li>
              <li className="nav-link">
                <a href="About">
                  <i className="bx bx-home-alt icon"></i>
                  <span className="text nav-text">About us</span>
                </a>
              </li>
              
            </ul>
          </div>
          <div className="bottom-content">
            <li className="">
              <a href="/">
                <i className="bx bx-log-out icon"></i>
                <span className="text nav-text">Logout</span>
              </a>
            </li>
            <li className="mode">
              <div className="sun-moon">
                <i className="bx bx-moon icon moon"></i>
                <i className="bx bx-sun icon sun"></i>
              </div>
             
              <div className="toggle-switch">
                <span className="switch"></span>
              </div>
            </li>
          </div>
        </div>
      </Nav>
      <section className="home">
        <div className="text">NOVA GUARD</div>
       <Card className="text-center">
       <div className="orders-container">

       <div className="orders-list">
         <div className="order-item">
           <h3>Affordable Options</h3>
           
           <ul>
             <li>NovaGuard is one of the largest partner for most health insurance companies. We prioritise your claims and ensure very smooth claims experience.Always ensure to review the details of the insurance policies thoroughly, including coverage limits, exclusions, deductibles, and any additional benefits or riders before making a decision. This will help you make an informed choice and select a policy that best meets your needs and budget. </li>
             
           </ul>
     
         </div>
         <div className="order-item">
           <h3>30 Min Claim Support</h3>
 
           <ul>
             <li>Our Claim specialists will reach your hospital or home in 30 minutes to support your health insurance claim.</li>
             <li>Live Chat Support: Implement a live chat feature that allows customers to interact with support representatives in real-time. This way, customers can get immediate assistance with their claims and questions.

             Dedicated Claim Support Section: Create a dedicated section on the portal where customers can access information about the claim process, FAQs, and step-by-step guidance on filing claims.
             
             Interactive Claim Forms: Provide interactive claim forms that are easy to fill out. Use intuitive UI/UX design to guide users through the necessary information required for the claim process.</li>
             
           </ul>
           
       
         </div>
         <div className="order-item">
           <h3>OFFERS</h3>
           <ul>
             
             <li>* More than 95% of Indians who have health insurance, are actually under-insured! Are you one of them?</li>
             <li>* Get a super top-up plan for just Rs. 3 per day!</li> 
             <li>* Get up to 25% Online discount</li>
             <li>* Get ₹5 Lakh Health Cover @ ₹300/Month</li> 
             <li>* 30 minutes claim support</li>
             <li>* Tax Benefits upto ₹ 75,000 under Sec. 80D</li>
             <li>* Instant Purchase Immediate Receipt Restoration Benefit on Sum Insured</li>
             <li>* Pre-hospitalization and Post hospitalization cover 10,000+ hospitals for cashless treatment.</li>
             
           </ul>
          
           
         </div>
         
       
       </div>
       
     </div>
      
     
    </Card>
      </section>
    </Container>
  );
};

export default Sidebar;