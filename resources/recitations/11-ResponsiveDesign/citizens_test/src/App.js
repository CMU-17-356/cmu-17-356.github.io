import React, { Component } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import MainContent from './components/mainContent/MainContent';

import { BreakpointProvider } from 'react-socks';

class App extends Component {
	render() {
		return (
			<div className="App">
				<BreakpointProvider>
					<Header />
					<MainContent />
					<Footer />
				</BreakpointProvider>
			</div>
		);
	}
}

export default App;
