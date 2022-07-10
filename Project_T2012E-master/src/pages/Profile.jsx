import React, { useEffect, useState } from "react";
import axios from "axios";
import { Tab, Tabs, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import useLocationForm from "../utils/useLocationForm";
import Select from "react-select";
import { useHistory } from "react-router-dom";

import "./css/Profile.css";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';

const Profile = (props) => {
  // console.log("props", props);
  const api = `https://elevatorsystemdashboard.azurewebsites.net/api/Profile`;
  const [profile, setProfile] = useState({});
  const [orders, setOrders] = useState([]);
  const [order, setOrder] = useState({});
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address1, setAddress1] = useState("");
  // const [state, setState] = useState("");
  const [error, setError] = useState(null);
  const [file, setFile] = useState();
  const [update, setUpdate] = useState(null);
  let history = useHistory();

  useEffect(() => {
    async function fetchMyAPI() {
      var getToken = JSON.parse(localStorage.getItem("dataUser"));

      if (!getToken) {
        history.push("/login");
      } else {
        const getToken1 = getToken.access_token;
        let resData = await axios.get(api, {
          headers: {
            Authorization: `Bearer ${getToken1}`,
          },
        });
        setProfile(resData.data.data);
      }
    }

    fetchMyAPI();
  }, [update, error]);

  useEffect(() => {
    async function fetchMyAPI() {
      var getToken = JSON.parse(localStorage.getItem("dataUser"));

      if (!getToken) {
        history.push("/login");
      } else {
        const getToken1 = getToken.access_token;
        let resData = await axios.get(
          "https://elevatorsystemdashboard.azurewebsites.net/api/getOrderByIdUser",
          {
            headers: {
              Authorization: `Bearer ${getToken1}`,
            },
          }
        );
        // console.log('resstda', resData);
        setOrders(resData.data);
      }
    }

    fetchMyAPI();
  }, []);

  useEffect(() => {
    async function fetchMyAPI() {
      var getToken = JSON.parse(localStorage.getItem("dataUser"));

      if (!getToken) {
        history.push("/login");
      } else {
        const getToken1 = getToken.access_token;
        let resData = await axios.get(
          "https://elevatorsystemdashboard.azurewebsites.net/api/Orders/43",
          {
            headers: {
              Authorization: `Bearer ${getToken1}`,
            },
          }
        );
        setOrder(resData.data);
      }
    }

    fetchMyAPI();
  }, []);

  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  const { state, onCitySelect, onDistrictSelect, onWardSelect, onSubmit } =
    useLocationForm(false);

  const {
    cityOptions,
    districtOptions,
    wardOptions,
    selectedCity,
    selectedDistrict,
    selectedWard,
  } = state;

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Invalid Email");
    }
    if (!username && !email && !phone && !address1) {
      toast.error("Lỗi rồi, phải nhập đúng email", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    if (!error) {
      var getToken = JSON.parse(localStorage.getItem("dataUser"));
      setUpdate("done");
      const getToken1 = getToken.access_token;
      const requestOptions = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken1}`,
        },
        body: JSON.stringify({
          UserName: username ? username : profile.UserName,
          Email: email ? email : profile.Email,
          City: state.selectedCity.label ? state.selectedCity.label : "",
          State: state.selectedDistrict.label
            ? state.selectedDistrict.label
            : "",
          Country: state.selectedWard.label ? state.selectedWard.label : "",
          PhoneNumber: phone ? phone : profile.PhoneNumber,
          AddressLine1: address1 ? address1 : profile.AddressLine1,
          AddressLine2: file,
        }),
      };
      fetch(
        `https://elevatorsystemdashboard.azurewebsites.net/api/updateProfile`,
        requestOptions
      ).then((response) => response.json());
      window.location.reload();
    }
  };

  const currentDate = new Date();

  const options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  return (
    <>
      <Container className="container emp-profile">
        {/* <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <ToastContainer /> */}
        <Row>
          <Col sm={4}>
            <div className="profile-img">
              <img
                src={
                  // profile.AddressLine2
                  //   ? profile.AddressLine2
                  //   :
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                }
                alt=""
              />
            </div>
            <div className="profile-work">
              <p>ORDER SUCCESS</p>
              {orders.map((item, index) => {
                return (
                  <>
                    <a href="">{item.SKU} </a>
                    <br />
                  </>
                );
              })}
            </div>
          </Col>
          <Col sm={8}>
            <div className="profile-head">
              <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab eventKey="profile" title="Profile">
                  <div
                    className="tab-pane fade show active"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <label>Name</label>
                      </div>
                      <div className="col-md-6">
                        <h6>{profile.UserName}</h6>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Email</label>
                      </div>
                      <div className="col-md-6">
                        <h6>{profile.Email}</h6>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Phone</label>
                      </div>
                      <div className="col-md-6">
                        <h6>{profile.PhoneNumber}</h6>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Address</label>
                      </div>
                      <div className="col-md-6">
                        <h6>{profile.AddressLine1}</h6>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Order</label>
                      </div>
                      <div className="col-md-6">
                        <h6>{orders.length}</h6>
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="edit-profile" title="Edit Profile">
                  <Row>
                    <Col sm={10} className="border-right">
                      <div className="p-3 py-5">
                        <div className="row">
                          {/* <form > */}
                          <div className="col-md-12">
                            <label className="labels">Username</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Username"
                              value={username ? username : profile.UserName}
                              onChange={(e) => setUsername(e.target.value)}
                            />
                          </div>
                          <div className="col-md-12">
                            <label className="labels">Email</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Email"
                              value={email ? email : profile.Email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>

                          <div className="col-md-12">
                            <label className="labels">Mobile Number</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter phone number"
                              // value={profile.PhoneNumber}
                              value={phone ? phone : profile.PhoneNumber}
                              onChange={(e) => setPhone(e.target.value)}
                            />
                          </div>
                          <div className="col-md-12">
                            <div className="row">
                              <div className="col-md-6">
                                <label className="labels">Choose Image</label>
                                <input
                                  type="file"
                                  className="form-control"
                                  onChange={handleChange}
                                />
                              </div>
                              <div className="col-md-5">
                                <img src={file ? file : profile.AddressLine2} />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <label className="labels">Detailed Address</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter address"
                              // value={profile.AddressLine1}
                              value={address1 ? address1 : profile.AddressLine1}
                              onChange={(e) => setAddress1(e.target.value)}
                            />
                          </div>
                          <div className="col-md-12">
                            {/* <form onSubmit={onSubmit}> */}
                            <label className="labels">Address</label>
                            <br />
                            <Select
                              name="cityId"
                              key={`cityId_${selectedCity?.value}`}
                              isDisabled={cityOptions.length === 0}
                              options={cityOptions}
                              onChange={(option) => onCitySelect(option)}
                              placeholder="Tỉnh/Thành"
                              defaultValue={selectedCity}
                            />
                            <br />

                            <Select
                              name="districtId"
                              key={`districtId_${selectedDistrict?.value}`}
                              isDisabled={districtOptions.length === 0}
                              options={districtOptions}
                              onChange={(option) => onDistrictSelect(option)}
                              placeholder="Quận/Huyện"
                              defaultValue={selectedDistrict}
                            />
                            <br />
                            <Select
                              name="wardId"
                              key={`wardId_${selectedWard?.value}`}
                              isDisabled={wardOptions.length === 0}
                              options={wardOptions}
                              placeholder="Phường/Xã"
                              onChange={(option) => onWardSelect(option)}
                              defaultValue={selectedWard}
                            />
                          </div>
                          {/* </form> */}

                          <div className="mt-5 text-center">
                            <button
                              className="btn btn-primary profile-button"
                              type="button"
                              onClick={handleSubmitClick}
                            >
                              Save Profile
                            </button>
                          </div>
                          {/* </form> */}
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Tab>
                <Tab eventKey="shipping" title="Shipping Address">
                  <div
                    className="tab-pane fade show active"
                    id="shipping"
                    role="tabpanel"
                    aria-labelledby="shipping-tab"
                  >
                    <div class="card1">
                      <div class="title">Purchase Reciept</div>
                      <div class="info">
                        <div class="row">
                          <div class="col-7">
                            <span id="heading">Date</span>
                            <br />
                            <span id="details">
                              {order && order.order
                                ? order.order.map((item, index) => {
                                    return (
                                      <>
                                        {new Date(
                                          item.CreatedAt
                                        ).toLocaleDateString()}
                                      </>
                                    );
                                  })
                                : ""}
                            </span>
                          </div>
                          <div class="col-5 pull-right">
                            <span id="heading">Order No.</span>
                            <br />
                            <span id="details">
                              {order && order.order
                                ? order.order.map((item, index) => {
                                    return <>{item.SKU}</>;
                                  })
                                : ""}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="pricing">
                        <div class="row">
                          {order && order.dataOrder ? (
                            order.dataOrder.map((item, index) => {
                              return (
                                <>
                                  <div class="col-6">
                                    <span id="name">{item.Elevator.Name}</span>
                                  </div>
                                  <div class="col-3">
                                    <span id="price">
                                      {item.Elevator.Price} $
                                    </span>
                                  </div>
                                  <div class="col-3">
                                    <span id="price">
                                      {item.Quantity} (Quantity)
                                    </span>
                                  </div>
                                </>
                              );
                            })
                          ) : (
                            <>
                              <div>Rỗng</div>
                            </>
                          )}
                        </div>
                        <div class="row">
                          <div class="col-9">
                            <span id="name">Shipping</span>
                          </div>
                          <div class="col-3">
                            <span id="price">Free</span>
                          </div>
                        </div>
                      </div>
                      <div class="total">
                        <div class="row">
                          <div class="col-9"></div>
                          <div class="col-3">
                            <big>
                              {order && order.order
                                ? order.order.map((item, index) => {
                                    return <>{item.Total}</>;
                                  })
                                : ""}
                            </big>
                          </div>
                        </div>
                      </div>
                      <div class="tracking">
                        <div class="title">Tracking Order</div>
                      </div>
                      <div class="progress-track">
                        <ul id="progressbar">
                          <li class="step0 active " id="step1">
                            Ordered
                          </li>
                          <li class="step0 active text-center" id="step2">
                            Shipped
                          </li>
                          <li class="step0 active text-right" id="step3">
                            On the way
                          </li>
                          <li class="step0 text-right" id="step4">
                            Delivered
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
