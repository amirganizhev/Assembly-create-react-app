import React, { Component } from 'react';

import './header.css'

export default class Header extends Component {

	headerClick = () => {
		console.log('header');
	}

	render() {
		return (
			<h1 onClick={ this.headerClick }>Hello world</h1>
		)
	}
}
