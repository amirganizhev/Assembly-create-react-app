import React, { Component } from 'react';

import Header from '../header';
import NavigationMenu from '../navigation-menu'
import Russia from '../russia'
import Britain from '../britain'
import France from '../france'
import Footer from '../footer'

import './app.css';

export default class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<NavigationMenu />
				<Russia />
				<Britain />
				<France />
				<Footer />
			</div>
		)
	}
}
