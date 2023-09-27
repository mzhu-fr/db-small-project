import React from 'react'
import Book from '../composants/book'
import '../styles/error.css'

function error() {
  return (
    <>
      <div className='errorPage'>
        <Book
          cName="Erreur"
          text="Page Erreur"
          text2="Rendez-vous à l'une des pages disponibles sur le menu."
        />
      </div>
    </>
  )
}

export default error