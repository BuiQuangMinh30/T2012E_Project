import axios from "axios";
import { Link, useLocation, NavLink } from "react-router-dom";
import { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form,Button } from "react-bootstrap";
import { useForm } from "react-hook-form";


const Login = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const password = useRef({});
  const name = useRef({});
  let history = useHistory();

  const apiUrl = "https://localhost:44399/api/Login";
  const onSubmit = async (e) => {
    e.preventDefault();
    //   debugger;
    const data = { Username: name, Password: password };
    axios.post(apiUrl, data).then((result) => {
      // debugger;

      const serializedState = JSON.stringify(result.data);
      var dataUser = localStorage.setItem("dataUser", serializedState);
      if (result.request.status == "200") history.push("/");
      else alert("Invalid User");
    });
  };

  return (
    <>
      <div
        id="main-wrapper"
        className="container"
        style={{
          margin: "0 auto",
          position: "absolute",
          top: "20%",
          left: "4%",
          backgroundColor: "#f6f9fc",
        }}
      >
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="card border-0">
              <div className="card-body p-0">
                <div className="row no-gutters">
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="mb-5">
                        <h3 className="h4 font-weight-bold text-theme">Login</h3>
                      </div>

                      <h6 className="h5 mb-0">Welcome back!</h6>
                      <p className="text-muted mt-2 mb-5">
                        Enter your email address and password to access admin
                        panel.
                      </p>

                      <form onSubmit={(e) => e.preventDefault()}>
                      <Form.Label htmlFor="inputUsername">
                          UserName
                        </Form.Label>
                        <Form.Control
                           placeholder="User name" {...register("name", {
                            required: {
                              value: true,
                              message: "You must specify your first name before moving forward"
                          }, 
                          pattern: {
                            value: /^[a-zA-Z]+$/,
                            message: "That's not a valid name where I come from..."
                          }
                          })}
                        />
                        {errors.name && (
                          <p style={{ color: "red" }}>{errors.name.message}</p>
                        )}
                        
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Enter your password"
                          {...register("password", {
                            required: "You must specify a password",
                            minLength: {
                              value: 8,
                              message:
                                "Password must have at least 8 characters",
                            },
                          })}
                        />
                        {errors.password && (
                          <p style={{ color: "red" }}>
                            {errors.password.message}
                          </p>
                        )}
                       <br/>
                       <Button type="submit" onClick={handleSubmit(onSubmit)}>
                          Login
                        </Button>
                        <a
                          href="#l"
                          className="forgot-link floatright text-primary"
                        >
                          Forgot password?
                        </a>
                      </form>
                    </div>
                  </div>

                  <div className="col-lg-6 d-none d-lg-inline-block">
                    <div className="account-block rounded-right">
                      <div className="overlay rounded-right"></div>
                      <div className="account-testimonial">
                        <h4 className="text-white mb-4">
                          This beautiful theme yours!
                        </h4>
                        <p className="lead text-white">
                          "Best investment i made for a long time. Can only
                          recommend it for other users."
                        </p>
                        <p>- Admin User</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end card-body --> */}
            </div>
            {/* <!-- end card --> */}

            <p className="text-muted text-center mt-3 mb-0">
              Don't have an account?{" "}
              <Link to='/register'>
              <a href="#" className="text-primary ml-1">
                register
              </a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
