import React, { Component } from 'react';

import './button.css'

export default class Form extends Component {

	buttonClick = () => {
		console.log('button');
	}

	render() {
		return (
			<button onClick={ this.buttonClick }>start</button>
		)
	}
}
