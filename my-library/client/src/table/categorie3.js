import React from "react";
import Book from "../composants/book";
import Image9 from "../image/livre9.jpg";
import Image10 from "../image/livre10.jpg";
import Image11 from "../image/livre11.jpg";
import Image12 from "../image/livre12.jpg";
// Composant de la page produits pour les grids by mohamed.B
function categorie3(props) {
    return (
        <>
            <div className="grille">
                <div className="grid-item">
                    <div className="card">
                        <img src={Image9} alt="livre9" />
                        <Book
                            cName="name"
                            text="La Faille"
                            text2="Franck Thilliez "
                            text3="22,90€"
                        />
                    </div>
                </div>

                <div className="grid-item">
                    <div className="card">
                        <img src={Image10} alt="livre10" />
                        <Book
                            cName="name"
                            text="Entre voisins"
                            text2="John Veher"
                            text3="19,90€"
                        />
                    </div>
                </div>

                <div className="grid-item">
                    <div className="card">
                        <img src={Image11} alt="livre11" />
                        <Book
                            cName="name"
                            text="La femme au dragon rouge"
                            text2="José Rodrigues Dos Santos"
                            text3="22,50€"
                        />
                    </div>
                </div>

                <div className="grid-item">
                    <div className="card">
                        <img src={Image12} alt="livre12" />
                        <Book
                            cName="name"
                            text="Le dernier mystère de la pièce rouge"
                            text2=" L-E. Metan"
                            text3="17,99€"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default categorie3