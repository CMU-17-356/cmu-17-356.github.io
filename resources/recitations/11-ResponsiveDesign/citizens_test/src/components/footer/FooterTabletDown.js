import React, { Component, Fragment } from 'react';

const containerMedium = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	cursor: 'default'
};

const centerAndSpace = {
	display: 'flex',
	justifyContent: 'space-evenly',
	alignItems: 'center'
};

const aLink = {
	textDecorationLine: 'none',
	color: '#B1B1B1'
};
const socialLinkUl = {
	borderRadius: 50,
	backgroundColor: '#B1B1B1',
	minHeight: 25,
	minWidth: 25,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	marginRight: 3
};

const ulStyle = {
	listStyle: 'none',
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'center',
	padding: 0
}

const aDec = {
	textDecorationLine: 'none'
};

const iconColour = { color: '#FFFFFF' };
const title = { textAlign: 'center', margin: '10px 0 20px 0' };

class FooterTabletDown extends Component {
	render() {
		return (
			<Fragment>
				<div style={containerMedium}>
					<div style={title}>BASEMENT</div>
					<div style={centerAndSpace}>
						<div>
							PRODUCT
							<ul style={{ listStyle: 'none', padding: 0 }}>
								{/* i would have used this here
				
				<Link className='link' to={LINK_LOCATION}/> 

				but for the sake of this front end creation and for a tech test, i did not think implementing 
				react router dom would be what was required
				
				*/}
								<a href="/" style={aLink}>
									<li>Features</li>
								</a>
								<a href="/#" style={aLink}>
									<li>Promo</li>
								</a>
								<a href="/#" style={aLink}>
									<li>Download</li>
								</a>
							</ul>
						</div>
						<div>
							CONTACT
							<ul style={{ listStyle: 'none', padding: 0 }}>
								<a href="/#" style={aLink}>
									<li>Find us</li>
								</a>
								<a href="/#" style={aLink}>
									<li>FAQ</li>
								</a>
								<a href="/#" style={aLink}>
									<li>Help</li>
								</a>
							</ul>
						</div>
					</div>
					<div style={{ textAlign: 'center' }}>
						Follow Us
						<ul
							style={ulStyle}
						>
							<a href="/" style={aDec}>
								<li style={socialLinkUl}>
									<i class="fab fa-facebook-f fa-sm" style={iconColour} />
								</li>
							</a>
							<a href="/" style={aDec}>
								<li style={socialLinkUl}>
									<i class="fab fa-twitter fa-sm" style={iconColour} />
								</li>
							</a>
							<a href="/" style={aDec}>
								<li style={socialLinkUl}>
									<i class="fab fa-instagram fa-sm" style={iconColour} />
								</li>
							</a>
						</ul>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default FooterTabletDown;
