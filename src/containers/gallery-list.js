import React, {Component} from 'react';
import {connect} from 'react-redux';
import redux from 'redux';
import actions from '../actions/index.js'

class GalleryList extends Component {

	render() {
		return (
			<div>
				<h1>Image Gallery</h1>
				<ul className="list-group col-sm-4">
					<li>Image 1</li>
					<li>Image 2</li>
					<li>Image 3</li>
					<li>Image 4</li>
					<li>Image 5</li>
				</ul>
			</div>
			);
	}

}


module.exports = GalleryList;