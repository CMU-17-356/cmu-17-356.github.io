import React, { Component, Fragment } from 'react';

const containerDivLarge = {
	padding: '0 50px',
	cursor: 'default'
};

const h2Style = {
	fontSize: '38px',
	margin: 50,
	textAlign: 'center',
	fontWeight: 400
};

const divContainer = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	marginLeft: 'auto',
	marginRight: 20
};

const p1Container = {
	height: 350,
	width: 250,
	backgroundColor: '#F4F4F4',
	padding: 40,
	fontWeight: 300
};

const p2Container = {
	width: 500,
	padding: 20,
	marginRight: 'auto',
	marginLeft: 20
};

const p1Style = {
	color: '#B1B1B1',
	fontWeight: 500,
	fontSize: 12
};
const p2Style = { color: '#B1B1B1', fontWeight: 500 };

const cardStyle = {
	display: 'flex',
	flexDirection: 'row',
	height: '100%'
};

class MainContentDesktopUp extends Component {
	render() {
		return (
			<Fragment>
				<div style={containerDivLarge}>
					<h2 style={h2Style}>Amet consectetur adipisicing elit.</h2>
					<div style={cardStyle}>
						<div style={divContainer}>
							<div style={p1Container}>
								<h3>Lorem ipsum dolor</h3>
								<p style={p1Style}>
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
						<div style={p2Container}>
							<h3 style={{ fontWeight: 400 }}>Lorem ipsum dolor</h3>
							<p style={p2Style}>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								Voluptates voluptatum pariatur quos ratione esse consequuntur
								deleniti obcaecati voluptatem temporibus hic, dolores nostrum,
								dolorum eius beatae corporis dolore aspernatur ea totam.
							</p>
							<p style={p2Style}>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								Voluptates voluptatum pariatur quos ratione esse consequuntur
								deleniti obcaecati voluptatem temporibus hic, dolores nostrum,
								dolorum eius beatae corporis dolore aspernatur ea totam.
							</p>
							<h3 style={{ fontWeight: 400 }}>
								Lorem ipsum dolor Lorem ipsum dolor, Lorem ipsum dolor Lorem
								ipsum dolor
							</h3>
							<p style={p2Style}>
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
export default MainContentDesktopUp;
