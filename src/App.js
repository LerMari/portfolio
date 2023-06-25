import './App.css';
import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import Modal from './Components/Modal/Modal';
import {useState} from 'react';


function App() {
const [openModal, setOpenModal] = useState(false)

  return (
    <div className="App">
      <NavBar />
      <button className="openModalBtn" onClick={() => {setOpenModal(true)}}>Open</button>
      {openModal && <Modal closeModal={setOpenModal} />}
      <div id="name">Marisa<br></br>
      Lerma</div>
    </div>
  );
}

export default App;
