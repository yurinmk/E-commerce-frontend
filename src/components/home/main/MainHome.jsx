import "./MainHome.css";

import React from "react";
import { Link } from "react-router-dom";

import Sementes from "../../../assets/sementes.png";
import Plantas from "../../../assets/planta.png";
import Vazo from "../../../assets/vazo.png";

function MainHome() {
  return (
    <>
      <div className="area-card">
        <h1>Sementes</h1>
        <Link to="/products/sementes">
          <div className="card">
            <div className="card-image">
              <img src={Sementes} alt="Sementes" />
            </div>
          </div>
        </Link>
      </div>

      <div className="area-card">
        <h1>Plantas</h1>
        <Link to="/products/plantas">
          <div className="card">
            <div className="card-image">
              <img src={Plantas} alt="Plantas" />
            </div>
          </div>
        </Link>
      </div>

      <div className="area-card">
        <h1>Vasos e Estruturas</h1>
        <Link to="/products/vasoseestruturas">
          <div className="card">
            <div className="card-image">
              <img src={Vazo} alt="Vazos" />
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default MainHome;
