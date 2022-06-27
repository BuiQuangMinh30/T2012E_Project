import React, {useState,useEffect} from "react";

import {
  BrowserRouter,
  // Routes,
  Route,
  Link,
  Switch
} from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import ProductViewModal from "./ProductViewModal";

import Routes from "../routes/Routes";
import Login from "../pages/Login";
import Register from "../pages/Register";
import axios from "axios";

const Layout = () => {
  const api = `https://localhost:44399/api/Profile12`;
  let dataUser = {};

  useEffect(() => {
    async function fetchMyAPI() {
      var getToken = JSON.parse(localStorage.getItem("dataUser"));
      const getToken1 = getToken.access_token;
      let resData = await axios.get(api, {
          headers: {
            Authorization: `Bearer ${getToken1}`,
          },
        })
        dataUser = resData.data.data;
        console.log('resData',dataUser);
    }
    fetchMyAPI();


  }, [dataUser]);
  
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
            <Login/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
         <Route
          render={(props) => (
            <div>
              <Header {...props} />
              <div className="container">
                <div className="main">
                  <Routes dataUser={dataUser}/>
                </div>
              </div>
              <Footer />
              <ProductViewModal />
            </div>
          )}
        />
       
      </Switch>
    </BrowserRouter>
  );
};

export default Layout;
