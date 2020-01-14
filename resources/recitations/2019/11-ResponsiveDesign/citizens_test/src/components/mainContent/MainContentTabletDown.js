import React, { Component, Fragment } from 'react';

const containerDivMedium = {
	display: 'flex',
	flexDirection: 'column',
	height: '100%',
	cursor: 'default'
};

const centerContent = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center'
};

const h2Style = {
	fontSize: 38,
	margin: 50,
	textAlign: 'center',
	fontWeight: 400,
	cursor: 'default'
};

const centerStyle = {
	height: 285,
	width: 250,
	backgroundColor: '#F4F4F4',
	padding: 40,
	fontWeight: 300
};

const pStyle = {
	color: '#B1B1B1',
	fontWeight: 500,
	fontSize: 12
};

class MainContentTabletDown extends Component {
	render() {
		return (
			<Fragment>
				<div style={containerDivMedium}>
					<h2 style={h2Style}>Amet consectetur adipisicing elit.</h2>
					<div>
						<div style={centerContent}>
							<div style={centerStyle}>
								<h3 style={{ cursor: 'default' }}>Lorem ipsum dolor</h3>
								<p style={pStyle}>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est,
									illum dolores. Nobis asperiores nemo commodi magni? Officiis
									corporis sed obcaecati laudantium beatae, libero quaerat in
									inventore, eum distinctio, exercitationem vitae.
								</p>
								<div style={{ marginTop: 50 }}>James Counter</div>
								<div style={{ color: '#B1B1B1', marginTop: 5 }}>
									Citizens Advice
								</div>
								<div style={{ color: '#B1B1B1', marginTop: 5 }}>
									Lead Front UX Developer
								</div>
							</div>
						</div>
						<div
							style={{
								padding: 40,
								display: 'flex',
								flexDirection: 'column'
							}}
						>
							<h3 style={{ fontWeight: 400 }}>Lorem ipsum dolor</h3>
							<p style={{ color: '#B1B1B1', fontWeight: 500 }}>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								Voluptates voluptatum pariatur quos ratione esse consequuntur
								deleniti obcaecati voluptatem temporibus hic, dolores nostrum,
								dolorum eius beatae corporis dolore aspernatur ea totam.
							</p>
							<p style={{ color: '#B1B1B1', fontWeight: 500 }}>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								Voluptates voluptatum pariatur quos ratione esse consequuntur
								deleniti obcaecati voluptatem temporibus hic, dolores nostrum,
								dolorum eius beatae corporis dolore aspernatur ea totam.
							</p>
							<h3 style={{ fontWeight: 400 }}>
								Lorem ipsum dolor Lorem ipsum dolor, Lorem ipsum dolor Lorem
								ipsum dolor
							</h3>
							<p style={{ color: '#B1B1B1', fontWeight: 500 }}>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								Voluptates voluptatum pariatur quos ratione esse consequuntur
								deleniti obcaecati voluptatem temporibus hic, dolores nostrum,
								dolorum eius beatae corporis dolore aspernatur ea totam.
							</p>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default MainContentTabletDown;
