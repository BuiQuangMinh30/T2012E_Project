import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Tab,
  Tabs,
  Container,
  Row,
  Col,
  Form,
  Group,
  Image,
} from "react-bootstrap";
import { Link } from 'react-router-dom'
import axios from "axios";
const imgHost =
  "https://kenh14cdn.com/thumb_w/660/2019/12/7/photo-1-15757038486841320969200.png";
  const img = "https://media.istockphoto.com/photos/online-shopping-picture-id923079848?k=20&m=923079848&s=612x612&w=0&h=nThljGCyG5x1Ba2BJELwtjFnXgZI2npYO8ISZoMY-FQ=";
const Blog = (props) => {

  const apiUrl = "https://elevatorsystemdashboard.azurewebsites.net/api";

  const [blogs, setBlogs] = useState([]);
  // const [img, setImg] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(
        `${apiUrl}/Blogs`
      );
      if (data.status == 200) {
        setBlogs(data.data);
      } else {
        alert("loi");
      }
    };
    fetchData();
  }, []);
  // console.log('blogs', blogs)
  return (
    <>
      <div className="container">
        <div className="jumbotron jumbotron-fluid mb-3 pt-0 pb-0 bg-lightblue position-relative">
          <div className="pl-4 pr-0 h-100 tofront">
          <Link to={`/blog/${blogs && blogs.length > 0 ? blogs[blogs.length-1].ID : ""}`}>
           <Row className="row justify-content-between">
              <div className="col-md-6 pt-6 pb-6 align-self-center">
                <h1 className="secondfont mb-3 font-weight-bold">
                 {blogs && blogs.length > 0 ? blogs[blogs.length-1].Title : ""}
                </h1>
                <p style={{color: 'black'}} className="mb-3">
                {blogs && blogs.length > 0 ? blogs[blogs.length-1].Summary : ""}
                </p>
                <a href="#" className="btn btn-dark">
                  Read More
                </a>
              </div>
              <div
                className="col-md-6 d-none d-md-block pr-0"
                style={{
                  height: "500px",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundImage: `url(${blogs && blogs.length > 0 ? blogs[blogs.length-1].Thumbnail : ""})`,
                }}
              >
                {" "}
              </div>
            </Row>
           </Link>
          </div>
        </div>
      </div>
      <div className="container pt-4 pb-4">
        <div className="row">
       
          <div className="col-lg-6">
          <Link to={`/blog/${blogs && blogs.length > 0 ? blogs[0].ID : ""}`}>
            <div className="card border-0 mb-4 box-shadow h-xl-300">
              <div
                style={{
                  height: "100px",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundImage: `url(${blogs && blogs.length > 0 ? blogs[0].Thumbnail : ""})`,
                }}
              ></div>
              <div className="card-body px-0 pb-0 d-flex flex-column align-items-start">
                <h2 className="h4 font-weight-bold">
                  <a className="text-dark" >
                  {blogs && blogs.length > 0 ? blogs[0].Title : ""}
                  </a>
                </h2>
                <p className="card-text">
                {blogs && blogs.length > 0 ? blogs[0].Summary : ""}
                </p>
                <div>
                  {/* <small className="d-block">
                    <a className="text-muted" href="./author.html">
                      Favid Rick
                    </a>
                  </small> */}
                  <small className="text-muted">
                    {blogs && blogs.length > 0 ? blogs[0].CreatedAt : ""}
                  </small>
                </div>
              </div>
            </div>
            </Link>
          </div>
         
          <div className="col-lg-6">
            <div className="flex-md-row mb-4 box-shadow h-xl-300">
            <Link to={`/blog/${blogs && blogs.length > 0 ? blogs[1].ID : ""}`}>
              <div className="mb-3 d-flex align-items-center">
                <Image
                  src={blogs && blogs.length > 0 ? blogs[1].Thumbnail : ""}
                  style={{
                    height: "80px",
                    width: "120px",
                    marginRight: "10px"
                  }}
                />
                <div className="pl-3 p-lg-3">
                  <h2 className="mb-2 h6 font-weight-bold">
                    <a className="text-dark" >
                    {blogs && blogs.length > 0 ? blogs[1].Title : ""}
                    </a>
                  </h2>
                  <div className="card-text text-muted small">
                  {blogs && blogs.length > 0 ? blogs[1].Slug : ""}
                  </div>
                  <small className="text-muted">
                    {blogs && blogs.length > 0 ? blogs[1].CreatedAt : ""}
                  </small>
                </div>
              </div>
              </Link>
              <Link to={`/blog/${blogs && blogs.length > 0 ? blogs[2].ID : ""}`}>
              <div className="mb-3 d-flex align-items-center">
                <Image
                  src={blogs && blogs.length > 0 ? blogs[2].Thumbnail : ""}
                  style={{
                    height: "80px",
                    width: "120px",
                    marginRight: "10px"
                  }}
                />
                <div className="pl-3 p-lg-3">
                  <h2 className="mb-2 h6 font-weight-bold">
                    <a className="text-dark" >
                    {blogs && blogs.length > 0 ? blogs[2].Title : ""}
                    </a>
                  </h2>
                  <div className="card-text text-muted small">
                  {blogs && blogs.length > 0 ? blogs[2].Slug : ""}
                  </div>
                  <small className="text-muted">
                    {blogs && blogs.length > 0 ? blogs[2].CreatedAt : ""}
                  </small>
                </div>
              </div>
              </Link>
              <Link to={`/blog/${blogs && blogs.length > 0 ? blogs[3].ID : ""}`}>
              <div className="mb-3 d-flex align-items-center">
                <Image
                  src={blogs && blogs.length > 0 ? blogs[3].Thumbnail : ""}
                  style={{
                    height: "80px",
                    width: "120px",
                    marginRight: "10px"
                  }}
                />
                <div className="pl-3 p-lg-3">
                  <h2 className="mb-2 h6 font-weight-bold">
                    <a className="text-dark" >
                    {blogs && blogs.length > 0 ? blogs[3].Title : ""}
                    </a>
                  </h2>
                  <div className="card-text text-muted small">
                  {blogs && blogs.length > 0 ? blogs[3].Slug : ""}
                  </div>
                  <small className="text-muted">
                    {blogs && blogs.length > 0 ? blogs[3].CreatedAt : ""}
                  </small>
                </div>
              </div>
             </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-8">
            <h5 className="font-weight-bold spanborder">
              <span>All Stories</span>
            </h5>
            <div className="mb-3 d-flex justify-content-between">
              <div className="pr-3">
                <h2 className="mb-1 h4 font-weight-bold">
                  <a className="text-dark" >
                    Nearly 200 Great Barrier Reef coral species also live in the
                    deep sea
                  </a>
                </h2>
                <p>
                  There are more coral species lurking in the deep ocean that
                  previously thought.
                </p>
                <div className="card-text text-muted small">
                  Jake Bittle in SCIENCE
                </div>
                <small className="text-muted">Dec 12 &middot; 5 min read</small>
              </div>
              <Image
                src={img}
                style={{
                  height: "100px",
                  width: "150px",
                }}
              />
            </div>
            <div className="mb-3 d-flex justify-content-between">
              <div className="pr-3">
                <h2 className="mb-1 h4 font-weight-bold">
                  <a className="text-dark" >
                    East Antarctica's glaciers are stirring
                  </a>
                </h2>
                <p>
                  Nasa says it has detected the first signs of significant
                  melting in a swathe of glaciers in East Antarctica.
                </p>
                <div className="card-text text-muted small">
                  Jake Bittle in SCIENCE
                </div>
                <small className="text-muted">Dec 12 &middot; 5 min read</small>
              </div>
              <Image
                src={img}
                style={{
                  height: "100px",
                  width: "150px",
                }}
              />
            </div>
            <div className="mb-3 d-flex justify-content-between">
              <div className="pr-3">
                <h2 className="mb-1 h4 font-weight-bold">
                  <a className="text-dark" >
                    50 years ago, armadillos hinted that DNA wasn’t destiny
                  </a>
                </h2>
                <p>
                  Nasa says it has detected the first signs of significant
                  melting in a swathe of glaciers in East Antarctica.
                </p>
                <div className="card-text text-muted small">
                  Jake Bittle in SCIENCE
                </div>
                <small className="text-muted">Dec 12 &middot; 5 min read</small>
              </div>
              <Image
                src={img}
                style={{
                  height: "100px",
                  width: "150px",
                }}
              />
            </div>
          </div>
          <div className="col-md-4 pl-4">
            <h5 className="font-weight-bold spanborder">
              <span>Popular</span>
            </h5>
            <ol className="list-featured">
              <li>
                <span>
                  <h6 className="font-weight-bold">
                    <a  className="text-dark">
                      Did Supernovae Kill Off Large Ocean Animals?
                    </a>
                  </h6>
                  <p className="text-muted">Jake Bittle in SCIENCE</p>
                </span>
              </li>
              <li>
                <span>
                  <h6 className="font-weight-bold">
                    <a  className="text-dark">
                      Humans Reversing Climate Clock: 50 Million Years
                    </a>
                  </h6>
                  <p className="text-muted">Jake Bittle in SCIENCE</p>
                </span>
              </li>
              <li>
                <span>
                  <h6 className="font-weight-bold">
                    <a  className="text-dark">
                      Unprecedented Views of the Birth of Planets
                    </a>
                  </h6>
                  <p className="text-muted">Jake Bittle in SCIENCE</p>
                </span>
              </li>
              <li>
                <span>
                  <h6 className="font-weight-bold">
                    <a  className="text-dark">
                      Effective New Target for Mood-Boosting Brain Stimulation
                      Found
                    </a>
                  </h6>
                  <p className="text-muted">Jake Bittle in SCIENCE</p>
                </span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
