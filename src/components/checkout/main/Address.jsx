import "./Address.css";
import React from "react";

function Address() {
  return (
    <div className="address">
      <strong>
        <p>Endereço para entrega:</p>
      </strong>
      <p>Rua alguma coisa de algum lugar, 69 João Pessoa</p>
      <button>Alterar</button>
    </div>
  );
}

export default Address;
