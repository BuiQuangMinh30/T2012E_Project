import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Blog = () => {
  const imgs = [
    "https://www.wpbeginner.com/wp-content/uploads/2016/11/blogimagetools.jpg",
    "https://www.markuptag.com/images/user-img-2.jpg",
    "https://www.markuptag.com/images/user-img-3.jpg",
  ];

  const apiUrl = "https://elevatorsystemdashboard.azurewebsites.net/api";

  const [blogs, setBlogs] = useState([]);
  // const [img, setImg] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(`${apiUrl}/Blogs`);
      if (data.status == 200) {
        setBlogs(data.data);
      } else {
        alert("loi");
      }
    };
    fetchData();
  }, []);
  console.log("blosg", blogs);
  return (
    <>
      <div className="container-fluid pt-5">
        <div className="container">
          <div className="text-center">
            {/* <small className="bg-primary text-white text-uppercase font-weight-bold text-center px-1">Our Blog</small> */}
            <h2 className="mt-2 mb-5" style={{ color: "#4267b2" }}>
              Latest From Blog
            </h2>
          </div>
          <div className="row">
            <div className="col-md-6 mb-5">
              <Link
                to={`/blog/${
                  blogs && blogs.length > 0 ? blogs[blogs.length - 1].ID : ""
                }`}
              >
                <div className="position-relative">
                  <img
                    style={{ height: "400px" }}
                    className="img-fluid w-100"
                    src={
                      blogs && blogs.length > 0
                        ? blogs[blogs.length - 1].Thumbnail
                        : ""
                    }
                    alt=""
                  />
                  <div
                    className="position-absolute d-flex flex-column align-items-center justify-content-center"
                    //    style="width: 80px; height: 80px; bottom: 0; left: 0;"
                    style={{
                      width: "80px",
                      height: "80px",
                      bottom: "0",
                      left: "0",
                      backgroundColor: "#4267b2",
                    }}
                  >
                    {/* <h6 className="text-uppercase mt-2 mb-n2">Jan</h6> */}
                    {/* <h1 className="m-0">{blogs && blogs.length > 0 ? blogs[blogs.length-1].CreatedAt : ""}</h1> */}
                  </div>
                </div>
                <div className="border border-top-0" style={{ padding: "30" }}>
                  <div className="d-flex mb-3">
                    {/* <div className="d-flex align-items-center">
                                <img className="rounded-circle"
                                style={{width: '40px', height: '40px'}}
                              //    style="width: 40px; height: 40px;"
                                  src={imgs[1]} alt=""/>
                                <a className="text-muted ml-2" href="">John Doe</a>
                            </div>
                            <div className="d-flex align-items-center ml-4">
                                <i className="far fa-bookmark text-primary"></i>
                                <a className="text-muted ml-2" href="">Web Design</a>
                            </div> */}
                    <a className="h5 font-weight-bold" href="">
                      {blogs && blogs.length > 0
                        ? blogs[blogs.length - 1].Title
                        : ""}
                    </a>
                  </div>
                  <div className="card-text text-muted small">
                    {blogs && blogs.length > 0
                      ? blogs[blogs.length - 1].Slug
                      : ""}
                  </div>
                  <small className="text-muted">
                    {blogs && blogs.length > 0
                      ? blogs[blogs.length - 1].CreatedAt
                      : ""}
                  </small>
                </div>
              </Link>
            </div>
            <div className="col-md-6 mb-5">
              <Link
                to={`/blog/${
                  blogs && blogs.length > 0 ? blogs[blogs.length - 2].ID : ""
                }`}
              >
                <div className="position-relative">
                  <img
                    style={{ height: "400px" }}
                    className="img-fluid w-100"
                    src={
                      blogs && blogs.length > 0
                        ? blogs[blogs.length - 2].Thumbnail
                        : ""
                    }
                    alt=""
                  />
                  <div
                    className="position-absolute d-flex flex-column align-items-center justify-content-center"
                    //    style="width: 80px; height: 80px; bottom: 0; left: 0;"
                    style={{
                      width: "80px",
                      height: "80px",
                      bottom: "0",
                      left: "0",
                      backgroundColor: "#4267b2",
                    }}
                  >
                    {/* <h6 className="text-uppercase mt-2 mb-n2">Jan</h6> */}
                    {/* <h1 className="m-0">{blogs && blogs.length > 0 ? blogs[blogs.length-1].CreatedAt : ""}</h1> */}
                  </div>
                </div>
                <div className="border border-top-0" style={{ padding: "30" }}>
                  <div className="d-flex mb-1">
                    {/* <div className="d-flex align-items-center">
                                <img className="rounded-circle"
                                style={{width: '40px', height: '40px'}}
                              //    style="width: 40px; height: 40px;"
                                  src={imgs[1]} alt=""/>
                                <a className="text-muted ml-2" href="">John Doe</a>
                            </div>
                            <div className="d-flex align-items-center ml-4">
                                <i className="far fa-bookmark text-primary"></i>
                                <a className="text-muted ml-2" href="">Web Design</a>
                            </div> */}
                    <a className="h5 font-weight-bold" href="">
                      {blogs && blogs.length > 0
                        ? blogs[blogs.length - 2].Title
                        : ""}
                    </a>
                  </div>
                  <div className="card-text text-muted small">
                    {blogs && blogs.length > 0
                      ? blogs[blogs.length - 2].Slug
                      : ""}
                  </div>
                  <small className="text-muted">
                    {blogs && blogs.length > 0
                      ? blogs[blogs.length - 2].CreatedAt
                      : ""}
                  </small>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
