import "./Login.css";
import React from "react";

import LogoForm from "../../components/logoForm/LogoForm";
import MainLogin from "../../components/login/main/MainLogin";

function Login() {
  return (
    <div className="container-login">
      <header>
        <LogoForm />
      </header>
      <main>
        <MainLogin />
      </main>
    </div>
  );
}

export default Login;
