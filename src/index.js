import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import Form from './components/form';
import Button from './components/button';

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
