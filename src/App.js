import React, { useState } from 'react';
import Navbar from './Navbar';
import Dashboard from './Dashboard';

import './App.css';
import { MapContainer, TileLayer, Marker, Popup, LayersControl } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: icon,
  iconUrl: icon,
  shadowUrl: iconShadow
});

function App() {
  const [mapLayer, setMapLayer] = useState('standard');
  const position = [31.7917, -7.0926];
  
  const handleLayerChange = () => {
    setMapLayer(mapLayer === 'standard' ? 'satellite' : 'standard');
  };

  return (
	<div className='container'>
	<Navbar />
	<div className='right'>
 
	<MapContainer center={position} zoom={7} scrollWheelZoom={false} style={{ height: '100%' }}attributionControl={false}>
		  <LayersControl position="bottomright">
			<LayersControl.BaseLayer checked name="Standard">
			  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
			</LayersControl.BaseLayer>
			<LayersControl.BaseLayer name="Satellite">
			  <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
			</LayersControl.BaseLayer>
		  </LayersControl>
		  <Marker position={position}>
			 
		  </Marker>
		</MapContainer>
		

	</div>
	
	
	   
	<div className='map'>	<Dashboard /></div>
	  

	  
	 
	
  </div>
  
  );
}

export default App;

