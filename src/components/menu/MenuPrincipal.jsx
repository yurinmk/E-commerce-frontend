import "./MenuPrincipal.css";
import React from "react";
import { Link } from "react-router-dom";

import ToastAnimated, { showToast } from "../alerts/toast";
import Carrinho from "../../assets/carrinho.png";

function MenuPrincipal() {
  function openAlert() {
    showToast({ type: "default", message: "Em deselvolvimento!" });
  }
  return (
    <>
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
              <Link to="#" onClick={openAlert}>
                Contate-nos
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="area-btns">
        <Link to="#">
          <button className="btn-open" onClick={openAlert}>
            Entrar
          </button>
        </Link>

        <Link to="/checkout">
          <button className="btn-shopping-car">
            <img src={Carrinho} alt="Carrinho" />
          </button>
        </Link>
      </div>
      <ToastAnimated />
    </>
  );
}

export default MenuPrincipal;
