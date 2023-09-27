import React from "react";
import Book from "./book";
import Image from "../image/livre.jpg";

export default function card() {
    return (
        <>
            <div className="grid-item">
                <div className="card">
                    <img className="avatar" src={Image} alt={Image} />
                    <Book
                        cName="name"
                        text="Harry Potter"
                        text2="J. K. Rowling"
                        text3="30£"
                    />
                </div>
            </div>
        </>
    );
}



// {/* Test mohamedB
// <div className="grid-item">
//     <div className="card">
//         <h2>Carte 1</h2>
//         <p>Contenu de la carte 1</p>
//     </div>
// </div>

// <div className="grid-item">
//     <div className="card">
//         <h2>Carte 2</h2>
//         <p>Contenu de la carte 2</p>
//     </div>
// </div>

// <div className="grid-item">
//     <div className="card">
//         <h2>Carte 3</h2>
//         <p>Contenu de la carte 3</p>
//     </div>
// </div>
// */}