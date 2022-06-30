import React from "react";
import {
  Tab,
  Tabs,
  Container,
  Row,
  Col,
  Form,
  Group,
  Button,
} from "react-bootstrap";

const AboutUs = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-center" style={{backgroundColor: 'rgb(248 248 248)', marginTop: '150px', }}>
          <Col sm={12}>
            <div className="wrapper">
              <Row>
                <Col sm={6}>
                  <div className=" w-100 p-md-5">
                    <h2 style={{color:'#4267b2'}}>ABOUT US</h2>
                    {/* <h3>Company elevator introduction</h3> */}
                    <br/>
                    <p>
                    ToangCSharp Company is one of the first joint venture home elevator companies in Vietnam market. With nearly 
                    15 years of experience in distributing and installing elevators nationwide.
Our company always puts the interests of customers, elevator quality and company reputation first. With a team of experienced 
consultants and installers, we always try our best to create the best quality and stylish elevators.
                
                    </p>
                  </div>
                </Col>
                <Col sm={6} className="d-flex align-items-stretch">
                  <iframe
                    width="100%"
                    height="350"
                    src="https://www.youtube.com/embed/nLoooehLCjs"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutUs;
