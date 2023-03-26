import './App.css';
import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import Modal from './Components/Modal/Modal';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Modal />
      <div id="name">Marisa<br></br>
      Lerma</div>
    </div>
  );
}

export default App;
