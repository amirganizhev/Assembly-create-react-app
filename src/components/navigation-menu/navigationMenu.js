import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './navigationMenu.css'

export default class NavigationMenu extends Component {

	render() {
		return (
			<nav>
				<Link to='/'>Россия</Link>
        <Link to='/britain'>Великобритания</Link>
        <Link to='/france'>Франция</Link>
			</nav>
		)
	}
}
