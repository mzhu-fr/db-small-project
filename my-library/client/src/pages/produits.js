import React from 'react';
import '../styles/produits.css';
// import Livre from '../livre.jpg'; À placer dans le props du grid
import Book from '../composants/book';

export default function produits() {
  return (
    <div className='pageProduits'>
      <h1>La Librairie d'Angélique </h1>
      <div className='containerProduits'>
        <div className='search'>
          <input></input>
          <label></label>
        </div>

        <div className="grid-container">
        <div className="grid-item">
            <div className="card">
                <Book cName="name"
                text="Harry Potter"
                // Img= {Livre} 
                text2="J. K. Rowling"
                text3="30£"
                />
            </div>
        </div>
        <div className="grid-item">
        <div className="card">
                <Book cName="name"
                text="Harry Potter"
                // Img= {Livre} 
                text2="J. K. Rowling"
                text3="30£"
                />
            </div>
        </div>
        <div className="grid-item">
        <div className="card">
                <Book cName="name"
                text="Harry Potter"
                // Img= {Livre} 
                text2="J. K. Rowling"
                text3="30£"
                />
            </div>
        </div>
        <div className="grid-item">
        <div className="card">
                <Book cName="name"
                text="Harry Potter"
                // Img= {Livre} 
                text2="J. K. Rowling"
                text3="30£"
                />
            </div>
        </div>
        <div className="grid-item">
        <div className="card">
                <Book cName="name"
                text="Harry Potter"
                // Img= {Livre} 
                text2="J. K. Rowling"
                text3="30£"
                />
            </div>
        </div>
        <div className="grid-item">
        <div className="card">
                <Book cName="name"
                text="Harry Potter"
                // Img= {Livre} 
                text2="J. K. Rowling"
                text3="30£"
                />
            </div>
        </div>
    </div>

      </div>
    </div>
  )
}
