import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Switch
} from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import ProductViewModal from "./ProductViewModal";

import Routes1 from "../routes/Routes";
import Login from "../pages/Login";

const Layout = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
            <Login/>
          </Route>
         <Route
          render={(props) => (
            <div>
              <Header {...props} />
              <div className="container">
                <div className="main">
                  <Routes1 />
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
