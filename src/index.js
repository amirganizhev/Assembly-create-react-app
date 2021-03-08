import React from 'react';
import ReactDOM from 'react-dom';

const Header = () => {
	return (
		<h1>Hello world</h1>
	)
}

const Form = () => {
	return (
		<input type="text" />
	)
}

const Button = () => {
	return (
		<button>start</button>
	)
}

const Component = () => {
	<div>
		<Header />
		<Form />
		<Button />
	</div>
}

ReactDOM.render(<Component />, document.getElementById('root'));
