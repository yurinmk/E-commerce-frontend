import "./HeaderProduct.css";
import React from "react";
import { Link } from "react-router-dom";

import Carrinho from "../../../assets/carrinho.png";

function HeaderProduct() {
  return (
    <>
      <div className="container-menu">
        {/* <div className="area-search">
          <div className="area-input" id="mostrar">
            <input type="text" />
          </div>
          <button className="search">
            <img src={Search} alt="Pesquisar" />
          </button>
        </div> */}

        <div className="area-menu">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">Sobre nós</Link>
              </li>
              <li>
                <Link to="/knowMore">Saiba mais</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="area-btns">
          <button className="btn-open">Entrar</button>

          <Link to="/checkout">
            <button className="btn-shopping-car">
              <img src={Carrinho} alt="Carrinho" />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default HeaderProduct;
