import "./Product.css";
import React from "react";

import Menu from "../../components/menu/Menu";
import MainProduct from "../../components/product/main/MainProduct";

function Product() {
  return (
    <div className="container-product">
      <header>
        <Menu where="product" />
      </header>
      <main>
        <MainProduct />
      </main>
    </div>
  );
}

export default Product;
