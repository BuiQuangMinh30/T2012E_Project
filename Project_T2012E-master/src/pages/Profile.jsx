import React from "react";
import { Tab, Tabs,Container,Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
const Profile = () => {
  return (
    <>
      <Container className="container emp-profile">
          <Row>
            <Col sm={4}>
              <div className="profile-img">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                  alt=""
                />
                <div className="file btn btn-lg btn-primary">
                  Change Photo
                  <input type="file" name="file" />
                </div>
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
                <h5>Bùi Quang Minh</h5>
                <h6>Web Developer and Designer</h6>
                <p className="proile-rating">
                  RANKINGS : <span>8/10</span>
                </p>
                <Tabs
                  defaultActiveKey="home"
                  id="uncontrolled-tab-example"
                  className="mb-3"
                >
                  <Tab eventKey="home" title="Home">
                    {/* <Sonnet /> */}
                    <div
                      className="tab-pane fade show active"
                      id="home"
                      role="tabpanel"
                      aria-labelledby="home-tab"
                    >
                      <div className="row">
                        <div className="col-md-6">
                          <label>User Id</label>
                        </div>
                        <div className="col-md-6">
                          <p>Kshiti123</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label>Name</label>
                        </div>
                        <div className="col-md-6">
                          <p>Kshiti Ghelani</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label>Email</label>
                        </div>
                        <div className="col-md-6">
                          <p>kshitighelani@gmail.com</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label>Phone</label>
                        </div>
                        <div className="col-md-6">
                          <p>123 456 7890</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label>Profession</label>
                        </div>
                        <div className="col-md-6">
                          <p>Web Developer and Designer</p>
                        </div>
                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey="profile" title="Profile">
                    {/* <Sonnet /> */}
                    <div
                      className="tab-pane fade show active"
                      id="profile"
                      role="tabpanel"
                      aria-labelledby="profile-tab"
                    >
                      <div className="row">
                        <div className="col-md-6">
                          <label>Experience</label>
                        </div>
                        <div className="col-md-6">
                          <p>Expert</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label>Hourly Rate</label>
                        </div>
                        <div className="col-md-6">
                          <p>10$/hr</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label>Total Projects</label>
                        </div>
                        <div className="col-md-6">
                          <p>230</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label>English Level</label>
                        </div>
                        <div className="col-md-6">
                          <p>Expert</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label>Availability</label>
                        </div>
                        <div className="col-md-6">
                          <p>6 months</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <label>Your Bio</label>
                          <br />
                          <p>Your detail description</p>
                        </div>
                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey="edit-profile" title="Edit Profile">
                  <Row>
                    <Col sm={8} className="border-right">
                      <div className="p-3 py-5">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <h4 className="text-right">Profile Settings</h4>
                        </div>
                        <div className="row mt-2">
                          <div className="col-md-6">
                            <label className="labels">Name</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="first name"
                              value=""
                            />
                          </div>
                          <div className="col-md-6">
                            <label className="labels">Surname</label>
                            <input
                              type="text"
                              className="form-control"
                              value=""
                              placeholder="surname"
                            />
                          </div>
                        </div>
                        <div className="row mt-3">
                          <div className="col-md-12">
                            <label className="labels">Mobile Number</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="enter phone number"
                              value=""
                            />
                          </div>
                          <div className="col-md-12">
                            <label className="labels">Address Line 1</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="enter address line 1"
                              value=""
                            />
                          </div>
                          <div className="col-md-12">
                            <label className="labels">Address Line 2</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="enter address line 2"
                              value=""
                            />
                          </div>
                          <div className="col-md-12">
                            <label className="labels">Postcode</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="enter address line 2"
                              value=""
                            />
                          </div>
                          <div className="col-md-12">
                            <label className="labels">State</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="enter address line 2"
                              value=""
                            />
                          </div>
                          <div className="col-md-12">
                            <label className="labels">Area</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="enter address line 2"
                              value=""
                            />
                          </div>
                          <div className="col-md-12">
                            <label className="labels">Email ID</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="enter email id"
                              value=""
                            />
                          </div>
                          <div className="col-md-12">
                            <label className="labels">Education</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="education"
                              value=""
                            />
                          </div>
                        </div>
                        <div className="row mt-3">
                          <div className="col-md-6">
                            <label className="labels">Country</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="country"
                              value=""
                            />
                          </div>
                          <div className="col-md-6">
                            <label className="labels">State/Region</label>
                            <input
                              type="text"
                              className="form-control"
                              value=""
                              placeholder="state"
                            />
                          </div>
                        </div>
                        <div className="mt-5 text-center">
                          <button
                            className="btn btn-primary profile-button"
                            type="button"
                          >
                            Save Profile
                          </button>
                        </div>
                      </div>
                    </Col>
                    <Col sm={4}>
                      <div className="p-3 py-5">
                        <div className="d-flex justify-content-between align-items-center ">
                          {/* <span>Edit Experience</span> */}
                          <h4 class="text-right">Edit Experience</h4>
                         
                        </div>
                        <br />
                        <Col sm={12}>
                          <label className="labels">
                            Experience in Designing
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="experience"
                            value=""
                          />
                        </Col>{" "}
                        <br />
                        <div className="col-md-12">
                          <label className="labels">Additional Details</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="additional details"
                            value=""
                          />
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
