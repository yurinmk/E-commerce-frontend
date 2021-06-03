import "./LogoForm.css";
import React from "react";

import Logo from "../../assets/logo.png";
import MenuBurger from "./MenuBurger";

function LogoForm() {
  return (
    <div className="container-logo">
      <div className="area-img">
        <img src={Logo} alt="Logomarca" />
      </div>
      <div className="area-txt">
        <p>Namikoka Plants</p>
      </div>
      <MenuBurger />
    </div>
  );
}

export default LogoForm;
