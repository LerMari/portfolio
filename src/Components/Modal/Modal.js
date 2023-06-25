import React from 'react'
import './Modal.css';

function Modal({closeModal}) {
  return (
    <div className="modalBackground">
        <div className="modalContainer"></div>
            <div className="titleCloseBtn">
              <button onClick={() => closeModal(false)}>X</button>
              </div>
            <div className="title"><h1>Hello!</h1></div>
            <div className="body"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></div>
            <div className="footer"><button onClick={() => closeModal(false)}>Close</button></div>

        Modal</div>
  )
}

export default Modal