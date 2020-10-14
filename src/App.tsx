//dependences
import React from 'react';
//local files
import "./Styles/global.css";
import "./Styles/Pages/landing.css";
//assets
import Logo from "./Images/Logo.svg";

function App() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={Logo} alt="Logo" />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>Pelotas</strong>
          <span>Rio Grande do Sul</span>
        </div>

        <a href="" className="enter-app">
          >
        </a>
      </div>
    </div>
  );
}

export default App;
