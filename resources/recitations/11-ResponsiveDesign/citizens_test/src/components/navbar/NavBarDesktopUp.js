import React, { Component } from 'react';

const ulNavStyleLarge = {
	display: 'flex',
	flexDirection: 'row',
	height: 100,
	width: 700,
	padding: 0,
	margin: 'auto',
	backgroundColor: 'transparent'
};

const burgerMenu = {
	width: 25,
	height: 5,
	backgroundColor: '#FFFFFF',
	margin: '6px 0'
};

const outerLayerBurger = {
	marginRight: 12,
	cursor: 'pointer'
};

const burgerMenuStyle = {
	display: 'flex',
	flexDirection: 'column',
	height: 'fit-content',
	width: 285,
	padding: 0,
	backgroundColor: 'white',
	zIndex: 999999999,
	position: 'absolute',
    right: 75,
	borderRadius: 20,
	margin: '10px',
	border: '2px solid #FF6006'
};

const hideBurger = {
	visibility: 'hidden'
};
const showBurger = {
	visibility: 'visible'
};
const closeButton = {
	fontSize: 21,
	position: 'absolute',
	top: 8,
	left: 15,

	cursor: 'pointer',
	height: 25,
	zIndex: 999999,
	width: 25,
	textAlign: 'center'
};

const buttonStyle = {
	color: '#FFFFFF',
	float: 'right',
	height: 50,
	width: 100,
	display: 'inline-flex',
	justifyContent: 'center',
	alignItems: 'center',
	position: 'relative',
	bottom: 75,
	right: 40,
	backgroundColor: '#FF6006',
	cursor: 'pointer'
};

class NavBarDesktop extends Component {
	handleClick = () => {
		this.props.handleClick();
	};

	render() {
		const { navBarTitles, openMenu } = this.props;

		return (
			<div>
				<ul style={ulNavStyleLarge}>
					{/* still passing in the index here incase i will need it at a future date. */}
					{navBarTitles.map((title, i) => {
						return (
							<a
								style={{
									listStyle: 'none',
									textDecoration: 'none',
									margin: 'auto',
									color: 'white',
									fontWeight: '500',
									width: '100%'
								}}
								href="/"
							>
								<li
									style={{
										height: 100,
										width: '100%',
										display: 'inline-flex',
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


				{/* burger menu  */}


				<button onClick={() => this.handleClick()} style={buttonStyle}>
					<div style={outerLayerBurger}>
						<div style={burgerMenu} />
						<div style={burgerMenu} />
						<div style={burgerMenu} />
					</div>
					<span style={{ cursor: 'pointer' }}>menu</span>
				</button>

				{/* shows menu true or false  */}
				
				<div style={openMenu === false ? hideBurger : showBurger}>
					<ul style={burgerMenuStyle}>
						<div className="burgerMenuCloseX">
							<div onClick={() => this.handleClick()} style={closeButton}>
								<i class="fas fa-times fa-lg" />
							</div>
						</div>

					{/* maps through the options passed in from parent */}
					
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
			</div>
		);
	}
}
export default NavBarDesktop;
