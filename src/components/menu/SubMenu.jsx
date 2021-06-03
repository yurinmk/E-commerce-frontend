import "./SubMenu.css";
import React from "react";

import { Link } from "react-router-dom";

function SubMenu() {
  return (
    <div className="area-sub-menu">
      <nav className="nav-submenu">
        <ul>
          <li>
            <Link to="/products/sementes">Sementes</Link>
          </li>
        </ul>
      </nav>

      <nav className="nav-submenu">
        <ul>
          <li>
            <Link to="/products/plantas">Plantas</Link>
          </li>
        </ul>
      </nav>

      <nav className="nav-submenu">
        <ul>
          <li>
            <Link to="/products/vasoseestruturas">Vazos e Estruturas</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SubMenu;
