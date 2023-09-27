import React from "react";
import '../styles/panier.css';
import Book from "../composants/book";
import Image from "../image/livre.jpg";
import Image2 from "../image/livre2.jpg";
import Image3 from "../image/livre3.jpg";
import Image4 from "../image/livre4.jpg";
// Composant de la page produits pour les grids by mohamed.B
function harrypotter(props) {
    return (
        <>
            <div className="grid-item">
                <div className="card">
                    <img src={Image} alt="error" />
                    <Book
                        cName="name"
                        text="Harry Potter 1"
                        text2="J. K. Rowling"
                        text3="20£"
                    />
                </div>
            </div>

            <div className="grid-item">
                <div className="card">
                    <img src={Image2} alt="livre2" />
                    <Book
                        cName="name"
                        text="Harry Potter2"
                        text2="J. K. Rowling"
                        text3="25£"
                    />
                </div>
            </div>

            <div className="grid-item">
                <div className="card">
                    <img src={Image3} alt="livre3" />
                    <Book
                        cName="name"
                        text="Harry Potter 4"
                        text2="J. K. Rowling"
                        text3="200£"
                    />
                </div>
            </div>

            <div className="grid-item">
                <div className="card">
                    <img src={Image4} alt="livre4" />
                    <Book
                        cName="name"
                        text="Harry Potter 8"
                        text2="J. K. Rowling"
                        text3="30£"
                    />
                </div>
            </div>


        </>
    )
}

export default harrypotter



