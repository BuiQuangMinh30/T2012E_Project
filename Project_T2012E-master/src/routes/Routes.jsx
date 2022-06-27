import React, { useEffect } from "react";

import { Route, Switch } from "react-router-dom";
import axios from "axios";
import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Cart from "../pages/Cart";
import Product from "../pages/Product";
import Profile from "../pages/Profile";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Login from "../pages/Login";
import AboutUs from "../pages/AboutUs";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/catalog/:slug" component={Product} />
        <Route path="/catalog" component={Catalog} />
        <Route path="/cart" component={Cart} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        <Route path="/profile" component={Profile} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </>
  );
};

export default Routes;
