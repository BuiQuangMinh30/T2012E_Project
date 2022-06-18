import React, { useRef, useEffect, useState } from "react";
// import "../sass/components/_login.scss";

const Login = () => {
  const loginRef = useRef(null);
  const loginInfoRef = useRef(null);
  const loginShowRef = useRef(null);
  const resInfoRef = useRef(null);
  const [checked, setChecked] = useState(true);
  const [isActive, setIsActive] = useState(false);
  
  useEffect(() => {
    loginShowRef.current.classList.add("show-log-panel");
  }, []);
  const hanldeRegister = (event) => {
    setChecked(false);
    setIsActive(true);

    if (isActive) {
      resInfoRef.current.classList.remove("register-info-box");
      loginInfoRef.current.classList.add("login-info-box");
    }
  };
  const hanldeLogin = () => {
    setChecked(true);
    setIsActive(false);

    if (!isActive) {
      resInfoRef.current.classList.remove("register-info-box");
      loginInfoRef.current.classList.add("login-info-box");
    }
  };

  const [values, setValues] = useState({
     name: '',
     email: '',
     gender: ''
   })
  
   const [validations, setValidations] = useState({
     name: '',
     email: '',
     gender: ''
   })
   
   const validateAll = () => {
     const { name, email, gender } = values
     const validations = { name: '', email: '', gender: '' }
     let isValid = true
     
     if (!name) {
       validations.name = 'Name is required'
       isValid = false
     }
     
     if (name && name.length < 3 || name.length > 50) {
       validations.name = 'Name must contain between 3 and 50 characters'
       isValid = false
     }
     
     if (!email) {
       validations.email = 'Email is required'
       isValid = false
     }
     
     if (email && !/\S+@\S+\.\S+/.test(email)) {
       validations.email = 'Email format must be as example@mail.com'
       isValid = false
     }
     
     if (!gender) {
       validations.gender = 'Gender is required'
       isValid = false
     }
     
     if (!isValid) {
       setValidations(validations)
     }
     
     return isValid
   }
 
   const validateOne = (e) => {
     const { name } = e.target
     const value = values[name]
     let message = ''
     
     if (!value) {
       message = `${name} is required`
     }
     
     if (value && name === 'name' && (value.length < 3 || value.length > 50)) {
       message = 'Name must contain between 3 and 50 characters'
     }
 
     if (value && name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
       message = 'Email format must be as example@mail.com'
     }
     
     setValidations({...validations, [name]: message })
   }
   
   const handleChange = (e) => {
     const { name, value } = e.target
     setValues({...values, [name]: value })
   }
 
   const handleSubmit = (e) => {
     e.preventDefault()
 
     const isValid = validateAll()
     
     if (!isValid) {
       return false
     }
 
     console.log('value', values)
   }
   
   const { name, email, gender } = values
 
   const { 
     name: nameVal, 
     email: emailVal, 
   } = validations
  return (
     
    <>
      <div className="login-reg-panel" ref={loginRef}>
        {!checked && (
          <div className="login-info-box" ref={loginInfoRef}>
            <h2>Have an account?</h2>
            <p>Click the login button</p>
            <label id="label-register" htmlFor="log-reg-show" onClick={hanldeLogin}>
              Login
            </label>
            <input
              type="radio"
              name="active-log-panel"
              id="log-reg-show"
              checked="checked"
            />
          </div>
        )}

        {checked && (
          <div>
            <div className="register-info-box" ref={resInfoRef}>
              <h2>Don't have an account?</h2>
              <p>Click the subscribe button</p>
              <label
                id="label-login"
                htmlFor="log-login-show"
                onClick={hanldeRegister}
              >
                Register
              </label>
              <input type="radio" name="active-log-panel" />
            </div>
          </div>
        )}

        <div className={isActive ? `right-log white-panel` : `white-panel`}>
          <div
            className={!isActive ? `show-log-panel login-show` : `login-show`}
            ref={loginShowRef}
          >
            <h2>LOGIN</h2>
             <form>
             <input type="text" placeholder="Email"  value={email} 
                onChange={handleChange}
                onBlur={validateOne}/>
                <div>{emailVal}</div>
            <input type="password" placeholder="Password"  value={name} 
                onChange={handleChange}
                onBlur={validateOne}/>
                <div>{nameVal}</div>
               </form>  
            <input type="button" value="Login" onClick={handleSubmit}/>
            <a href="a">Forgot password?</a>
          </div>
          <div
            className={
              isActive ? `show-log-panel register-show` : `register-show`
            }
          >
            <h2>REGISTER</h2>
            <input type="text" placeholder="Email" value={email} 
                onChange={handleChange}
                onBlur={validateOne}/>
            <input type="password" placeholder="Password"  value={name} 
                onChange={handleChange}
                onBlur={validateOne}/>
            <input type="password" placeholder="Confirm Password" />
            <input type="button" value="Register" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
