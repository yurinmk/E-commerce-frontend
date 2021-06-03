import React from "react";

import { Switch, Route } from "react-router-dom";

import Login from "../../views/pages/Login";
import Checkout from "../../views/pages/Checkout";
import Home from "../../views/pages/Home";
import Product from "../../views/pages/Product";
import Products from "../../views/pages/Products";
import Register from "../../views/pages/Register";
import About from "../../views/pages/About";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/checkout" component={Checkout} />
      <Route exact path="/product/:id/:reference" component={Product} />
      <Route exact path="/products/:reference" component={Products} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/about" component={About} />
    </Switch>
  );
}

export default Routes;
