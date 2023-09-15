import React from 'react'

function Book(props) {
  return (
    <div>
        <h2 className={props.cName}>{props.text}</h2>
        <p className={props.cName2}>{props.text2}</p>
        <p className={props.cName3}>{props.text3}</p>
    </div>
  )
}

export default Book;