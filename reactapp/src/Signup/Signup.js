import React, { useState } from 'react';
import './Signup.css'
// import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Sig = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  
    if (!password.match(passwordRegex)) {
      alert(
        'Password must be at least 8 characters long and contain at least one letter and one number.'
      );
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords don't match. Please re-enter your passwords.");
      return;
    }

    const reg={"username": username, "email":email, "password": password};
    console.log(reg);
    const result=await axios.post("http://localhost:8080/add",reg);
    console.log(result.data);

      
      if (result.data === "Signup Successful !") {
        toast.success('Signup Successful !', {
          position: "bottom-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setTimeout(() => {
          navigate('/login');
        }, 1500);
          
        
      } else if (result.data === "Email ID Already Exists") {
        toast.error('Email ID Already Exists', {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      
      
    } else {
      console.log(result.data);
      
      }
   };
  return (
    <section id='rohith'>
      <div className="holder">
        <div className="parent">
          <h3>SIGN UP</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <input type="text" placeholder="Name *" value={username} required onChange={(e) => {setUsername(e.target.value)}}/>
              <span className="border"></span>
            </div>
            <div>
              <input
                type="email"
                placeholder="Email *"
                required
                value={email}
                onChange={(e) => {setEmail(e.target.value)}}
              />
              <span className="border"></span>
            </div>
            <div>
              <input
                type="password"
                placeholder="Password *"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <span className="border"></span>
            </div>
            <div>
              <input
                type="password"
                placeholder="Confirm Password *"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                required
              />
              <span className="border"></span>
            </div>
            <input type="submit" value="Register" className="private-inp" />
            <p>
              Already Have an Account?
              <a href="/Login">Login Here</a>
            </p>
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Sig;