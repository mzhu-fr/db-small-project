import React from "react";
import { useState } from "react";
import "../styles/product.css";
// import Card from "../composants/card";
import Fantastique from "../table/categorie1";
import Jeunesse from "../table/categorie2";
import Roman from "../table/categorie3";
import Divers from "../table/categorie4";
// import Jeunesse from "../table/categorie2.js";
// import Categorie3 from "../table/categorie3.js";
// import Categorie4 from "../table/categorie4.js";

export default function Product() {

  const [filtre, setFiltre] = useState("all");
  const [title, setTitle] = useState("Tout");
  const filtreProduit = (value) => {
    setFiltre(value)
    setTitle(value.toUpperCase())
  }
  return (
    <>
      <div className="pageProduct">
        <h1>Librairie en ligne</h1>
        <div className="containerProduct">
          {/*  <div className="containerTable">conteneur */}
          <div className="Table">
            <div className="tabs">{/* tabs */}
              <label className="tab" id="one-tab" htmlFor="one" onClick={() => filtreProduit("all")}>ALL</label>
              <label className="tab" id="two-tab" htmlFor="two" onClick={() => filtreProduit("Fantastique")}>Fantastique</label>
              <label className="tab" id="three-tab" htmlFor="three" onClick={() => filtreProduit("Jeunesse")}>Jeunesse</label>
              <label className="tab" id="four-tab" htmlFor="four" onClick={() => filtreProduit("Roman")}>Roman</label>
              <label className="tab" id="five-tab" htmlFor="five" onClick={() => filtreProduit("Divers")}>Divers</label>
            </div>
          </div>
          <h1>{title}</h1>

          <div className="grid-container">
            {(filtre === "Fantastique" || filtre === "all") && <div className="panel" id="one-panel">
              <div className="panel-title">Fantastique</div>
              <Fantastique />
            </div>}
            {(filtre === "Jeunesse" || filtre === "all") && <div className="panel" id="one-panel">
              <div className="panel-title">Jeunesse</div>
              <Jeunesse />
            </div>}
            {(filtre === "Roman" || filtre === "all") && <div className="panel" id="one-panel">
              <div className="panel-title">Roman</div>
              <Roman />
            </div>}
            {(filtre === "Divers" || filtre === "all") && <div className="panel" id="one-panel">
              <div className="panel-title">Divers</div>
              <Divers />
            </div>}

            {/* <div className="panels">contenue des tabs */}
            {/* 
            <div className="panel" id="one-panel">
              <div className="panel-title">ALL</div>
              <Categorie1 />
              <Categorie2 />
              <Categorie3 />
              <Categorie4 />
            </div>
            <div className="panel" id="two-panel">
              <div className="panel-title">Categorie1</div>
              <Categorie1 />
            </div>
            <div className="panel" id="three-panel">
              <div className="panel-title">categorie2</div>
              <Categorie2 />
            </div>
            <div className="panel" id="four-panel">
              <div className="panel-title">Categorie3</div>
              <Categorie3 />
            </div>
            <div className="panel" id="five-panel">
              <div className="panel-title">Categorie4</div>
              <Categorie4 />
            </div>
          </div> */}

            {/* <div className="search">
            Recherche :<input></input>
            <label></label>
          </div> */}

            {/* Grid product */}

            {/* <Card /><Card /><Card /><Card />
            <Card /><Card /><Card /><Card /> */}
          </div>
        </div>
      </div>
    </>
  );
}
