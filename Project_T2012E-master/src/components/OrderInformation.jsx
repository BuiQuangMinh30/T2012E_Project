import React,{useState} from 'react'
import { Modal, Row, Col } from "react-bootstrap";

import Button from "./Button";

const OrderInformation = (props) => {
     // const {lgShow} = props;
     const [lgShow, setLgShow] = useState(false);
     const [fullname, setFullname] = useState('');
     const [email, setEmail] = useState('');
     const [phone, setPhone] = useState('');
     const [desc, setDesc] = useState('');
     
  return (
    <>
    <Button onClick={() => setLgShow(true)}>đặt hàng</Button>
     <Modal
          size="lg"
          show={lgShow}
          onHide={()=>setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Order Information
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col sm={12} className="border-right">
                <div className="p-3 py-5">
                  <div className="d-flex justify-content-between align-items-center">
                    {/* <h4 className="text-right"></h4> */}
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label className="labels">Full Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Full name"
                        // onChange={(e)=> setName(e.target.value)}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="labels">Email</label>
                      <input
                        type="email"
                        className="form-control"
                      
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-12">
                      <label className="labels">Mobile Number</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Enter phone number"
                        
                      />
                    </div>
                    {/* <div className="col-md-12">
                      <label className="labels">Address Line 1</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="enter address line 1"
                        
                      />
                    </div>
                    <div className="col-md-12">
                      <label className="labels">Address Line 2</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="enter address line 2"
                        
                      />
                    </div> */}
                    <div className="col-md-12">
                      <label className="labels">Postcode</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="enter address line 2"
                        
                      />
                    </div>
                    <div className="col-md-12">
                      <label className="labels">State</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="enter address line 2"
                        
                      />
                    </div>
                    <div className="col-md-12">
                      <label className="labels">Area</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="enter address line 2"
                        
                      />
                    </div>

                    <div className="col-md-12">
                      <label className="labels">Education</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="education"
                        
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
                        
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="labels">State/Region</label>
                      <input
                        type="text"
                        className="form-control"
                        
                        placeholder="state"
                      />
                    </div>
                  </div>
                  <div className="mt-5 text-center">
                    <button
                      className="btn btn-primary profile-button"
                      type="button"
                    >
                      Save Information
                    </button>
                  </div>
                </div>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-primary profile-button" onClick={() => setLgShow(false)}>Close</button>
          </Modal.Footer>
        </Modal>
    </>
  )
}

export default OrderInformation