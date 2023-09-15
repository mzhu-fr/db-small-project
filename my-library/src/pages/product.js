import React from "react";
import "../styles/product.css";
import Card from "../component/card";
export default function product() {
  return (
    <>
      <div className="pageProduct">
        <h1>La Librairie d'Angélique</h1>
        <div className="containerProduct">
          <div className="search">
            Recherche :<input></input>
            <label></label>
          </div>

          {/* Grid product */}
          <div className="grid-container">
            <Card /> <Card /> <Card /> <Card />
            <Card /> <Card /> <Card /> <Card />
            <Card /> <Card /> <Card /> <Card />
            </div>
        </div>
      </div>
    </>
  );
}
