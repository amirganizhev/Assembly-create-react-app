import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header.js';
import Form from './components/form.js';
import Button from './components/button.js';

const App = () => {
	return (
		<div>
			<Header />
			<Form />
			<Button />
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));
