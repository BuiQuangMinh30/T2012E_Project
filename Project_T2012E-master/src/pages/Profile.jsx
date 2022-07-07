import React, { useEffect, useState } from "react";
import axios from "axios";
import { Tab, Tabs, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import useLocationForm from "../utils/useLocationForm";
import Select from "react-select";

const Profile = (props) => {
  const api = `https://elevatorsystemdashboard.azurewebsites.net/api/Profile`;
  const [profile, setProfile] = useState({});

  useEffect(() => {
    async function fetchMyAPI() {
      var getToken = JSON.parse(localStorage.getItem("dataUser"));
      const getToken1 = getToken.access_token;
      let resData = await axios.get(api, {
        headers: {
          Authorization: `Bearer ${getToken1}`,
        },
      });
      setProfile(resData.data.data);
    }
    fetchMyAPI();
  }, []);

  // const user = profile.UserName;
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  // const [state, setState] = useState("");
  const [error, setError] = useState(null);
  const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
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
  console.log('city', state.selectedDistrict)

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
    if (!error) {
      var getToken = JSON.parse(localStorage.getItem("dataUser"));
      const getToken1 = getToken.access_token;
      const requestOptions = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken1}`,
        },
        body: JSON.stringify({
          Email: email,
          UserName: username,
          City: state.selectedCity.label,
          State: state.selectedDistrict.label,
          Country: state.selectedWard.label,
          PhoneNumber: phone,
          AddressLine1: address1,
          AddressLine2: file,
        }),
      };
      fetch(
        `https://elevatorsystemdashboard.azurewebsites.net/api/updateProfile`,
        requestOptions
      ).then((response) => response.json());
    }
  };
  // console.log('propfile', profile);

  return (
    <>
      <Container className="container emp-profile">
        <Row>
          <Col sm={4}>
            <div className="profile-img">
              <img
                src={profile ? profile.AddressLine2 : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" }
                alt=""
              />
              {/* <div className="file btn btn-lg btn-primary">
                Change Photo
                <input type="file" name="file" />
              </div> */}
            </div>
            <div className="profile-work">
              <p>WORK LINK</p>
              <a href="">Website Link</a>
              <br />
              <a href="">Bootsnipp Profile</a>
              <br />
              <a href="">Bootply Profile</a>
              <p>SKILLS</p>
              <a href="">Web Designer</a>
              <br />
              <a href="">Web Developer</a>
              <br />
              <a href="">WordPress</a>
              <br />
              <a href="">WooCommerce</a>
              <br />
              <a href="">PHP, .Net</a>
              <br />
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
                              value={username}
                              onChange={(e) => setUsername(e.target.value)}
                            />
                          </div>
                          <div className="col-md-12">
                            <label className="labels">Email</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Email"
                              // value={profile.Email}
                              value={email}
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
                            <img src={file} />
                            </div>
                           </div>
                          </div>
                          <div className="col-md-12">
                            <label className="labels">Address</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter address"
                              // value={profile.AddressLine1}
                              onChange={(e) => setAddress1(e.target.value)}
                            />
                          </div>
                          
                           
                          {/* <form onSubmit={onSubmit}> */}
                            <Select
                              name="cityId"
                              key={`cityId_${selectedCity?.value}`}
                              isDisabled={cityOptions.length === 0}
                              options={cityOptions}
                              onChange={(option) => onCitySelect(option)}
                              placeholder="Tỉnh/Thành"
                              defaultValue={selectedCity}
                            />
                            <br/>
                            <br/>
                            <br/>

                            <Select
                              name="districtId"
                              key={`districtId_${selectedDistrict?.value}`}
                              isDisabled={districtOptions.length === 0}
                              options={districtOptions}
                              onChange={(option) => onDistrictSelect(option)}
                              placeholder="Quận/Huyện"
                              defaultValue={selectedDistrict}
                            />
 <br/>
                            <br/>
                            <br/>
                            <Select
                              name="wardId"
                              key={`wardId_${selectedWard?.value}`}
                              isDisabled={wardOptions.length === 0}
                              options={wardOptions}
                              placeholder="Phường/Xã"
                              onChange={(option) => onWardSelect(option)}
                              defaultValue={selectedWard}
                            />
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
              </Tabs>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
