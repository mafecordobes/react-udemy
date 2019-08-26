import React from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import './App.css';
import LocationList from './components/LocationList';
import { Grid, Row, Col } from 'react-flexbox-grid';

const cities = [
	'Buenos Aires, ar', 
	'Bogota, col',
	'Washington, us', 
	'Ciudad de México, mx', 
	'Madrid, es',
	'Tokio, jpn'
];

function App() {

	const handleSelectionLocation = city => {
		console.log(`handleSelectionLocation ${city}`);
	};
	return (
		<Grid>
			<Row>	
				<AppBar position='sticky'>
					<Toolbar variant='title' color="inherit">
						<Typography>
							Weather App
						</Typography>
					</Toolbar>
				</AppBar>
			</Row>
			<Row>
				<Col xs={12} md={6}>
					<LocationList 
						cities={cities} 
						onSelectedLocation={handleSelectionLocation} 
					/>
				</Col>
				<Col xs={12} md={6}>
					<Paper elevation={4}>
						<div className="details"></div>
					</Paper>
				</Col>
			</Row>
			
		</Grid>
	);
}

export default App;
