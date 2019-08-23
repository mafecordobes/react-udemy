import React from 'react'; 
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';
// ciomponente funcional - stateless component

const strToComponents = cities => (
	cities.map( city => <WeatherLocation city={city} />)
);

const LocationList = ({ cities }) => {
	console.log(cities);
	return (
	<div>
		{ strToComponents(cities) }
	</div>);
}; 


LocationList.protoTypes = {
	cities: PropTypes.array.isRequired,
}

export default LocationList;