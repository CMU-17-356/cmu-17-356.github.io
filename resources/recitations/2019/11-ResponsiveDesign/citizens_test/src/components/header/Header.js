import React, { Component } from 'react';
import LargeBannerHome from '../banners/LargeBannerHome';

class Header extends Component {

	render() {
		return (
			<div style={{ backgroundColor: 'black' }}>
				<LargeBannerHome />
			</div>
		);
	}
}

export default Header;
