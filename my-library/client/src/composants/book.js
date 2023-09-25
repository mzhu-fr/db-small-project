import React from 'react'
// Composant de la page produits pour les grids by mohamed.B
function book(props) {
  return (
    <>
        <div className='book'>
            <h2 className={props.cName}>{props.text}</h2>{/* Nom du livre */}
            <img className={props.cImg}>{props.Img}</img>
            <p className={props.cName2}>{props.text2}</p>{/* Nom de l'auteur */}
            <p className={props.cName3}>{props.text3}</p>{/* Prix */}
        </div>
    </>
  )
}

export default book