import React, { Component } from 'react';

import './header.css'

export default class Header extends Component {

	render() {
		return (
			<header>
				<h1 onClick={ this.headerClick }>Исторический портал</h1>
			</header>
		)
	}
}
