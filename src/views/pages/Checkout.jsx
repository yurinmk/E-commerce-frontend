import "./Checkout.css";
import React from "react";

import HeaderProduct from "../../components/product/header/HeaderProduct";
import MainCheckout from "../../components/checkout/main/MainCheckout";
import Menu from "../../components/menu/Menu";

function Checkout() {
  return (
    <div className="container-checkout">
      <header>
        <Menu where="checkout" />
      </header>
      <main>
        <MainCheckout />
      </main>
    </div>
  );
}

export default Checkout;
