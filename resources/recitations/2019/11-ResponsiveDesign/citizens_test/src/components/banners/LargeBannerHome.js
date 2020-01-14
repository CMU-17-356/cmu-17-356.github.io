import React, { Component } from 'react';
import Navbar from '../navbar/Navbar';
import Banner from '../banners/Banner';

const containerDiv = {
	height: '100vh',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between'
};

const titleContainer = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center'
};

const title = {
	fontSize: 48,
	color: 'white',
	margin: 'auto',
	fontWeight: 'bold',
	cursor: 'default'
};

class LargeBannerHome extends Component {
	render() {
		return (
			<div style={containerDiv}>
				<Navbar />
				<div style={titleContainer}>
					<div style={title}>BASEMENT</div>
				</div>
				<Banner />
			</div>
		);
	}
}

export default LargeBannerHome;
