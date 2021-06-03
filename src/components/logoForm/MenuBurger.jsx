import "./MenuBurger.css";

import React, { useState } from "react";

function MenuBurger() {
  const [classMenuBtn, setClassMenuBtn] = useState("menu-btn");
  const [menuOpen, setMenuOpen] = useState(false);

  function menuBurger() {
    if (!menuOpen) {
      setClassMenuBtn("menu-btn-open");
      setMenuOpen(true);
    } else {
      setClassMenuBtn("menu-btn");
      setMenuOpen(false);
    }
  }

  return (
    <div className="container-menuBurger" onClick={menuBurger}>
      <div className={classMenuBtn}>
        <div className="menu-btn__burger"></div>
      </div>
    </div>
  );
}

export default MenuBurger;
