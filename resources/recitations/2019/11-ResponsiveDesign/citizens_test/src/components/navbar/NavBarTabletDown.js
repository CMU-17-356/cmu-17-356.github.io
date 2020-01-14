import React, { Component, Fragment } from 'react';

const ulNavStyleMedium = {
	display: 'flex',
	flexDirection: 'column',
	height: 'fit-content',
	width: '285px',
	padding: '0px',
	backgroundColor: 'white',
	zIndex: '999999999',
	position: 'absolute',
	right: 0,
	borderRadius: '20px',
	margin: '10px',
	border: '2px solid #FF6006'

};
const burgerMenu = {
	width: '35px',
	height: '5px',
	backgroundColor: 'white',
	margin: '6px 0'
};
const outerLayerBurger = {
	padding: '20px',
	float: 'right'
};

const hideBurger = {
	visibility: 'hidden'
};
const showBurger = {
	visibility: 'visible'
};
const closeButton = {
	fontSize: '21px',
	position: 'absolute',
	top: '8px',
	left: '15px',

	cursor: 'pointer',
	height: 25,
	zIndex: 999999,
	width: 25,
	textAlign: 'center'
};

 class NavBarTabletDown extends Component {


	handleClick = () => {
		this.props.handleClick();
	};


	
	render() {

		const { navBarTitles, openMenu } = this.props;

		return (
			<Fragment>
				<div onClick={() => this.handleClick()} style={outerLayerBurger}>
					<div style={burgerMenu} />
					<div style={burgerMenu} />
					<div style={burgerMenu} />
				</div>
				<div style={openMenu === false ? hideBurger : showBurger}>
					<ul style={ulNavStyleMedium}>
						<div
							className="burgerMenuCloseX"
						
						>
							<div onClick={() => this.handleClick()} style={closeButton}>
								<i class="fas fa-times fa-lg" />
							</div>
						</div>

						{navBarTitles.map((title, i) => {
							return (
								<a
									style={{
										listStyle: 'none',
										textDecoration: 'none',
										margin: 'auto',
										color: 'black',
										fontWeight: 500,
										width: '100%'
									}}
									href="/"
								>
									<li
										style={{
											height: 85,
											display: 'flex',
											justifyContent: 'center',
											alignItems: 'center'
										}}
									>
										{title.navTitle}
									</li>
								</a>
							);
						})}
					</ul>
				</div>
			</Fragment>
		);
	}
}
export default NavBarTabletDown;