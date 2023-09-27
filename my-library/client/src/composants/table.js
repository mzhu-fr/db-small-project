import React from "react";
import Book from "./book";
import Image from "../image/livre.jpg";

export default function table1() {
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
