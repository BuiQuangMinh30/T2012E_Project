import React, { useState } from "react";
import { Form, Button, Row, Col, Tabs, Tab, Accordion } from "react-bootstrap";
import OurTeam from "../components/OurTeam";

const About = () => {
  const [key, setKey] = useState("home");
  const imgAbout = "https://thumbs.dreamstime.com/b/concept-15354944.jpg";
  const img1 = "http://www.omikaelevators.com/images/about-img-1.jpg";
  return (
    <>
      <div className="wrapper">
        <div className="page-header">
          <h1 className="section-title" style={{ textAlign: "center" }}>
            About Us
          </h1>
        </div>

        <div className="about">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-6">
                <img src={img1} alt="Image" />
              </div>
              <div className="col-md-6">
                <h2>Company elevator introduction</h2>
                <p>
                  ToangCSharp Company is one of the first joint venture home
                  elevator companies in Vietnam market. With nearly 15 years of
                  experience in distributing and installing elevators
                  nationwide. Our company always puts the interests of
                  customers, elevator quality and company reputation first. With
                  a team of experienced consultants and installers, we always
                  try our best to create the best quality and stylish elevators.
                </p>
                <p>
                  Market integration with ToangCSharp brand, so far we are known
                  as a permanent member in the lifting industry. It is thanks to
                  the trust and support of customers throughout the country
                  through the capacity and experience of the staff - staff and
                  the quality of the equipment performed during the working
                  process through the units. specialized…
                </p>
                <a className="btn" href="#">
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
                <h2>Company development history</h2>
              </div>
              <div style={{ fontSize: "16px" }}>
                <li>Tax code (VAT ID): 0305342304</li>
                <li>
                  May 2006 established Gia Dinh Elevator Co., Ltd. address: Binh
                  Thanh District - Ho Chi Minh City.
                </li>
                <li>
                  June 2006 built a factory system for manufacturing and
                  assembling elevator cabins in District 12 - Ho Chi Minh City.
                </li>
                <li>
                  March 2009 opened a representative branch in the North at To
                  Hieu - Cau Giay - Hanoi.
                </li>
                <li>
                  From January 2018 until now, the Northern branch has been
                  transferred to SunSquare building at 21 Le Duc Tho - Nam Tu
                  Liem - Hanoi.
                </li>
              </div>
            </Col>
            <Col md={5}>
              <div className="about-img">
                <img src={imgAbout} />
              </div>
            </Col>
          </Row>
        </div>

        <div
          className="section about container mt-4"
          style={{ marginTop: "400px" }}
        >
          <Row>
            <div
              className="col-lg-5 align-items-stretch  img"
              style={{
                height: "300px",
                backgroundImage:
                  "url(https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_420/https://trulyexperiences.com/blog/wp-content/uploads/2020/11/pexels-olya-kobruseva-5428833-scaled-e1605623269850-420x529.jpg )",
              }}
            ></div>
            <div className="col-lg-7 d-flex flex-column about">
              <div className="content px-xl-5">
                <h3>
                  Frequently Asked <strong>Questions</strong>
                </h3>
                {/* <p style={{fontSize: '16px'}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Duis aute irure dolor in reprehenderit
                </p> */}
              </div>
              <Accordion
                defaultActiveKey={["0"]}
                alwaysOpen
                style={{ margin: "20px" }}
              >
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    The smallest type of elevator that is easy to buy and sell ?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Small elevator with reasonable price, suitable for all
                      types of construction, diverse installation locations, so
                      it is very popular, easy for sellers - saving for buyers.
                    </p>
                    <p>
                      <strong>
                        The selling price of the family mini elevator
                      </strong>{" "}
                      is about 250 million VND to 350 million VND depending on
                      different options.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Does the maintenance cost, equipment to replace the mini
                    elevator cost?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      The life of an elevator usually falls between 10 and 15
                      years. Depending on the use and maintenance of the
                      elevator, the life of the elevator also changes. Regular
                      maintenance of elevators is usually 2 months.
                    </p>
                    <p>
                      This time may be less at the request of the homeowner and
                      according to the maintenance costs included in the
                      package. Small family elevators are usually used for
                      families, so few people use them. So the elevator will be
                      more durable. Usually less damaged after many years of
                      use.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Row>
        </div>

        <OurTeam />

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
