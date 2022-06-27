import React, { useState } from "react";
import { Form, Button, Row, Col, Tabs, Tab,Accordion } from "react-bootstrap";

const About = () => {
  const [key, setKey] = useState("home");
  const imgAbout =
    "https://www.dreamhost.com/blog/wp-content/uploads/2020/11/310ad4be-c64b-40c2-af35-7aeaf85dcb96_Great-about-us-pages-opt.jpg";
  return (
    <>
      <div className="wrapper">
        <div className="page-header">
           
                <h2 className="section-title" style={{textAlign: 'center'}}>About Us</h2>
            
         
        </div>

        <div className="about">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-6">
                <img src={imgAbout} alt="Image" />
              </div>
              <div className="col-md-6">
                <h2 className="section-title">Learn About Us</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                  vulputate. Aliquam metus tortor, auctor id gravida
                  condimentum, viverra quis sem. Curabitur non nisl nec nisi
                  scelerisque maximus. Aenean consectetur convallis porttitor.
                  Aliquam interdum at lacus non blandit.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                  vulputate. Aliquam metus tortor, auctor id gravida
                  condimentum, viverra quis sem. Curabitur non nisl nec nisi
                  scelerisque maximus. Aenean consectetur convallis porttitor.
                  Aliquam interdum at lacus non blandit.
                </p>
                <a className="btn" href="">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container section about-us mt-4">
          <Row>
            <Col md={7}>
              <div className="about-text">
                <h3>
                  Neque officiis dolore maiores et exercitationem quae est seda
                  lidera pat claero
                </h3>
              </div>
              <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
              >
                <Tab eventKey="home" title="Home">
                  <div className="tab-pane fade active show about">
                    <p className="fst-italic">
                    Consequuntur inventore voluptates consequatur aut vel et. Eos doloribus expedita. Sapiente atque consequatur minima nihil quae aspernatur quo suscipit voluptatem.
                    </p>
                    <div className="d-flex align-items-center mt-4">
                        <i className="fa fa-home"></i>
                        <h4>Repudiandae rerum velit modi et officia quasi facilis</h4>
                    </div>
                    <p>Laborum omnis voluptates voluptas qui sit aliquam blanditiis. Sapiente minima commodi dolorum non eveniet magni quaerat nemo et.</p>
                    <div className="d-flex align-items-center mt-4">
                        <i className="fa fa-home"></i>
                        <h4>Repudiandae rerum velit modi et officia quasi facilis</h4>
                    </div>
                    <p>Laborum omnis voluptates voluptas qui sit aliquam blanditiis. Sapiente minima commodi dolorum non eveniet magni quaerat nemo et.</p>

                    <div className="d-flex align-items-center mt-4">
                        <i className="fa fa-home"></i>
                        <h4>Repudiandae rerum velit modi et officia quasi facilis</h4>
                    </div>
                    <p>Laborum omnis voluptates voluptas qui sit aliquam blanditiis. Sapiente minima commodi dolorum non eveniet magni quaerat nemo et.</p>

                  </div>
                </Tab>
                <Tab eventKey="profile" title="Profile">
                  Không2
                </Tab>
               
              </Tabs>
            </Col>
            <Col md={5}>
              <div className="about-img">
                <img src={imgAbout} />
              </div>
            </Col>
          </Row>
        </div>

        <div className="section about container mt-4" style={{marginTop:'400px'}}>
            <Row>
                <div className="col-lg-5 align-items-stretch  img" style={{
                    height: '300px',
                    backgroundImage:'url(https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_420/https://trulyexperiences.com/blog/wp-content/uploads/2020/11/pexels-olya-kobruseva-5428833-scaled-e1605623269850-420x529.jpg )' }}>
                    
                </div>
                <div className="col-lg-7 d-flex flex-column about">
                    <div className="content px-xl-5">
                        <h3>Frequently Asked <strong>Questions</strong></h3>
                        <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
              </p>

                    </div>
                <Accordion defaultActiveKey={['0']} alwaysOpen style={{margin: '20px'}}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
                </div>
                
            </Row>
        </div>

        <div className="team about">
          <div className="container-fluid">
            <div className="section-header">
              <h2>Our Team</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec pretium ornare velit non
              </p>
            </div>
            <div className="row">
              <div className="col-sm-6 col-lg-3 ">
                <div className="team-item">
                  <div className="team-img">
                    <img src="img/team-1.jpg" alt="Team" />
                  </div>
                  <div className="team-text">
                    <h3>Member Name</h3>
                    <p>Designation</p>
                  </div>
                  <div className="team-social">
                    <a href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="">
                      <i className="fab fa-pinterest"></i>
                    </a>
                    <a href="">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3 ">
                <div className="team-item">
                  <div className="team-img">
                    <img src="img/team-2.jpg" alt="Team" />
                  </div>
                  <div className="team-text">
                    <h3>Member Name</h3>
                    <p>Designation</p>
                  </div>
                  <div className="team-social">
                    <a href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="">
                      <i className="fab fa-pinterest"></i>
                    </a>
                    <a href="">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3 ">
                <div className="team-item">
                  <div className="team-img">
                    <img src="img/team-3.jpg" alt="Team" />
                  </div>
                  <div className="team-text">
                    <h3>Member Name</h3>
                    <p>Designation</p>
                  </div>
                  <div className="team-social">
                    <a href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="">
                      <i className="fab fa-pinterest"></i>
                    </a>
                    <a href="">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3 ">
                <div className="team-item">
                  <div className="team-img">
                    <img src="img/team-4.jpg" alt="Team" />
                  </div>
                  <div className="team-text">
                    <h3>Member Name</h3>
                    <p>Designation</p>
                  </div>
                  <div className="team-social">
                    <a href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="">
                      <i className="fab fa-pinterest"></i>
                    </a>
                    <a href="">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="call-to-action about">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-9">
                <h2>Get A Free HTML Template</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam sit amet metus sit amet
                </p>
              </div>
              <div className="col-md-3">
                <a className="btn" href="https://htmlcodex.com/contact">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
