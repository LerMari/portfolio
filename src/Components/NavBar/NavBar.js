import React from 'react'
import './NavBar.css'
import {useState} from 'react';

function NavBar() {

  const [openModal, setOpenModal] = React.useState(false);

  return (
    <div id="navlinks">
        <h1>WEB</h1>
        <h1>GRAPHIC DESIGN</h1>
        <h1 onClick = {()=>{setOpenModal(true)}}>ABOUT</h1>
        <h1>CONTACT</h1>
    </div>
  )
}

export default NavBar