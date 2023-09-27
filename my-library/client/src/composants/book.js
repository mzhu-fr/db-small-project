import React from 'react'
// Composant de la page produits pour les grids by mohamed.B
function book(props) {
  return (
    <>
      <div className='book'>
        <h3 className={props.cName}>{props.text}</h3>{/* Nom du livre */}
        <p className={props.cName2}>{props.text2}</p>{/* Nom de l'auteur */}
        <p className={props.cName3}>{props.text3}</p>{/* Prix */}
      </div>
    </>
  )
}

export default book