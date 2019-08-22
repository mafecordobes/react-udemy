import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {
    SUN, WINDY,
} from './../../constants/weathers';

const location = "Buenos Aires,ar";
const api_key = "7fdcc724256ed0a1196ae5ad6ed81a40";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;

 const data = {
     temperature: 5, 
     weatherState: SUN, 
     humidity: 5, 
     wind: '10 ms/s',
 }

 const data2 = {
    temperature: 15, 
    weatherState: WINDY, 
    humidity: 12, 
    wind: '20 ms/s',
}

//al extender de component vemos como podemos aprovechar el ciclo de vida de react
//ejemplo manejar estados
class WeatherLocation extends Component {

    constructor () { // aqui se crea el componente
        super(); //el constructor del componente base
        this.state = { //estado parcial del componente, asi para el const 
            city: "Buenos Aires",
            data: data,
        }
    }

    handleUpdateClick = () => {
        fetch(api_weather).then( resolve => {
            
            return resolve.json();
        }).then( data => {
            console.log(data);
            debugger;
        });

        console.log("atuzalizado");
        
        this.setState({ //asi se meodifica , no se iguala mas 
            data: data2,
        });
    }


    //this para cosas propias del componente 

    render() {
        const { city, data } = this.state; // destructuring
        return (
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                <WeatherData data={data}></WeatherData>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }
}

export default WeatherLocation;