import React, { Component } from 'react';
import Breakpoint from 'react-socks';

import FooterTabletDown from '../footer/FooterTabletDown';
import FooterDesktopUp from '../footer/FooterDesktopUp';

class Footer extends Component {
	render() {
		return (
			<div>
				<Breakpoint medium down>
					<FooterTabletDown />
				</Breakpoint>
				<Breakpoint large up>
					<FooterDesktopUp />
				</Breakpoint>
			</div>
		);
	}
}

export default Footer;
