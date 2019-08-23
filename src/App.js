import React from 'react';
import './App.css';
import LocationList from './components/LocationList';

const cities = [
	'Buenos Aires, ar', 
	'Bogota, col',
	'Washington, us', 
	'Ciudad de México, mx', 
	'Madrid, es',
	'Tokio, jpn'
];

function App() {
  return (
    <div className="App">
      <LocationList cities={cities}/>
    </div>
  );
}

export default App;
