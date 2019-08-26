import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { PropTypes } from 'prop-types';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from '../../services/transformWeather';
import './styles.css';

// al extender de component vemos como podemos aprovechar el ciclo de vida de react
// ejemplo manejar estados
class WeatherLocation extends Component {

  constructor(props) { // aqui se crea el componente
    super(props); // el constructor del componente base
    const { city } = props;
    this.state = { // estado parcial del componente, asi para el const
      city,
      data: null,
    };
    console.log('constructor');
  }

  // aqui se ponen realmente las llamadas
  componentDidMount() {
    console.log('componentDidMount');
    this.handleUpdateClick();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  }

  componentWillMount() {
    console.log('UNSAFEcomponentWillMount');
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('UNSAFEcomponentWillUpdate');
  }

	handleUpdateClick = () => {
	  const api_weather = getUrlWeatherByCity(this.state.city);
	  fetch(api_weather).then((resolve) => resolve.json()).then((data) => {
	    const newWeather = transformWeather(data);
	    console.log(newWeather);
	    this.setState({
	      data: newWeather,
	    });

	  });


	}


	// this para cosas propias del componente

	render = () => {
		const { onWeatherLocationClick } = this.props; 
		const { city, data } = this.state; // destructuring
		return (
			<div className="weatherLocationCont" onClick={onWeatherLocationClick}>
				<Location city={city} />
				{data ? <WeatherData data={data} /> : <CircularProgress size={50} />}
			</div>
		);
	}
}

WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired,
  onWeatherLocationClick: PropTypes.func,
};
export default WeatherLocation;
