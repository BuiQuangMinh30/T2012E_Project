import React, { useState,useEffect } from 'react'
import { Modal, Row, Col } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import Button from "./Button";
import axios from "axios";
import { addByIdOrder, checkOrder } from '../redux/shopping-cart-2/shoppingCart';
import { useHistory } from "react-router-dom";
const initalState = {
  FullName: "",
  PhoneNumber: "",
  Address: "",
  Description: "",
  OrderEmail: "",
};

const OrderInformation = ({ total }) => {
  // const {lgShow} = props;
  const [lgShow, setLgShow] = useState(false);
  const [order, setOrder] = useState(initalState);
  const { FullName, PhoneNumber, Address, Description, OrderEmail } = order;
  const token = JSON.parse(localStorage.getItem("dataUser"));
  const [profile, setProfile] = useState({});
  const dispatch = useDispatch();
  let history = useHistory();
  useEffect(() => {
    async function fetchMyAPI() {
      var getToken = JSON.parse(localStorage.getItem("dataUser"));

      if (!getToken) {
        history.push("/login");
      } else {
        let resData = await axios.get("https://elevatorsystemdashboard.azurewebsites.net/api/Profile", {
          headers: {
            Authorization: `Bearer ${token.access_token}`,
          },
        });
        setProfile(resData.data.data);
      }
    }

    fetchMyAPI();
  }, []);

  const handlerChangeOrder = (e) => {
    const { name, value } = e.target;
    setOrder({ ...order, [name]: value });
  }

  const handleSubmitOrder = async () => {
    try {
      const data = await axios.post("https://elevatorsystemdashboard.azurewebsites.net/api/Orders", {
        Total: total,
        FullName: order.FullName,
        PhoneNumber: order.PhoneNumber,
        Description: order.Description,
        Address: order.Address,
        OrderEmail: order.OrderEmail,
        OrderStatus: 0,
        ShipStatus: 0
      },
        {
          headers: { Authorization: "Bearer " + token.access_token }
        });

      dispatch(checkOrder());
      dispatch(addByIdOrder(data.data.findOrder[0]));
      window.location.reload();
    } catch (err) {
      console.log(err)
    }
  }

  
  return (
    <>
      <Button onClick={() => setLgShow(true)}>đặt hàng</Button>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
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
                  {/* {/ <h4 className="text-right"></h4> /} */}
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label className="labels">Full Name</label>
                    <input
                      type="text"
                      name='FullName'
                      value={FullName ? FullName : profile.UserName}
                      onChange={handlerChangeOrder}
                      className="form-control"
                      placeholder="Full name"
                    // onChange={(e)=> setName(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="labels">Email</label>
                    <input
                      type="email"
                      name='OrderEmail'
                      value={OrderEmail ? OrderEmail : profile.Email}
                      onChange={handlerChangeOrder}
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12">
                    <label className="labels">Phone Number</label>
                    <input
                      type="text"
                      name='PhoneNumber'
                      value={PhoneNumber ? PhoneNumber : profile.PhoneNumber}
                      onChange={handlerChangeOrder}
                      className="form-control"
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12">
                    <label className="labels">Address</label>
                    <input
                      type="text"
                      name='Address'
                      value={Address ? Address : profile.AddressLine1}
                      onChange={handlerChangeOrder}
                      className="form-control"
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12">
                    <label className="labels">Description</label>
                    <input
                      type="text"
                      name='Description'
                      value={Description}
                      onChange={handlerChangeOrder}
                      className="form-control"
                      placeholder="Enter description"
                    />
                  </div>
                </div>
                <div className="mt-5 text-center">
                  <button
                    className="btn btn-primary profile-button"
                    type="button"
                    onClick={handleSubmitOrder}
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