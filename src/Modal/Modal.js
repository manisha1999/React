import React from 'react'
import './Modal.css'

function Modal({onClose}) {
  return (
    <div className='modal'>
        <p>My name is Manisha</p>
        <button onClick={onClose}>Close</button>
    </div>
  )
}

export default Modal