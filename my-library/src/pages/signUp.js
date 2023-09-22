import React from 'react'
import '../styles/signup.css'

export default function signup() {

  return (
    <>
      <div className="pageSignUp">
        <div className="container">
          <h2>Inscription</h2>

          <form id="registration-form">
            <label htmlFor="name">Nom :</label>
            <input type="text" id="name" name="name" />
            <label htmlFor="email">Email :</label>
            <input type="email" id="email" name="email" />
            <label htmlFor="password">Mot de passe :</label>
            <input type="password" id="password" name="password"/> 
            <button type="submit">S'inscrire</button>
          </form>

          <div className="error" id="error-message" />
        </div>
      </div>
    </>
  )
}
