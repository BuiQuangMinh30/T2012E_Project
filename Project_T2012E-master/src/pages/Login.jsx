import axios from "axios";
import { Link, useLocation, NavLink } from "react-router-dom";
import "./css/Login.css";
import { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Login = (props) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  let history = useHistory();

  const apiUrl = "https://elevatorsystemdashboard.azurewebsites.net/api/Login";
  const onSubmit = async (e) => {
    e.preventDefault();
    const data = { Username: name, Password: password };
    console.log('data', data)
    axios.post(apiUrl, data).then((result) => {

      const serializedState = JSON.stringify(result.data);
      var dataUser = localStorage.setItem("dataUser", serializedState);
      if (result.request.status == "200") history.push("/");
      else alert("Invalid User");
    });
  };

  const [isSignUp, setSignUp] = useState(false);
  const signUpButton = () => {
    setSignUp(false);
  };  
  const signInButton = () => {
    setSignUp(true);
  };
  return (
    <>
      
     <div className="body-container">
     <div className={`container12 ${ isSignUp ? " right-panel-active" : ""}`} id="container">
        <div className="form-container sign-up-container">
          <form>
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button >Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your account</span>
            <input type="text" placeholder="Username" onChange={(e)=> setName(e.target.value)}/>
            <input type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)}/>
            <a href="#">Forgot your password?</a>
            <button onClick={onSubmit}>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost" id="signIn" onClick={signUpButton}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" id="signUp"  onClick={signInButton}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
     </div>

    </>
  );
};

export default Login;
