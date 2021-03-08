import React, { Component } from 'react';

import './form.css'

export default class Form extends Component {

	formClick = () => {
		console.log('form');
	}

	render() {
		return (
			<input type="text" onClick={ this.formClick }/>
		)
	}
}
