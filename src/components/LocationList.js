import React from 'react'; 
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';
import './styles.css';
// ciomponente funcional - stateless component

const LocationList = ({ cities,  onSelectedLocation}) => {
	const handleWeatherLocationClikc = city => {
		console.log("handleWeatherLocationClikc");
		onSelectedLocation(city);
	};
	const strToComponents = cities => (
		//clave natural
		cities.map(city => 
			(
				<WeatherLocation 
					key={city} 
					city={city} 
					onWeatherLocationClick={ () => handleWeatherLocationClikc(city)}
				/>
			)
		)
		//sin clave natural usando index cities.map( (city, index) => <WeatherLocation key={index} city={city} />)
	);
	return(
		<div className="locationList">
			{ strToComponents(cities) }
		</div>
	);
	
}; 


LocationList.protoTypes = {
	cities: PropTypes.array.isRequired,
	onSelectedLocation: PropTypes.func,
}

export default LocationList;