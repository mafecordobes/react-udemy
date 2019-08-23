import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';
import { api_weather } from './../../constants/api_url';
import './styles.css';


//al extender de component vemos como podemos aprovechar el ciclo de vida de react
//ejemplo manejar estados
class WeatherLocation extends Component {

    constructor () { // aqui se crea el componente
        super(); //el constructor del componente base
        this.state = { //estado parcial del componente, asi para el const 
            city: "Buenos Aires",
            data: null,
		}
		console.log("constructor");
	}

	//aqui se ponen realmente las llamadas
	componentDidMount() {
		console.log("componentDidMount");
		this.handleUpdateClick();
	}

	componentDidUpdate(prevProps, prevState) {
		console.log("componentDidUpdate");
	}

	componentWillMount() {
		console.log("UNSAFEcomponentWillMount");
	}

	componentWillUpdate(nextProps, nextState) {
		console.log("UNSAFEcomponentWillUpdate");
	}
	
    handleUpdateClick = () => {
        fetch(api_weather).then( resolve => {
            
            return resolve.json();
        }).then( data => {
			const newWeather = transformWeather(data);
			console.log(newWeather);
			this.setState({ 
				data: newWeather
			});
        
        });
        
      
    }


    //this para cosas propias del componente 

    render() {
		console.log("render");
        const { city, data } = this.state; // destructuring
        return (
            <div className="weatherLocationCont">
                <Location city={city}></Location>
				{
					data ? 
					<WeatherData data={data}></WeatherData> : 
					"Cargando..."
				}
            </div>
        );
    }
}

export default WeatherLocation;