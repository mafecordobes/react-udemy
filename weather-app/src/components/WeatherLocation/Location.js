import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Location = ({ city }) => (
    //Destructuring 
    // is like: const city = props.city; asi no hace falta el props.city
    //const { city } = props;
    //const Location = (props) => { cambia y es lo mismo 
    //como es una linea se puede poner sin el return 
    <div className="LocationCont">
        <h1>
            {city}
        </h1>
    </div>
    
);

Location.propTypes = {
    city: PropTypes.string.isRequired,
}

export default Location;