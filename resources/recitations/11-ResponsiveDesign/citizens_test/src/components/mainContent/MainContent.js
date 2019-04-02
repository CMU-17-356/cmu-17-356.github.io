import React, { Component, Fragment } from 'react';
import Breakpoint from 'react-socks';

import MainContentTabletDown from '../mainContent/MainContentTabletDown';
import MainContentDesktopUp from '../mainContent/MainContentDesktopUp';

class MainContent extends Component {
	render() {
		return (
			<Fragment>
				<Breakpoint medium down>
					<MainContentTabletDown />
				</Breakpoint>

				<Breakpoint large up>
					<MainContentDesktopUp />
				</Breakpoint>
			</Fragment>
		);
	}
}

export default MainContent;
