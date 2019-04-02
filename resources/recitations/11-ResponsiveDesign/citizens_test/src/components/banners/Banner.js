import React, { Component } from 'react';
import Breakpoint from 'react-socks';

const mediumBackground = {
	backgroundColor: '#FF6008',
	display: 'flex',
	flexDirection: 'column',
	height: '100%',
	justifyContent: 'center',
	alignItems: 'center'
};

const largeBackground = {
	height: 120,
	backgroundColor: '#FF6008',
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between'
};

const pMediumStyle = {
	margin: 'auto',
	padding: '20px 0 10px 0',
	color: '#FFFFFF',
	fontWeight: 500,
	fontSize: 20,
	textAlign: 'center',
	cursor: 'default'
};

const pLargeStyle = {
	margin: 'auto',
	padding: 20,
	color: '#FFFFFF',
	fontWeight: 500,
	width: 700,
	fontSize: 20,
	cursor: 'default'
};

const buttonMediumContainer = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	padding: 20
};

const largeButtonContainer = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	padding: '20px 20px 20px 20px'
};

const mediumButtonStyle = {
	backgroundColor: '#FFFFFF',
	borderRadius: 100,
	minWidth: 200,
	minHeight: 50,
	color: '#333333',
	cursor: 'pointer'
};

const largeButtonStyle = {
	backgroundColor: '#FFFFFF',
	borderRadius: 100,
	minWidth: 200,
	minHeight: 50,
	color: '#333333',
	cursor: 'pointer'
};







class Banner extends Component {
	render() {
		return (
			<div>
				<Breakpoint medium down>
					<div style={mediumBackground}>
						<p style={pMediumStyle}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sed
							mollitia odio. Provident?
						</p>
						<div style={buttonMediumContainer}>
							<button style={mediumButtonStyle}>MORE INFO</button>
						</div>
					</div>
				</Breakpoint>

				<Breakpoint large up>
					<div style={largeBackground}>
						<p style={pLargeStyle}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sed
							mollitia odio. Provident?
						</p>
						<div style={largeButtonContainer}>
							<button style={largeButtonStyle}>MORE INFO</button>
						</div>
					</div>
				</Breakpoint>
			</div>
		);
	}
}

export default Banner;
