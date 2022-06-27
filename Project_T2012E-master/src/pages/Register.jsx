import { useState, useRef } from "react";
import axios from "axios";
import { Link, useLocation, NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Register = (props) => {
  const [navigate, setNavigate] = useState(false);
  let history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const password = useRef({});
  const email = useRef({});
  const name = useRef({});
  // password.current = watch("password", "");

  const apiUrl = "https://localhost:44399/api/Register";
  const onSubmit = async (e) => {
    e.preventDefault();
    const data1 = { Email: email, Password: password, Username: name };
    axios.post(apiUrl, data1).then((result) => {
      console.log("data", result.data);
      if (result.data.Status == "Invalid") alert("Invalid User");
      else history.push("/login");
    });
  };

  return (
    <>
      <div
        id="main-wrapper"
        class="container"
        style={{
          margin: "0 auto",
          position: "absolute",
          top: "10%",
          left: "5%",
          backgroundColor: "#f6f9fc",
        }}
      >
        <div class="row justify-content-center">
          <div class="col-xl-10">
            <div class="card border-0">
              <div class="card-body p-0">
                <div class="row no-gutters">
                  <div class="col-lg-6">
                    <div class="p-5">
                      <div class="mb-5">
                        <h3 class="h4 font-weight-bold text-theme">Register</h3>
                      </div>

                      <h6 class="h5 mb-0">Welcome back!</h6>
                      <p class="text-muted mt-2 mb-5">
                        Enter your email address and password to access admin
                        panel.
                      </p>

                      <form onSubmit={(e) => e.preventDefault()}>
                        <Form.Label htmlFor="inputUsername">
                          UserName
                        </Form.Label>
                        <Form.Control
                          placeholder="User name"
                          {...register("name", {
                            required: {
                              value: true,
                              message:
                                "You must specify your first name before moving forward",
                            },
                            pattern: {
                              value: /^[a-zA-Z]+$/,
                              message:
                                "That's not a valid name where I come from...",
                            },
                          })}
                        />

                        {errors.name && (
                          <p style={{ color: "red" }}>{errors.name.message}</p>
                        )}
                        <Form.Label htmlFor="inputEmail">Email</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Email"
                          {...register("email", {
                            required: {
                              value: true,
                              message:
                                "You need to specify a valid email address",
                            },
                            pattern: {
                              value: /^\S+@\S+$/i,
                              message: "I think I said _valid_, didn't I?",
                            },
                          })}
                        />
                        {errors.email && (
                          <p style={{ color: "red" }}>{errors.email.message}</p>
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
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                          placeholder="Enter your confirm password"
                          type="password"
                          {...register("password_repeat", {
                            validate: (value) =>
                              value === password.current ||
                              "The passwords do not match",
                          })}
                        />
                        {errors.password_repeat && (
                          <p style={{ color: "red" }}>
                            {errors.password_repeat.message}
                          </p>
                        )}
                        <br />
                        <Button type="submit" onClick={handleSubmit(onSubmit)}>
                          Register
                        </Button>
                        <a
                          href="#l"
                          class="forgot-link floatright text-primary"
                        >
                          Forgot password?
                        </a>
                      </form>
                    </div>
                  </div>

                  <div class="col-lg-6 d-none d-lg-inline-block">
                    <div class="account-block rounded-right">
                      <div class="overlay rounded-right"></div>
                      <div class="account-testimonial">
                        <h4 class="text-white mb-4">
                          This beautiful theme yours!
                        </h4>
                        <p class="lead text-white">
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

            <p class="text-muted text-center mt-3 mb-0">
              Do have an account?{" "}
              <Link to="/login">
                <a href="" class="text-primary ml-1">
                  login
                </a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
