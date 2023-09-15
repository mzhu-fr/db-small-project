import React from 'react'

function Book(props) {
  return (
    <div className='book'>
        <h2 className={props.cName}>{props.text}</h2>
        <p className={props.cName2}>{props.text2}</p>
    </div>
  )
}

export default Book;