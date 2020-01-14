import React, { Component, Fragment } from 'react';

const containerLarge = {
	display: 'flex',
	flexDirection: 'row',

	justifyContent: 'space-evenly',
	width: 1000,
	paddingTop: 40,
	margin: '50px 0',
	cursor: 'default'

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

const aDec = {
	textDecorationLine: 'none'
};

// const centerAndSpace = {
// 	display: 'flex',
// 	justifyContent: 'space-evenly',
// 	alignItems: 'center'
// };

class FooterDesktopUp extends Component {
	render() {
		return (
			<Fragment>
				<div style={containerLarge}>
					<div>BASEMENT</div>
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
						{' '}
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

					<div>
						Follow Us
						<ul
							style={{
								listStyle: 'none',
								display: 'flex',
								flexDirection: 'row',
								padding: 0
							}}
						>
							<a href="/" style={aDec}>
								<li style={socialLinkUl}>
									<i
										class="fab fa-facebook-f fa-sm"
										style={{ color: '#FFFFFF' }}
									/>
								</li>
							</a>
							<a href="/" style={aDec}>
								<li style={socialLinkUl}>
									<i
										class="fab fa-twitter fa-sm"
										style={{ color: '#FFFFFF' }}
									/>
								</li>
							</a>
							<a href="/" style={aDec}>
								<li style={socialLinkUl}>
									<i
										class="fab fa-instagram fa-sm"
										style={{ color: '#FFFFFF' }}
									/>
								</li>
							</a>
						</ul>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default FooterDesktopUp;
