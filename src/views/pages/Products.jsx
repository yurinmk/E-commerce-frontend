import "./Products.css";
import React from "react";

import Bolhas from "../../assets/bolhas.png";

import Menu from "../../components/menu/Menu";
import ProductsMain from "../../components/products/main/ProductsMain";

function Products() {
  return (
    <div className="container-products-geral">
      <header>
        <div className="bubbles">
          <img src={Bolhas} alt="bolhas" />
        </div>
        <Menu where="products" />
      </header>
      <main>
        <ProductsMain />
      </main>
    </div>
  );
}

export default Products;
