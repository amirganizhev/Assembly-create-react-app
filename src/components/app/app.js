import React, { Component } from 'react';

import Header from '../header';
import NavigationMenu from '../navigation-menu'
import Russia from '../russia'
import Britain from '../britain'
import France from '../france'
import Footer from '../footer'

import './app.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Header />
					<NavigationMenu />
					<Route path="/" component={Russia} exact />
					<Route path="/britain" component={Britain} />
					<Route path="/france" component={France} />
					<Footer />
				</div>
			</Router>
		)
	}
}
