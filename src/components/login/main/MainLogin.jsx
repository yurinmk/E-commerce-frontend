import "./MainLogin.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import Eye from "../../../assets/olho.png";
import EyeInvisible from "../../../assets/olho-invisivel.png";

function MainLogin() {
  const [iconEye, setIconEye] = useState(Eye);
  const [inputTypePassword, setInputTypePassword] = useState("password");

  function iconInvisible() {
    if (iconEye !== Eye) {
      setIconEye(Eye);
      setInputTypePassword("password");
    } else {
      setIconEye(EyeInvisible);
      setInputTypePassword("text");
    }
  }

  return (
    <div className="container-mainLogin">
      <div className="container-form-login">
        <form action="">
          <label>Email</label>
          <input type="email" placeholder="exemplo@exemplo.com" />

          <label>Senha</label>
          <input type={inputTypePassword} placeholder="*********" />
          <img src={iconEye} alt="olho" onClick={iconInvisible} />

          <button type="submit">Entrar</button>
        </form>
      </div>
      <div className="container-txt">
        <p>Não possui uma conta?</p>
        <Link to="/register">Cadastre-se</Link>
      </div>
    </div>
  );
}

export default MainLogin;
