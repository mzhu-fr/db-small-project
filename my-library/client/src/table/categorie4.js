import React from "react";
import Book from "../composants/book";
import Image13 from "../image/livre13.jpg";
import Image14 from "../image/livre14.jpg";
import Image15 from "../image/livre15.jpg";
import Image16 from "../image/livre16.jpg";
import Image17 from "../image/chat.jpg";
// Composant de la page produits pour les grids by mohamed.B
function categorie4(props) {
    return (
        <>
            <div className="grille">
                <div className="grid-item">
                    <div className="card">
                        <img src={Image13} alt="livre13" />
                        <Book
                            cName="name"
                            text="L'Institut"
                            text2="Stephen King"
                            text3="24,90€"
                        />
                    </div>
                </div>

                <div className="grid-item">
                    <div className="card">
                        <img src={Image14} alt="livre14" />
                        <Book
                            cName="name"
                            text="Outsphere"
                            text2="Guy-Roger Duvert"
                            text3="19,99€"
                        />
                    </div>
                </div>

                <div className="grid-item">
                    <div className="card">
                        <img src={Image15} alt="livre15" />
                        <Book
                            cName="name"
                            text="Dark gravity"
                            text2="Mr Christian Clément"
                            text3="18,90€"
                        />
                    </div>
                </div>

                <div className="grid-item">
                    <div className="card">
                        <img src={Image16} alt="livre16" />
                        <Book
                            cName="name"
                            text="Psychologie Obscure"
                            text2="Ryan Andrews"
                            text3="19,97€"
                        />
                    </div>
                </div>

                <div className="grid-item">
                    <div className="card">
                        <img src={Image17} alt="livre17" />
                        <Book
                            cName="name"
                            text="Psychologie Obscure"
                            text2="Mohammed Hamdane"
                            text3="21,90€"
                        />
                    </div>
                </div>

            </div >
        </>
    )
}

export default categorie4