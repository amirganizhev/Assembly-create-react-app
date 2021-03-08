import React, { Component } from 'react';

import Header from '../header';
import Form from '../form';
import Button from '../button';

import './app.css';

export default class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Form />
				<Button />
			</div>
		)
	}
}
