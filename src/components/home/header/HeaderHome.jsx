import "./HeaderHome.css";
import React from "react";

import Bolhas from "../../../assets/bolhas.png";
import Menu from "../../menu/Menu";

function HeaderHome() {
  return (
    <>
      <div className="bubbles">
        <img src={Bolhas} alt="bolhas" />
      </div>
      <Menu where="home" />
    </>
  );
}

export default HeaderHome;
