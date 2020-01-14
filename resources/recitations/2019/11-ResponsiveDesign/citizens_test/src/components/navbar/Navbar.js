import React, { Component } from 'react';
import Breakpoint from 'react-socks';
import NavBarTabletDown from '../navbar/NavBarTabletDown';
import NavBarDesktop from '../navbar/NavBarDesktopUp';

class Navbar extends Component {
	state = {
		openMenu: false,
		navBarTitles: [
			{ navTitle: 'PRODUCT' },
			{ navTitle: 'ABOUT' },
			{ navTitle: 'PORTFOLIO' },
			{ navTitle: 'TEAM' },
			{ navTitle: 'CONTACT' }
		]
	};

	handleClick = () => {
		console.log(this.state);
		let currentMenuState = this.state.openMenu;
		this.setState({
			openMenu: !currentMenuState
		});
	};

	render() {
		return (
			<div>
				<Breakpoint medium down>
					<NavBarTabletDown
						handleClick={this.handleClick}
						openMenu={this.state.openMenu}
						navBarTitles={this.state.navBarTitles}
					/>
				</Breakpoint>

				<Breakpoint large up>
					<NavBarDesktop
						handleClick={this.handleClick}
						openMenu={this.state.openMenu}
						navBarTitles={this.state.navBarTitles}
					/>
				</Breakpoint>
			</div>
		);
	}
}

export default Navbar;
