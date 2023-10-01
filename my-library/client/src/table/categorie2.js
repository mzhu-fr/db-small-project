import React from "react";
import Book from "../composants/book";
import Image5 from "../image/livre5.jpg";
import Image6 from "../image/livre6.jpg";
import Image7 from "../image/livre7.jpg";
import Image8 from "../image/livre8.jpg";
// Composant de la page produits pour les grids by mohamed.B
function categorie2(props) {
    return (
        <>
            <div className="grille">
                <div className="grid-item">
                    <div className="card">
                        <img src={Image5} alt={Image5} />
                        <Book
                            cName="name"
                            text="Le petit Prince"
                            text2="Saint-Exupéry"
                            text3="7,5£"
                        />
                    </div>
                </div>

                <div className="grid-item">
                    <div className="card">
                        <img src={Image6} alt="livre6" />
                        <Book
                            cName="name"
                            text="Céleste, ma planète"
                            text2="Timothée De Fombelle "
                            text3="5£"
                        />
                    </div>
                </div>

                <div className="grid-item">
                    <div className="card">
                        <img src={Image7} alt="livre7" />
                        <Book
                            cName="name"
                            text="Le royaume de Kensuké"
                            text2="Michael Morpurgo "
                            text3="9,30€"
                        />
                    </div>
                </div>

                <div className="grid-item">
                    <div className="card">
                        <img src={Image8} alt="livre8" />
                        <Book
                            cName="name"
                            text="Mortelle Adèle Tome 1 "
                            text2="Mr Tan"
                            text3="10,50€"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default categorie2