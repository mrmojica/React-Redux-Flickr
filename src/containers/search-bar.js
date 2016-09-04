
//adding {Component} lets us not have to type class 'name' extends React.Component{} 
import React, {Component} from 'react';
import {connect} from 'react-redux';
import redux from 'redux';
import actions from '../actions/index.js'

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {term: ''};

		//bundle.js:22406 Uncaught TypeError: Cannot read property 'props' of null (*input was giving a null*)
		//to clear null error we add the following code below.
		this.onSubmit = this.onSubmit.bind(this);

	}

	onSubmit(event) {
		event.preventDefault();
		console.log('Submit button worked');
		console.log(this.refs.userInput.value);
		var input = this.refs.userInput.value;


		//****ACTION DISPATCH needs to go here to connect with variable input as the argument!****


		//return input back to empty value (null)
		this.refs.userInput.value = null;
		
	}



	render() {
		return (
			<form onSubmit={this.onSubmit} className='input-group'>
				<input type='text' ref='userInput' className='form-control'/>
				<span className='input-group-btn'>
				<button type='submit' className='btn btn-secondary'>Submit</button>
				</span>
			</form>

			);

	}


}




module.exports = SearchBar;