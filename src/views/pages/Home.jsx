import "./Home.css";
import React from "react";

import HeaderHome from "../../components/home/header/HeaderHome";
import MainHome from "../../components/home/main/MainHome";

function Home() {
  return (
    <div className="container-home">
      <header>
        <HeaderHome />
      </header>

      <main>
        <MainHome />
      </main>
    </div>
  );
}

export default Home;
