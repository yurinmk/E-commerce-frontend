import "./Register.css";
import React from "react";

import LogoForm from "../../components/logoForm/LogoForm";
import MainRegister from "../../components/register/main/MainRegister";

function Register() {
  return (
    <div className="container-register">
      <header>
        <LogoForm />
      </header>
      <main>
        <MainRegister />
      </main>
    </div>
  );
}

export default Register;
