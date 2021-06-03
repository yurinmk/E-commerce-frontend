import "./Menu.css";
import React from "react";

import SubMenu from "./SubMenu";
import MenuPrincipal from "./MenuPrincipal";

//import Search from "../../../assets/search.png";

function Menu(props) {
  const { where } = props;

  return (
    <>
      <div className="geral-menus">
        <div className="container-menu">
          <MenuPrincipal />
        </div>
        <div className={`container-menu-submenu-${where}`}>
          <SubMenu where={where} />
        </div>
      </div>
    </>
  );
}

export default Menu;
