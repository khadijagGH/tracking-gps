 
import { useState, useEffect } from "react";
import './Dashboard.css';




function Dashboard(){
	// for list 
	
	const [selectedClientType, setSelectedClientType] = useState('societé');
  const vehicles = [
    { id: 1, clientType: 'societé', nom: 'ABC Company', marque: 'Toyota', modele: 'Corolla', lat: 31.7917, lng: -7.0926 },
    { id: 2, clientType: 'particulier', nom: 'John Doe', marque: 'Honda', modele: 'Civic', lat: 33.9716, lng: -6.8498 },
    { id: 3, clientType: 'societé', nom: 'XYZ Corporation', marque: 'Ford', modele: 'Fiesta', lat: 33.5362, lng: -7.6894 },
    { id: 4, clientType: 'particulier', nom: 'Jane Doe', marque: 'Tesla', modele: 'Model 3', lat: 34.0151, lng: -6.8328 },
    { id: 5, clientType: 'societé', nom: 'PQR Industries', marque: 'Nissan', modele: 'Sentra', lat: 30.3918, lng: -9.5551 },
  ];

  const filteredVehicles = vehicles.filter(vehicle => vehicle.clientType === selectedClientType);

// for recherche bar  
const [matricules, setMatricules] = useState([]);
const [filteredMatricules, setFilteredMatricules] = useState([]);

useEffect(() => {
  // Retrieve the list of matricules from the server
  fetch("/matricules")
	.then(response => response.json())
	.then(matricules => {
	  setMatricules(matricules);
	  setFilteredMatricules(matricules);
	});
}, []);

function handleSearch(event) {
  const query = event.target.value.toLowerCase();
  const filtered = matricules.filter(matricule =>
	matricule.toLowerCase().includes(query)
  );
  setFilteredMatricules(filtered);
}

return(
	<div className="all">
        <div className="list">
          <div className="buttons">
            <button
              className={selectedClientType === 'societé' ? 'selected' : ''}
              onClick={() => setSelectedClientType('societé')}
            >
              Société
            </button>
            <button
              className={selectedClientType === 'particulier' ? 'selected' : ''}
              onClick={() => setSelectedClientType('particulier')}
            >
              Particulier
            </button>
			 
      <input type="text" onChange={handleSearch} placeholder="Matricule...."  id="recheche"/>
      <ul>
        {filteredMatricules.map(matricule => (
          <li key={matricule}>{matricule}</li>
        ))}
      </ul>
     
          </div>
          <div className="dashboard">
            <div className="vehicle-list">
              <h2>{selectedClientType === 'societé' ? 'Véhicules Société' : 'Véhicules Particulier'}</h2>
              <ul>
                {filteredVehicles.map(vehicle => (
                  <li key={vehicle.id}>
                    <div className="vehicle-info">
                      <span className="client-type">{vehicle.clientType}</span>
                      <span className="client-nom">{vehicle.nom}</span>
                      <span className="vehicle-marque">{vehicle.marque}</span>
                      <span className="vehicle-modele">{vehicle.modele}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
</div>
 );
}


export default Dashboard;