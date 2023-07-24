import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';
import axios from 'axios';


const Log = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault(); // Prevents the form from automatically submitting
    if (password.length < 8) {
      alert('Password must be at least 8 characters long.');
      return;
    }
    const login={"email":email,"password":password};
    const result =await axios.post("http://localhost:8080/auth/login",login);
    console.log(result);

    if (result.data === "Login Successful !") {

      toast.success('Login Successful !', {
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
      
          navigate('/dash');
      }, 1500);

  } else if (result.data === "Invalid Password") {
      toast.error('Invalid password!', {
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
      toast.error('Invalid Email ID !', {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
      });
      }
  }

  

  return (
    <section id='rohith'>
      <div className="holder">
        <div className="parent">
          <h3>LOGIN</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <input type="text" placeholder="Username or Email" required onChange={(e) => {setEmail(e.target.value)}}/>
              <span className="border"></span>
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <span className="border"></span>
            </div>
            <input type="submit" value="LOGIN" className="private-inp" />
            <p>
              Don't have an account?
              <a HREF='signup'>Sign Up</a>
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

export default Log;