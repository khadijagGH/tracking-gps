import React, { useState } from 'react';
import './Navbar.css';// importation du fichier CSS
import './Dashboard.css';
 
function Navbar() {
  const totalCars = 500; // example data, replace with actual data
  const movingCars = 250; // example data, replace with actual data
  const parkedCars = 250; // example data, replace with actual data
 
  return (
    <div>
    <nav>
      <div className="navbar-brand">
        <img src="./logo.png" alt="Logo de HAG Track" className="logo" />
        <h1 className="app-name">HAG Track</h1>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#" className="nav-link">Véhicules</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Administration</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Rapport</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Historique</a>
        </li>
      </ul>

	  
	  <div className='profil'  >
        <img src="./profil.png" alt="Admin" className="profil" /> 
      </div>
      <div className='logout'  >
        <img src="./exit.png" alt="Admin" className="logout" /> 
      </div>
	 
    </nav>
    <div className="dashboard-container">
  <div className="dashboard-box">
    <img src="./twoCar.png" className="carblue"></img>
    <div className="car">
      <h2>Total cars</h2>
      <p>{totalCars}</p>
    </div>
  </div>
  <div className="dashboard-box">
    <img src="./car.png" className="cargreen"></img>
    <div className="car">
      <h2>Moving cars</h2>
      <p>{movingCars}</p>
    </div>
  </div>
  <div className="dashboard-box">
    <img src="./car.png" className="carred"></img>
    <div className="car">
      <h2>Parked cars</h2>
      <p>{parkedCars}</p>
    </div>
  </div>
 

  
   
</div>

    </div>
    
     

  );
}

export default Navbar;
